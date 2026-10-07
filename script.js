/* ============================================================
   XMB Portfolio — dados do currículo + navegação estilo PSP
   ============================================================ */

/* ---------------- Dados ---------------- */
const XMB = [
  {
    label: "Perfil",
    icon: "👤",
    items: [
      {
        label: "Sobre mim",
        sub: "",
        title: "Bruno Cercan Garcia",
        subtitle: "Desenvolvedor Back-End .NET",
        text: "Desenvolvedor back-end com experiência no setor bancário, construindo e mantendo APIs e integrações em .NET. Osasco - SP, 30 anos.",
        chips: ["Back-End", ".NET", "Osasco - SP"]
      },
      {
        label: "Contato",
        sub: "",
        title: "Contato",
        subtitle: "E-mail e Telefone",
        html: `
          <p><strong>E-mail:</strong><br><a href="mailto:bruno.cercan@gmail.com">bruno.cercan@gmail.com</a></p>
          <p style="margin-top:10px"><strong>Telefone:</strong><br>+55 (11) 9 5329-1238</p>
        `,
        chips: []
      },
      {
        label: "GitHub",
        sub: "↗",
        title: "GitHub",
        subtitle: "Repositórios e projetos",
        html: `<p><a href="https://github.com/brunocercan" target="_blank" rel="noopener">github.com/brunocercan</a></p>`,
        link: "https://github.com/brunocercan",
        chips: ["Open Source", "Projetos"]
      }
    ]
  },
  {
    label: "Experiência",
    icon: "💼",
    items: [
      {
        label: "Banco Safra",
        sub: "2025 →",
        title: "Banco Safra",
        subtitle: "Analista Desenvolvedor · Abr 2025 – Jun 2026 (1 ano 3 meses)",
        text: "Manutenção e desenvolvimento de novas APIs e funcionalidades de cartões em .NET.",
        chips: ["C#", ".NET 4.6 → 9 LTS", "MySQL", "MongoDB", "Git", "Cursor", "Claude", "GPT 4.1"]
      },
      {
        label: "Banco Alfa",
        sub: "2022–25",
        title: "Banco Alfa",
        subtitle: "Analista Desenvolvedor Jr · Ago 2022 – Abr 2025 (2 anos 9 meses)",
        text: "Manutenção e desenvolvimento de novas APIs e funcionalidades para integração de sistemas internos do banco com sistemas externos.",
        chips: ["C#", ".NET Core 2.2 → 6", "SQL Server", "RabbitMQ", "Git/TFS"]
      },
      {
        label: "Inmetrics",
        sub: "2021–22",
        title: "Inmetrics",
        subtitle: "Analista de DevOps Jr · Mar 2021 – Jun 2022 (1 ano 4 meses)",
        text: "Desenvolvimento de pipelines CI/CD, monitoramento de recursos, chamadas e logs utilizando Loki Promtail em APIs back-end, criação de dashboards com Grafana e provisionamento de ambiente cloud utilizando AWS.",
        chips: ["Python", "Flask", "MySQL", "Kafka", "Terraform", "Docker", "Kubernetes", "AWS", "Grafana", "Loki Promtail", "Prometheus"]
      },
      {
        label: "Guasti",
        sub: "2019",
        title: "Guasti Intermediação E Serv. Informática Ltda",
        subtitle: "Estagiário · Mar 2019 – Ago 2019 (6 meses)",
        text: "Desenvolvimento de novas features no portal de pagamentos de tributos, suporte e treinamento aos usuários do portal.",
        chips: ["C#", "SQL Server"]
      }
    ]
  },
  {
    label: "Projetos",
    icon: "🚀",
    items: [
      {
        label: "Persona API",
        sub: "★ Destaque",
        star: true,
        title: "Persona MicroService",
        subtitle: "Projeto pessoal · API REST · Destaque",
        html: `
          <p>Microserviço em C#/.NET que expõe as respostas de classe dos jogos Persona 3 Reload, Persona 4 Golden e Persona 5 Royal. Persona 3 Reload 100% concluído, com deploy no Render.</p>
          <p style="margin-top:10px"><a href="https://persona3.onrender.com/class/p3r/october/30" target="_blank" rel="noopener">API ao vivo ↗</a></p>
          <p style="margin-top:6px"><a href="https://github.com/brunocercan/PersonaMicroService" target="_blank" rel="noopener">github.com/brunocercan/PersonaMicroService</a></p>
        `,
        link: "https://github.com/brunocercan/PersonaMicroService",
        chips: ["C#", ".NET", "API REST", "Render"]
      },
      {
        label: "Ticket API",
        sub: "★ Destaque",
        star: true,
        title: "Ticket API",
        subtitle: "Projeto pessoal · API REST · Destaque",
        html: `
          <p>API REST para gerenciamento de tickets de Help Desk em .NET 9, com EF Core e Dapper, SQL Server, autenticação JWT, Docker e testes em xUnit/Moq. Inclui frontend em Angular.</p>
          <p style="margin-top:10px"><a href="https://github.com/brunocercan/ticket-api" target="_blank" rel="noopener">github.com/brunocercan/ticket-api</a></p>
        `,
        link: "https://github.com/brunocercan/ticket-api",
        chips: ["C#", ".NET 9", "EF Core", "Dapper", "JWT", "Docker", "xUnit"]
      },
      {
        label: "GitHub",
        sub: "↗",
        title: "Projetos Pessoais",
        subtitle: "Todos os repositórios no GitHub",
        html: `<p><a href="https://github.com/brunocercan" target="_blank" rel="noopener">github.com/brunocercan</a></p>`,
        link: "https://github.com/brunocercan",
        chips: ["C#", ".NET", "Open Source"]
      }
    ]
  },
  {
    label: "Formação",
    icon: "🎓",
    items: [
      {
        label: "UMC",
        sub: "2016–21",
        title: "Universidade de Mogi das Cruzes",
        subtitle: "Bacharelado, Sistemas de Informação · 2016 – 2021",
        text: "Graduação em Sistemas de Informação.",
        chips: ["Sistemas de Informação", "Bacharelado"]
      },
      {
        label: "FITO",
        sub: "2012–15",
        title: "FITO — Fundação Instituto Tecnológico de Osasco",
        subtitle: "Mecatrônica, Robótica e Engenharia de Controle e Automação · Jan 2012 – Dez 2015",
        text: "Formação técnica em mecatrônica, robótica e automação.",
        chips: ["Mecatrônica", "Robótica", "Automação"]
      }
    ]
  },
  {
    label: "Habilidades",
    icon: "🛠️",
    items: [
      {
        label: "Linguagens",
        sub: "",
        title: "Linguagens",
        subtitle: "",
        text: "C# é a linguagem principal, com passagem também por Python no período de DevOps.",
        chips: ["C#", "Python", "SQL"]
      },
      {
        label: "Frameworks",
        sub: "",
        title: "Frameworks",
        subtitle: "",
        text: "Experiência em diversas versões do ecossistema .NET, do legado ao mais recente.",
        chips: [".NET 4.6 → 9 LTS", ".NET Core 2.2 → 6", "Flask"]
      },
      {
        label: "Dados & Mensageria",
        sub: "",
        title: "Dados & Mensageria",
        subtitle: "",
        text: "Bancos relacionais e não relacionais, além de filas e streams.",
        chips: ["SQL Server", "MySQL", "MongoDB", "RabbitMQ", "Kafka"]
      },
      {
        label: "DevOps & Cloud",
        sub: "",
        title: "DevOps & Cloud",
        subtitle: "",
        text: "Pipelines CI/CD, observabilidade e provisionamento de infraestrutura.",
        chips: ["Docker", "Kubernetes", "Terraform", "AWS", "Grafana", "Prometheus", "Loki Promtail", "Git", "TFS"]
      },
      {
        label: "IA & Ferramentas",
        sub: "",
        title: "IA & Ferramentas",
        subtitle: "",
        text: "Uso de LLMs no dia a dia de desenvolvimento.",
        chips: ["Cursor", "Claude 3 / 3.5 / Sonnet", "GPT 4.1"]
      }
    ]
  },
  {
    label: "Idiomas",
    icon: "🌐",
    items: [
      {
        label: "Inglês",
        sub: "Avançado",
        title: "Inglês",
        subtitle: "Avançado",
        text: "Leitura, escrita e conversação em nível avançado.",
        chips: []
      },
      {
        label: "Português",
        sub: "Nativo",
        title: "Português",
        subtitle: "Nativo",
        text: "Idioma nativo.",
        chips: []
      }
    ]
  }
];

