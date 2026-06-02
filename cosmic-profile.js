// Cosmic profile generator — standalone page logic (cosmic-profile.html)
// Shares the visual language of NovaSphere: starfield, reveal-on-scroll, mobile nav.

const PROFILE_ENVIRONMENTS = {
  moon: {
    horizon: "Лунный южный полюс",
    sector: "Сектор Шеклтон-7",
    palette: ["#1a1f3a", "#4a5568", "#c8d4e8"],
    roles: {
      engineer: "Инженер лунной базы",
      analyst: "Картограф лунного реголита",
      dreamer: "Архитектор лунных куполов",
      explorer: "Разведчик кратера Шеклтон",
    },
  },
  mars: {
    horizon: "Долины Маринера, Марс",
    sector: "Колония Ред-Ноль",
    palette: ["#1a0a08", "#7c2d12", "#e85d3a"],
    roles: {
      engineer: "Инженер марсианских куполов",
      analyst: "Геолог красных пустынь",
      dreamer: "Архитектор марсианских городов",
      explorer: "Первопроходец Долины Маринера",
    },
  },
  orbit: {
    horizon: "Низкая околоземная орбита",
    sector: "Станция Gateway-2",
    palette: ["#030508", "#312e81", "#a855f7"],
    roles: {
      engineer: "Инженер орбитальных систем",
      analyst: "Навигатор орбитальных станций",
      dreamer: "Архитектор орбитальных верфей",
      explorer: "Капитан патрульного шаттла",
    },
  },
  arctic: {
    horizon: "Северный морской путь",
    sector: "Дрейфующая станция СП-2026",
    palette: ["#030508", "#0c4a6e", "#7dd3fc"],
    roles: {
      engineer: "Инженер полярных платформ",
      analyst: "Климатолог высоких широт",
      dreamer: "Биолог внеземных аналогов",
      explorer: "Капитан-ледокол Арктики",
    },
  },
};

const PROFILE_STRENGTHS = {
  engineer: {
    label: "Инженерная смекалка",
    mission: "Превращать дефицит ресурсов в работающую систему — там, где обычное железо отказывает.",
    traits: ["Конструктор", "Прагматик", "Мастер импровизации"],
  },
  analyst: {
    label: "Холодный анализ",
    mission: "Замечать закономерности раньше алгоритмов и принимать решения, когда данные противоречат интуиции.",
    traits: ["Аналитик", "Хладнокровный", "Видит паттерны"],
  },
  dreamer: {
    label: "Визионерство",
    mission: "Видеть очертания будущего сквозь шум настоящего и вести команду к цели, которой ещё нет на карте.",
    traits: ["Визионер", "Архитектор идей", "Магнит для команды"],
  },
  explorer: {
    label: "Бесстрашие первопроходца",
    mission: "Делать первый шаг туда, где не проложены маршруты, и приносить обратно знания, меняющие правила.",
    traits: ["Первопроходец", "Стойкий", "Лидер фронта"],
  },
};

const PROFILE_MINDSETS = {
  pioneer: {
    label: "Первопроходец",
    slogan: "Карты рисуют те, кто идёт первым.",
  },
  analyst: {
    label: "Аналитик",
    slogan: "Сначала данные — потом легенды.",
  },
  dreamer: {
    label: "Мечтатель",
    slogan: "Горизонт двигают те, кто умеет в него верить.",
  },
  skeptic: {
    label: "Скептик",
    slogan: "Лучшие открытия начинаются с неудобного вопроса.",
  },
};

function generateProfile({ name, environment, strength, mindset }) {
  const env = PROFILE_ENVIRONMENTS[environment];
  const str = PROFILE_STRENGTHS[strength];
  const mind = PROFILE_MINDSETS[mindset];
  const role = env.roles[strength] || env.roles.engineer;
  const callsign = name.trim().toUpperCase();
  const idSeed = Math.abs(
    [...(callsign + environment + strength + mindset)]
      .reduce((acc, ch) => (acc * 31 + ch.charCodeAt(0)) | 0, 7)
  );
  const id = `NH-${String(idSeed % 9000 + 1000)}`;

  return {
    callsign,
    role,
    mission: str.mission,
    slogan: mind.slogan,
    horizon: env.horizon,
    sector: env.sector,
    mindsetLabel: mind.label,
    strengthLabel: str.label,
    traits: str.traits,
    id,
    palette: env.palette,
  };
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  })[ch]);
}

