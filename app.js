const NEWS = [
  {
    featured: true,
    tag: "Луна",
    tagClass: "moon",
    imageClass: "moon",
    date: "19 мая 2026",
    readTime: "6 мин",
    title: "Artemis IV: NASA подтвердило дату высадки экипажа у южного полюса Луны",
    excerpt:
      "Четвёртая миссия программы «Артемида» отправит четырёх астронавтов к кратеру Шеклтон — в зону вечного света, где планируется развернуть лунную базу Gateway-2.",
  },
  {
    tag: "Арктика",
    tagClass: "arctic",
    imageClass: "arctic",
    date: "19 мая 2026",
    readTime: "5 мин",
    title: "«Северный полюс-2026»: ледоколы открыли круглогодичный маршрут через СМП",
    excerpt:
      "Российская экспедиция подтвердила устойчивый проход по Северному морскому пути в мае — впервые зафиксирована скорость доставки грузов на Чукотку на 40% быстрее прошлогодней.",
  },
  {
    tag: "Марс",
    tagClass: "mars",
    imageClass: "mars",
    date: "18 мая 2026",
    readTime: "4 мин",
    title: "SpaceX завершила тесты теплозащиты Starship для входа в атмосферу Марса",
    excerpt:
      "Прототип SN-42 выдержал 12 циклов нагрева до 1650°C — ключевой шаг к пилотируемому полёту в 2028 году.",
  },
  {
    tag: "Орбита",
    tagClass: "",
    imageClass: "orbit",
    date: "18 мая 2026",
    readTime: "3 мин",
    title: "Китайский зонд Chang'e-8 доставил первые образцы льда с обратной стороны",
    excerpt:
      "Анализ показал до 4,2% водяного льда в реголите — рекорд для лунных проб.",
  },
  {
    tag: "Технологии",
    tagClass: "",
    imageClass: "tech",
    date: "17 мая 2026",
    readTime: "5 мин",
    title: "Ядерный реактор Kilopower прошёл испытания для марсианской энергосети",
    excerpt:
      "Компактный реактор мощностью 10 кВт·э может питать базу из 6 модулей в течение 15 лет без дозаправки.",
  },
  {
    tag: "Марс",
    tagClass: "mars",
    imageClass: "mars",
    date: "17 мая 2026",
    readTime: "4 мин",
    title: "Perseverance обнаружил органические молекулы в древнем русле реки",
    excerpt:
      "Спектрометр SHERLOC зафиксировал сложные углеродные соединения — потенциальный биомаркер прошлой жизни.",
  },
  {
    tag: "Луна",
    tagClass: "moon",
    imageClass: "moon",
    date: "16 мая 2026",
    readTime: "3 мин",
    title: "Европейский модуль ESPRIT установлен на орбите Луны",
    excerpt:
      "Телекоммуникационный и навигационный узел обеспечит связь для всех миссий южного полюса.",
  },
];

const MOON_TIMELINE = [
  {
    year: "2026 · Сейчас",
    title: "Artemis IV — пилотируемая высадка",
    text: "Экипаж из четырёх человек высадится в районе кратера Шеклтон для развёртывания научной станции и добычи льда.",
  },
  {
    year: "2025",
    title: "Gateway — лунная орбитальная станция",
    text: "Модуль HALO выведен на NRHO-орбиту; станция служит хабом для посадочных модулей и глубокого космоса.",
  },
  {
    year: "2024",
    title: "Artemis II — облёт Луны",
    text: "Первый пилотируемый облёт за 50 лет: четыре астронавта прошли траекторию Apollo 8 с современными системами жизнеобеспечения.",
  },
  {
    year: "2027 · План",
    title: "Лунная инфраструктура LUNA-1",
    text: "Роботизированная печать реголитом первых жилых куполов мощностью до 4 человек на 30 суток.",
  },
];

const MARS_HIGHLIGHTS = [
  {
    title: "Starship HLS — посадочный модуль",
    text: "SpaceX адаптирует Starship для высадки 4 астронавтов на поверхность Марса к 2032 году.",
  },
  {
    title: "MOXIE-2 — производство кислорода",
    text: "Усовершенствованный эксперимент по выделению O₂ из CO₂ атмосферы — до 500 г в сутки.",
  },
  {
    title: "Подземные лавовые трубки",
    text: "ESA и NASA изучают пещеры как естественные убежища от радиации для первых поселенцев.",
  },
  {
    title: "Марсианский интернет",
    text: "Созвездие из 24 спутников на орбите Марса для связи с Землёй с задержкой менее 4 минут.",
  },
];