/* ---------------- Estado ---------------- */
let catIndex = 0;
let itemIndex = 0;

/* ---------------- Referências DOM ---------------- */
const barEl = document.getElementById("xmb-bar");
const detailEl = document.getElementById("detail");
const clockEl = document.getElementById("clock");

/* ---------------- Render XMB ---------------- */
function renderBar() {
  barEl.innerHTML = "";
  XMB.forEach((cat, ci) => {
    const catEl = document.createElement("div");
    catEl.className = "category" + (ci === catIndex ? " active" : "");
    catEl.dataset.index = ci;

    catEl.innerHTML = `
      <div class="cat-icon">${cat.icon}</div>
      <div class="cat-label">${cat.label}</div>
      <div class="items"></div>
    `;

    const itemsEl = catEl.querySelector(".items");
    cat.items.forEach((item, ii) => {
      const itemEl = document.createElement("div");
      itemEl.className =
        "item" + (ci === catIndex && ii === itemIndex ? " selected" : "");
      itemEl.innerHTML = `<span>${item.label}</span>${
        item.sub
          ? `<span class="item-sub${item.star ? " star" : ""}">${item.sub}</span>`
          : ""
      }`;
      itemEl.addEventListener("click", () => {
        if (ci === catIndex && ii === itemIndex) {
          openItem(item);
        } else {
          catIndex = ci;
          itemIndex = ii;
          update();
        }
      });
      itemsEl.appendChild(itemEl);
    });

    catEl.addEventListener("click", (e) => {
      if (e.target.closest(".item")) return;
      if (catIndex !== ci) {
        catIndex = ci;
        itemIndex = 0;
        update();
      }
    });

    barEl.appendChild(catEl);
  });
}

