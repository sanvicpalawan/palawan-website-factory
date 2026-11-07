import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const root = document.documentElement;
root.classList.add('js');

/* ── Header + scroll progress ──────────────────────────── */
const header = document.getElementById('siteHeader');
const progress = document.querySelector('.scroll-progress');
const onScroll = () => {
  const y = window.scrollY || 0;
  header?.classList.toggle('is-scrolled', y > 32);
  if (progress) {
    const max = document.body.scrollHeight - window.innerHeight;
    progress.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`;
  }
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ── Mobile navigation ─────────────────────────────────── */
const toggle = document.getElementById('navToggle');
const mobileNav = document.getElementById('mobileNav');
const setNav = (open: boolean) => {
  toggle?.setAttribute('aria-expanded', String(open));
  toggle?.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  mobileNav?.classList.toggle('is-open', open);
  mobileNav?.setAttribute('aria-hidden', String(!open));
  document.body.style.overflow = open ? 'hidden' : '';
};
toggle?.addEventListener('click', () => setNav(toggle.getAttribute('aria-expanded') !== 'true'));
mobileNav?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setNav(false)));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setNav(false);
});

/* ── Menu tabs ─────────────────────────────────────────── */
const tabs = Array.from(document.querySelectorAll<HTMLButtonElement>('.menu-tab'));
const lists = Array.from(document.querySelectorAll<HTMLElement>('.menu-list'));
const note = document.getElementById('menuNote');
const categories = [
  { id: 'coffee', note: 'Single-origin Palawan and Cordillera beans' },
  { id: 'all-day', note: 'Served from open to close' },
  { id: 'table', note: 'After dark, from 18:00' },
  { id: 'drinks', note: 'Pressed, poured and stirred' },
];

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const id = tab.dataset.category;
    tabs.forEach((t) => {
      const active = t === tab;
      t.classList.toggle('is-active', active);
      t.setAttribute('aria-selected', String(active));
    });
    lists.forEach((l) => l.classList.toggle('is-active', l.dataset.category === id));
    const cat = categories.find((c) => c.id === id);
    if (cat && note) note.textContent = cat.note;
  });
});

/* ── Reservation form → client inbox ───────────────────── */
type Inquiry = {
  id: string;
  date: string;
  time: string;
  party: string;
  name: string;
  contact: string;
  notes: string;
  status: 'new' | 'confirmed';
  createdAt: string;
};

const KEY = 'daloy.inquiries';
const readInquiries = (): Inquiry[] => {
  try {
    return JSON.parse(localStorage.getItem(KEY) || '[]');
  } catch {
    return [];
  }
};
const writeInquiries = (rows: Inquiry[]) => localStorage.setItem(KEY, JSON.stringify(rows));

const form = document.getElementById('reserveForm') as HTMLFormElement | null;
const formNote = document.getElementById('formNote');
if (form && formNote) {
  const dateInput = document.getElementById('date') as HTMLInputElement | null;
  if (dateInput) {
    dateInput.min = new Date().toISOString().slice(0, 10);
    dateInput.value = dateInput.min;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const date = String(data.get('date') || '');
    const time = String(data.get('time') || '');
    const party = String(data.get('party') || '');
    const name = String(data.get('name') || '').trim();
    const contact = String(data.get('contact') || '').trim();

    formNote.classList.remove('is-error');
    if (!date || !name || !contact) {
      formNote.textContent = 'Please give us a date, your name and a way to reach you.';
      formNote.classList.add('is-error');
      return;
    }

    const rows = readInquiries();
    rows.unshift({
      id: Math.random().toString(36).slice(2, 9),
      date,
      time,
      party,
      name,
      contact,
      notes: String(data.get('notes') || '').trim(),
      status: 'new',
      createdAt: new Date().toISOString(),
    });
    writeInquiries(rows);

    formNote.textContent = `Thank you, ${name.split(' ')[0]}. Table for ${party} on ${date} at ${time} is held — we will confirm shortly.`;
    form.reset();
    if (dateInput) dateInput.value = dateInput.min;
  });
}

/* ── Admin dashboard ───────────────────────────────────── */
const gate = document.getElementById('adminGate');
const gateError = document.getElementById('gateError');
const adminBody = document.getElementById('adminBody');
const PIN = '1972';

if (gate && adminBody) {
  const pinInput = document.getElementById('pin') as HTMLInputElement | null;
  const unlock = document.getElementById('unlock');

  const reveal = () => {
    gate.setAttribute('hidden', '');
    adminBody.removeAttribute('hidden');
  };

  unlock?.addEventListener('click', () => {
    if (pinInput?.value === PIN) {
      gateError.textContent = '';
      reveal();
      renderInquiries();
    } else {
      gateError.textContent = 'That PIN is not recognised.';
      pinInput?.select();
    }
  });
  pinInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') unlock?.click();
  });

  const list = document.getElementById('inquiryList');
  const empty = document.getElementById('emptyState');
  const statOpen = document.getElementById('statOpen');
  const statTonight = document.getElementById('statTonight');
  const statMenu = document.getElementById('statMenu');
  const seedBtn = document.getElementById('seedBtn');

  const fmt = (iso: string) => new Date(iso).toLocaleString(undefined, {
    day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit',
  });

  const renderInquiries = () => {
    if (!list) return;
    const rows = readInquiries();
    if (empty) empty.style.display = rows.length ? 'none' : '';
    if (statOpen) statOpen.textContent = String(rows.filter((r) => r.status === 'new').length);
    if (statTonight) {
      const today = new Date().toISOString().slice(0, 10);
      statTonight.textContent = String(rows.filter((r) => r.date === today).length);
    }
    if (statMenu) statMenu.textContent = String(
      Object.values(
        JSON.parse(localStorage.getItem('daloy.menuCount') || '24'),
      ).length || 24,
    );

    list.innerHTML = rows
      .map(
        (r) => `
      <li class="inquiry" data-id="${r.id}">
        <div class="inquiry-main">
          <strong>${r.name}</strong>
          <span>${r.party} guest${r.party === '1' ? '' : 's'} · ${r.date} · ${r.time}</span>
          <span class="inquiry-contact">${r.contact}</span>
          ${r.notes ? `<span class="inquiry-notes">${r.notes}</span>` : ''}
        </div>
        <div class="inquiry-side">
          <span class="status ${r.status}">${r.status}</span>
          <button class="btn btn-ghost btn-sm" data-confirm="${r.id}">Confirm</button>
          <button class="btn btn-ghost btn-sm" data-clear="${r.id}">Clear</button>
        </div>
      </li>`,
      )
      .join('');

    list.querySelectorAll('[data-confirm]').forEach((b) =>
      b.addEventListener('click', () => {
        const rows2 = readInquiries().map((r) =>
          r.id === (b as HTMLElement).dataset.confirm ? { ...r, status: 'confirmed' as const } : r,
        );
        writeInquiries(rows2);
        renderInquiries();
      }),
    );
    list.querySelectorAll('[data-clear]').forEach((b) =>
      b.addEventListener('click', () => {
        writeInquiries(readInquiries().filter((r) => r.id !== (b as HTMLElement).dataset.clear));
        renderInquiries();
      }),
    );
  };

  seedBtn?.addEventListener('click', () => {
    const sample: Inquiry[] = [
      {
        id: 'a1', date: new Date().toISOString().slice(0, 10), time: '19:30', party: '2',
        name: 'M. Ocampo', contact: '+63 917 000 1111', notes: 'Window seat if possible',
        status: 'new', createdAt: new Date().toISOString(),
      },
      {
        id: 'a2', date: new Date().toISOString().slice(0, 10), time: '18:30', party: '4',
        name: 'J. Dela Cruz', contact: 'jdelacruz@example.com', notes: 'One vegetarian',
        status: 'confirmed', createdAt: new Date().toISOString(),
      },
      {
        id: 'a3', date: new Date(Date.now() + 86400000).toISOString().slice(0, 10), time: '09:00',
        party: '3', name: 'A. Mercado', contact: '+63 917 000 3333', notes: '',
        status: 'new', createdAt: new Date().toISOString(),
      },
    ];
    writeInquiries([...sample, ...readInquiries()]);
    renderInquiries();
  });

  const repointBtn = document.getElementById('repointBtn');
  const repointNote = document.getElementById('repointNote');
  const repointTarget = document.getElementById('repointTarget') as HTMLSelectElement | null;
  repointBtn?.addEventListener('click', () => {
    if (!repointNote || !repointTarget) return;
    repointNote.textContent = `Table 11 now opens “${repointTarget.value}”. The sticker was not reprinted.`;
  });

  document.querySelectorAll('.switch input').forEach((sw) =>
    sw.addEventListener('change', () => {
      const label = sw.closest('li')?.querySelector('strong');
      if (label) label.style.opacity = sw.checked ? '1' : '.45';
    }),
  );
}

/* ── GSAP choreography ─────────────────────────────────── */
if (typeof gsap !== 'undefined' && !reduceMotion) {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
  tl.to('.hero-img', { scale: 1, duration: 2, ease: 'expo.out' }, 0)
    .to('.line-mask > span', { y: 0, duration: 1.2, stagger: 0.12 }, 0.16)
    .from('.hero .eyebrow', { opacity: 0, y: 16, duration: 0.8 }, 0.6)
    .to('.hero-lede', { opacity: 1, duration: 1, ease: 'power3.out' }, 0.8)
    .from('.hero-cta .btn', { opacity: 0, y: 20, duration: 0.7, stagger: 0.09, ease: 'power3.out' }, 1)
    .from('.hero-facts > div', { opacity: 0, y: 14, duration: 0.6, stagger: 0.07 }, 1.2)
    .from('.hero-foot', { opacity: 0, duration: 0.8 }, 1.4);

  gsap.to('.hero-img', {
    yPercent: 14,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true },
  });
  gsap.to('.hero-content', {
    opacity: 0,
    y: -60,
    ease: 'none',
    scrollTrigger: { trigger: '.hero', start: 'top top', end: '70% top', scrub: true },
  });

  gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        duration: 0.95,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      },
    );
  });

  gsap.utils.toArray<HTMLElement>('.split-media').forEach((el) => {
    const img = el.querySelector('img');
    if (!img) return;
    gsap.fromTo(
      img,
      { yPercent: -8 },
      {
        yPercent: 8,
        ease: 'none',
        scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true },
      },
    );
  });

  gsap.utils.toArray<HTMLElement>('.reserve-media img').forEach((img) => {
    gsap.fromTo(
      img,
      { yPercent: -8, scale: 1.06 },
      {
        yPercent: 8,
        scale: 1.14,
        ease: 'none',
        scrollTrigger: { trigger: '.reserve', start: 'top bottom', end: 'bottom top', scrub: true },
      },
    );
  });

  if (document.fonts?.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
} else {
  document.querySelectorAll('.reveal, .reveal-hero').forEach((el) => {
    (el as HTMLElement).style.opacity = '1';
    (el as HTMLElement).style.transform = 'none';
  });
  document.querySelectorAll('.line-mask > span').forEach((el) => {
    (el as HTMLElement).style.transform = 'none';
  });
  const heroImg = document.querySelector('.hero-img') as HTMLElement | null;
  if (heroImg) heroImg.style.transform = 'none';
}