const TECH = [
  { icon: "⚛", title: "Термоядерные двигатели", text: "Прототип VASIMR достиг удельного импульса 4800 с — сокращение полёта до Марса до 4 месяцев." },
  { icon: "🧬", title: "Синтетическая биология", text: "Генно-модифицированные водоросли для замкнутого цикла O₂ и пищи на марсианских базах." },
  { icon: "🛰", title: "Квантовая связь", text: "Спутниковый канал с квантовым шифрованием между Gateway и наземными центрами." },
  { icon: "🤖", title: "Автономные роверы", text: "ИИ-планирование маршрутов: роверы Curiosity-Next проходят 2 км в день без команд с Земли." },
  { icon: "🏗", title: "3D-печать в вакууме", text: "Лазерный спекание реголита для строительства ангаров и дорог на Луне и Марсе." },
  { icon: "☀", title: "Космическая энергетика", text: "Орбитальные солнечные фермы мощностью 1 ГВт — передача энергии на Землю через микроволны." },
];

const MISSIONS = [
  { name: "Artemis IV", operator: "NASA", goal: "Высадка на южный полюс Луны", status: "active", statusLabel: "Активна", eta: "Июль 2026" },
  { name: "Starship Mars Demo", operator: "SpaceX", goal: "Беспилотная доставка груза", status: "planned", statusLabel: "Запуск", eta: "Q4 2026" },
  { name: "Chang'e-9", operator: "CNSA", goal: "Возврат образцов с Луны", status: "active", statusLabel: "Активна", eta: "Сент. 2026" },
  { name: "Mars Sample Return", operator: "NASA / ESA", goal: "Доставка проб с Марса", status: "critical", statusLabel: "Критический путь", eta: "2028" },
  { name: "Lunar Gateway Hab", operator: "NASA / ESA / JAXA", goal: "Жилой модуль на орбите", status: "planned", statusLabel: "Сборка", eta: "2027" },
  { name: "Blue Moon MK2", operator: "Blue Origin", goal: "Грузовой лунный модуль", status: "active", statusLabel: "Тесты", eta: "Авг. 2026" },
];

function renderNews() {
  const grid = document.getElementById("news-grid");
  grid.innerHTML = NEWS.map(
    (n) => `
    <article class="news-card reveal ${n.featured ? "featured" : ""}">
      <div class="news-image ${n.imageClass}">
        <span class="news-tag ${n.tagClass}">${n.tag}</span>
      </div>
      <div class="news-body">
        <div class="news-meta">
          <time>${n.date}</time>
          <span>${n.readTime}</span>
        </div>
        <h3 class="news-title">${n.title}</h3>
        <p class="news-excerpt">${n.excerpt}</p>
      </div>
    </article>
  `
  ).join("");
}

function renderMoonTimeline() {
  const el = document.getElementById("moon-timeline");
  el.innerHTML = MOON_TIMELINE.map(
    (item) => `
    <div class="timeline-item reveal">
      <div class="timeline-year">${item.year}</div>
      <h3 class="timeline-title">${item.title}</h3>
      <p class="timeline-text">${item.text}</p>
    </div>
  `
  ).join("");
}

function renderMars() {
  const el = document.getElementById("mars-highlights");
  el.innerHTML = MARS_HIGHLIGHTS.map(
    (h) => `
    <li class="reveal">
      <div>
        <strong>${h.title}</strong>
        <span>${h.text}</span>
      </div>
    </li>
  `
  ).join("");
}

function renderTech() {
  const el = document.getElementById("tech-cards");
  el.innerHTML = TECH.map(
    (t) => `
    <div class="tech-card reveal">
      <div class="tech-icon">${t.icon}</div>
      <h3>${t.title}</h3>
      <p>${t.text}</p>
    </div>
  `
  ).join("");
}

function renderMissions() {
  const tbody = document.getElementById("missions-body");
  tbody.innerHTML = MISSIONS.map(
    (m) => `
    <tr class="reveal">
      <td><strong>${m.name}</strong></td>
      <td>${m.operator}</td>
      <td>${m.goal}</td>
      <td><span class="status-badge ${m.status}">${m.statusLabel}</span></td>
      <td>${m.eta}</td>
    </tr>
  `
  ).join("");
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

function animateCounters() {
  document.querySelectorAll(".stat-value").forEach((el) => {
    const target = parseInt(el.dataset.count, 10);
    const duration = 2000;
    const start = performance.now();

    function tick(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.floor(eased * target).toLocaleString("ru-RU");
      if (progress < 1) requestAnimationFrame(tick);
    }

    requestAnimationFrame(tick);
  });
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
  renderNews();
  renderMoonTimeline();
  renderMars();
  renderTech();
  renderMissions();
  initStarfield();
  animateCounters();
  initReveal();
  initNav();
});