/* ---------------- Detalhe ---------------- */
function renderDetail() {
  const item = XMB[catIndex].items[itemIndex];

  detailEl.classList.add("swap");
  setTimeout(() => {
    const chips = item.chips && item.chips.length
      ? `<div class="chips">${item.chips.map((c) => `<span class="chip">${c}</span>`).join("")}</div>`
      : "";

    const body = item.html ? item.html : `<p>${item.text}</p>`;

    detailEl.innerHTML = `
      <h2>${item.title}</h2>
      ${item.subtitle ? `<div class="detail-sub">${item.subtitle}</div>` : ""}
      ${body}
      ${chips}
    `;
    detailEl.classList.remove("swap");
  }, 180);
}

/* ---------------- Navegação ---------------- */
function update() {
  document.querySelectorAll(".category").forEach((el, ci) => {
    el.classList.toggle("active", ci === catIndex);
    el.querySelectorAll(".item").forEach((itemEl, ii) => {
      itemEl.classList.toggle("selected", ci === catIndex && ii === itemIndex);
    });
  });

  // Centraliza a categoria ativa na linha horizontal
  const activeCat = barEl.children[catIndex];
  const offset =
    activeCat.offsetLeft + activeCat.offsetWidth / 2 - window.innerWidth / 2;
  barEl.style.transform = `translateX(${-offset}px)`;

  renderDetail();
}

function moveHorizontal(dir) {
  const next = catIndex + dir;
  if (next < 0 || next >= XMB.length) return;
  catIndex = next;
  itemIndex = 0;
  update();
}

function moveVertical(dir) {
  const items = XMB[catIndex].items;
  const next = itemIndex + dir;
  if (next < 0 || next >= items.length) return;
  itemIndex = next;
  update();
}

function openItem(item) {
  if (item.link) window.open(item.link, "_blank", "noopener");
}