function renderPoster(profile) {
  const poster = document.getElementById("profile-poster");
  const [c1, c2, c3] = profile.palette;
  poster.style.background = `
    radial-gradient(circle at 20% 15%, ${c3}55 0%, transparent 55%),
    radial-gradient(circle at 80% 85%, ${c2}66 0%, transparent 55%),
    linear-gradient(160deg, ${c1} 0%, #030508 60%, ${c2}33 100%)
  `;

  poster.classList.remove("profile-poster--empty");
  poster.classList.remove("is-animating");
  // force reflow to restart animation
  void poster.offsetWidth;
  poster.classList.add("is-animating");

  poster.innerHTML = `
    <div class="poster-frame">
      <div class="poster-header">
        <span>Досье · «Новые горизонты»</span>
        <span class="poster-id">ID ${escapeHtml(profile.id)}</span>
      </div>
      <div class="poster-role-block">
        <div class="poster-callsign">Позывной · ${escapeHtml(profile.callsign)}</div>
        <div class="poster-role">${escapeHtml(profile.role)}</div>
      </div>
      <p class="poster-slogan">«${escapeHtml(profile.slogan)}»</p>
      <p class="poster-mission">${escapeHtml(profile.mission)}</p>
      <div class="poster-traits">
        ${profile.traits.map((t) => `<span class="poster-trait">${escapeHtml(t)}</span>`).join("")}
      </div>
      <div class="poster-stats">
        <div class="poster-stat">
          <span class="poster-stat-label">Горизонт</span>
          <span class="poster-stat-value">${escapeHtml(profile.horizon)}</span>
        </div>
        <div class="poster-stat">
          <span class="poster-stat-label">Сектор экспедиции</span>
          <span class="poster-stat-value">${escapeHtml(profile.sector)}</span>
        </div>
        <div class="poster-stat">
          <span class="poster-stat-label">Тип мышления</span>
          <span class="poster-stat-value">${escapeHtml(profile.mindsetLabel)}</span>
        </div>
        <div class="poster-stat">
          <span class="poster-stat-label">Сильная сторона</span>
          <span class="poster-stat-value">${escapeHtml(profile.strengthLabel)}</span>
        </div>
      </div>
      <div class="poster-watermark" aria-hidden="true">Новые горизонты · novasphere</div>
    </div>
  `;
}

function buildShareText(profile) {
  return (
    `${profile.callsign} — ${profile.role}\n` +
    `«${profile.slogan}»\n\n` +
    `Миссия: ${profile.mission}\n` +
    `Горизонт: ${profile.horizon} · ${profile.sector}\n` +
    `Тип мышления: ${profile.mindsetLabel} · ${profile.strengthLabel}\n\n` +
    `Сгенерируй свой космический профиль: NovaSphere · Новые горизонты\n` +
    `https://vsivolgin.github.io/novasphere/#profile`
  );
}