/* ---------------- Teclado ---------------- */
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowRight":
      e.preventDefault();
      moveHorizontal(1);
      break;
    case "ArrowLeft":
      e.preventDefault();
      moveHorizontal(-1);
      break;
    case "ArrowDown":
      e.preventDefault();
      moveVertical(1);
      break;
    case "ArrowUp":
      e.preventDefault();
      moveVertical(-1);
      break;
    case "Enter":
      openItem(XMB[catIndex].items[itemIndex]);
      break;
  }
});

/* ---------------- Scroll do mouse (esquerda/direita) ---------------- */
let wheelAccum = 0;
let wheelTimer = null;
const WHEEL_STEP = 60;

document.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    wheelAccum += Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

    if (wheelAccum <= -WHEEL_STEP) {
      moveHorizontal(-1);
      wheelAccum = 0;
    } else if (wheelAccum >= WHEEL_STEP) {
      moveHorizontal(1);
      wheelAccum = 0;
    }

    clearTimeout(wheelTimer);
    wheelTimer = setTimeout(() => (wheelAccum = 0), 250);
  },
  { passive: false }
);

/* ---------------- Relógio ---------------- */
function tick() {
  const now = new Date();
  const dd = String(now.getDate()).padStart(2, "0");
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const hh = String(now.getHours()).padStart(2, "0");
  const mi = String(now.getMinutes()).padStart(2, "0");
  clockEl.textContent = `${dd}/${mm} ${hh}:${mi}`;
}
tick();
setInterval(tick, 1000);

/* ============================================================
   Fundo de ondas estilo PSP
   ============================================================ */
const canvas = document.getElementById("waves");
const ctx = canvas.getContext("2d");

const WAVES = [
  { amp: 46, len: 0.0035, speed: 0.55, h: 195, s: 75, l: 45, alpha: 0.42, y: 0.62 },
  { amp: 60, len: 0.0028, speed: 0.40, h: 210, s: 80, l: 42, alpha: 0.36, y: 0.60 },
  { amp: 34, len: 0.0045, speed: 0.75, h: 275, s: 70, l: 45, alpha: 0.34, y: 0.60 },
  { amp: 52, len: 0.0031, speed: 0.50, h: 305, s: 65, l: 44, alpha: 0.30, y: 0.62 },
  { amp: 40, len: 0.0039, speed: 0.65, h: 160, s: 70, l: 44, alpha: 0.26, y: 0.64 }
];

let W = 0, H = 0;

function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", () => {
  resize();
  update();
});

function drawWaves(t) {
  // Gradiente base do fundo
  const g = ctx.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, "#070a18");
  g.addColorStop(0.55, "#0b1030");
  g.addColorStop(1, "#05070f");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);

  const time = t * 0.001;

  for (const w of WAVES) {
    const grad = ctx.createLinearGradient(0, H * w.y - w.amp * 2, 0, H);
    grad.addColorStop(0, `hsla(${w.h}, ${w.s}%, ${w.l + 10}%, 0)`);
    grad.addColorStop(0.5, `hsla(${w.h}, ${w.s}%, ${w.l}%, ${w.alpha})`);
    grad.addColorStop(1, `hsla(${w.h}, ${w.s}%, ${w.l - 15}%, ${w.alpha * 0.6})`);

    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.moveTo(0, H);

    for (let x = 0; x <= W; x += 4) {
      const y =
        H * w.y +
        Math.sin(x * w.len + time * w.speed) * w.amp +
        Math.sin(x * w.len * 2.3 + time * w.speed * 1.4) * (w.amp * 0.35);
      ctx.lineTo(x, y);
    }

    ctx.lineTo(W, H);
    ctx.closePath();
    ctx.fill();

    // Linha de brilho no topo da onda
    ctx.strokeStyle = `hsla(${w.h}, 90%, 75%, ${w.alpha * 0.9})`;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    for (let x = 0; x <= W; x += 4) {
      const y =
        H * w.y +
        Math.sin(x * w.len + time * w.speed) * w.amp +
        Math.sin(x * w.len * 2.3 + time * w.speed * 1.4) * (w.amp * 0.35);
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();
  }

  requestAnimationFrame(drawWaves);
}

/* ---------------- Init ---------------- */
renderBar();
update();
requestAnimationFrame(drawWaves);