function posterToSvgDataUrl(profile) {
  const [c1, c2, c3] = profile.palette;
  const traits = profile.traits.map(escapeHtml).join(" · ");
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="1080" height="1350" viewBox="0 0 1080 1350">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="60%" stop-color="#030508"/>
      <stop offset="100%" stop-color="${c2}"/>
    </linearGradient>
    <radialGradient id="glow1" cx="20%" cy="15%" r="55%">
      <stop offset="0%" stop-color="${c3}" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="${c3}" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="80%" cy="85%" r="55%">
      <stop offset="0%" stop-color="${c2}" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="${c2}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="role" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#00e5ff"/>
      <stop offset="50%" stop-color="#a855f7"/>
      <stop offset="100%" stop-color="#ec4899"/>
    </linearGradient>
  </defs>
  <rect width="1080" height="1350" fill="url(#bg)"/>
  <rect width="1080" height="1350" fill="url(#glow1)"/>
  <rect width="1080" height="1350" fill="url(#glow2)"/>
  <rect x="40" y="40" width="1000" height="1270" fill="none" stroke="#00e5ff" stroke-opacity="0.25" stroke-width="2" rx="20"/>
  <g font-family="Orbitron, sans-serif" fill="#e8f0ff">
    <text x="90" y="120" font-size="22" fill="#00e5ff" letter-spacing="4">ДОСЬЕ · «НОВЫЕ ГОРИЗОНТЫ»</text>
    <text x="990" y="120" font-size="22" fill="#7a8ba8" text-anchor="end" letter-spacing="3">ID ${escapeHtml(profile.id)}</text>
    <text x="90" y="240" font-size="26" fill="#7a8ba8" letter-spacing="3">ПОЗЫВНОЙ · ${escapeHtml(profile.callsign)}</text>
    <text x="90" y="340" font-size="68" font-weight="900" fill="url(#role)">${escapeHtml(profile.role)}</text>
    <text x="90" y="430" font-size="30" fill="#00e5ff" font-style="italic">«${escapeHtml(profile.slogan)}»</text>
  </g>
  <foreignObject x="90" y="470" width="900" height="260">
    <div xmlns="http://www.w3.org/1999/xhtml" style="font-family:'Exo 2',sans-serif;color:#cfd8ec;font-size:28px;line-height:1.5;">
      ${escapeHtml(profile.mission)}
    </div>
  </foreignObject>
  <g font-family="Orbitron, sans-serif">
    <text x="90" y="800" font-size="22" fill="#00e5ff" letter-spacing="4">КАЧЕСТВА</text>
    <text x="90" y="845" font-size="28" fill="#e8f0ff">${traits}</text>
    <g transform="translate(90,900)">
      <rect width="430" height="120" rx="12" fill="rgba(3,5,8,0.55)" stroke="#00e5ff" stroke-opacity="0.25"/>
      <text x="24" y="42" font-size="18" fill="#00e5ff" letter-spacing="3">ГОРИЗОНТ</text>
      <text x="24" y="84" font-size="26" fill="#e8f0ff">${escapeHtml(profile.horizon)}</text>
    </g>
    <g transform="translate(560,900)">
      <rect width="430" height="120" rx="12" fill="rgba(3,5,8,0.55)" stroke="#00e5ff" stroke-opacity="0.25"/>
      <text x="24" y="42" font-size="18" fill="#00e5ff" letter-spacing="3">СЕКТОР</text>
      <text x="24" y="84" font-size="26" fill="#e8f0ff">${escapeHtml(profile.sector)}</text>
    </g>
    <g transform="translate(90,1040)">
      <rect width="430" height="120" rx="12" fill="rgba(3,5,8,0.55)" stroke="#00e5ff" stroke-opacity="0.25"/>
      <text x="24" y="42" font-size="18" fill="#00e5ff" letter-spacing="3">ТИП МЫШЛЕНИЯ</text>
      <text x="24" y="84" font-size="26" fill="#e8f0ff">${escapeHtml(profile.mindsetLabel)}</text>
    </g>
    <g transform="translate(560,1040)">
      <rect width="430" height="120" rx="12" fill="rgba(3,5,8,0.55)" stroke="#00e5ff" stroke-opacity="0.25"/>
      <text x="24" y="42" font-size="18" fill="#00e5ff" letter-spacing="3">СИЛЬНАЯ СТОРОНА</text>
      <text x="24" y="84" font-size="26" fill="#e8f0ff">${escapeHtml(profile.strengthLabel)}</text>
    </g>
    <g transform="translate(540,1240)" text-anchor="middle">
      <rect x="-220" y="-30" width="440" height="56" rx="28" fill="rgba(3,5,8,0.65)" stroke="#00e5ff" stroke-opacity="0.35"/>
      <text y="6" font-size="20" fill="#cfd8ec" letter-spacing="6">◈ НОВЫЕ ГОРИЗОНТЫ · NOVASPHERE</text>
    </g>
  </g>
</svg>`;
  return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
}

function setShareStatus(msg) {
  const status = document.getElementById("profile-share-status");
  if (!status) return;
  status.textContent = msg || "";
  if (msg) {
    clearTimeout(setShareStatus._t);
    setShareStatus._t = setTimeout(() => {
      status.textContent = "";
    }, 4000);
  }
}

async function copyShareText(profile) {
  const text = buildShareText(profile);
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
    } else {
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.setAttribute("readonly", "");
      ta.style.position = "absolute";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }
    setShareStatus("Текст скопирован — теперь можно поделиться в любой соцсети.");
  } catch (e) {
    setShareStatus("Не удалось скопировать автоматически. Выделите текст вручную.");
  }
}

function downloadPoster(profile) {
  const url = posterToSvgDataUrl(profile);
  const a = document.createElement("a");
  a.href = url;
  a.download = `novasphere-${profile.callsign.toLowerCase().replace(/[^a-z0-9а-я]+/gi, "-")}.svg`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setShareStatus("Постер сохранён в формате SVG. Откройте файл и поделитесь им.");
}

async function shareProfile(profile) {
  const text = buildShareText(profile);
  const shareData = {
    title: `${profile.callsign} — ${profile.role}`,
    text,
    url: "https://vsivolgin.github.io/novasphere/#profile",
  };
  try {
    if (navigator.share) {
      await navigator.share(shareData);
      setShareStatus("Спасибо, что делитесь — это и есть наш горизонт.");
    } else {
      await copyShareText(profile);
    }
  } catch (e) {
    if (e && e.name !== "AbortError") {
      setShareStatus("Не получилось открыть окно «Поделиться». Попробуйте «Скопировать текст».");
    }
  }
}

function initProfileGenerator() {
  const form = document.getElementById("profile-form");
  if (!form) return;

  const errorEl = document.getElementById("profile-error");
  const shareEl = document.getElementById("profile-share");
  const poster = document.getElementById("profile-poster");
  let currentProfile = null;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    errorEl.textContent = "";

    const data = new FormData(form);
    const name = (data.get("profile-name") || "").toString().trim();
    const environment = data.get("environment");
    const strength = data.get("strength");
    const mindset = data.get("mindset");

    if (!name) {
      errorEl.textContent = "Введите имя или позывной — это обязательное поле.";
      form.querySelector("#profile-name")?.focus();
      return;
    }
    if (!environment || !strength || !mindset) {
      errorEl.textContent = "Ответьте на все три вопроса, чтобы собрать профиль.";
      return;
    }

    currentProfile = generateProfile({ name, environment, strength, mindset });
    renderPoster(currentProfile);
    shareEl.hidden = false;
    setShareStatus("");

    if (window.innerWidth < 960) {
      poster.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  form.addEventListener("reset", () => {
    errorEl.textContent = "";
    setShareStatus("");
    shareEl.hidden = true;
    currentProfile = null;
    poster.classList.add("profile-poster--empty");
    poster.removeAttribute("style");
    poster.innerHTML = `
      <div class="poster-frame">
        <div class="poster-watermark" aria-hidden="true">Новые горизонты · novasphere</div>
        <div class="poster-empty">
          <div class="poster-empty-icon" aria-hidden="true">◈</div>
          <p class="poster-empty-text">
            Заполните анкету слева — здесь появится ваш персональный космический постер.
          </p>
        </div>
      </div>
    `;
  });

  shareEl.addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-action]");
    if (!btn || !currentProfile) return;
    const action = btn.dataset.action;
    if (action === "copy-text") copyShareText(currentProfile);
    else if (action === "download") downloadPoster(currentProfile);
    else if (action === "share") shareProfile(currentProfile);
  });
}

function initStarfield() {
  const canvas = document.getElementById("starfield");
  const ctx = canvas.getContext("2d");
  let stars = [];
  let w, h;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
    stars = Array.from({ length: Math.floor((w * h) / 8000) }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.5 + 0.2,
      a: Math.random(),
      speed: Math.random() * 0.02 + 0.005,
    }));
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    stars.forEach((s) => {
      s.a += s.speed;
      const opacity = 0.3 + Math.abs(Math.sin(s.a)) * 0.7;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 220, 255, ${opacity})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  draw();
}

function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  toggle?.addEventListener("click", () => {
    links.classList.toggle("open");
  });

  document.querySelectorAll(".nav-links a").forEach((a) => {
    a.addEventListener("click", () => links.classList.remove("open"));
  });

  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY + 120;
    sections.forEach((section) => {
      const id = section.getAttribute("id");
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollY >= top && scrollY < top + height) {
        document.querySelectorAll(".nav-links a").forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initStarfield();
  initReveal();
  initNav();
  initProfileGenerator();
});
