/* ===========================================================
   EDIT YOUR INFO HERE — everything on the site comes from this
   =========================================================== */
const portfolioData = {
  fullName: "Johndell Billano",
  nickname: "JOHNDELL BILLANO",            // large hero text (letters get mixed weights)
  tagline: "ENGINEERING IDEAS INTO REALITY.",
  status: "Available for new projects",
  title: "Aspiring Web Developer & IT Student",
  intro: "Building modern digital experiences through clean code, thoughtful design, and practical solutions.",
  aboutHeadline: "Curious by nature. Builder by habit.",
  aboutLead: " I'm a third-year BS Information Technology student who learns by building real things — from data-driven web systems to small experiments in computer vision. I enjoy exploring how technology works, understanding the problems behind it, and finding ways to turn ideas into something useful and practical. I'm particularly interested in creating applications that solve real-world problems, working with databases, and experimenting with different technologies that challenge me to think and learn beyond the classroom. Whether it's designing a database, developing a web application, or exploring new tools and technologies, I see every project as an opportunity to improve my skills, discover new possibilities, and gain a deeper understanding of what I can build with technology. I believe learning doesn't stop at knowing how something works; it's about putting that knowledge into practice, making mistakes, and continuously finding ways to improve.",
  aboutText: [
    "I enjoy software development, web development, databases, and the quiet satisfaction of a feature that finally works.",
    "My approach is simple: understand the problem first, break it into small pieces, build, test, then refine."
  ],
  interests: ["Web Development", "Software Development", "Databases", "Computer Vision", "IT Support", "Problem Solving"],
  profilePicture: "images/profile.png",   // transparent PNG cutout works best (name shows behind you)
  education: "BS Information Technology — Filamer Christian University",
  details: [                       // "About me" quick facts — empty values are hidden
    ["Address", "Ameligan, Pontevedra, Capiz, Philippines"],
    ["Gender", "Male"],
    ["Age", "20"],                 
    ["Education", "BS Information Technology"],
    ["School", "Filamer Christian University"],
    ["Year level", "3rd year · Graduating 2028"]
    
  ],
  experience: [
    { date: "2025 — Present", role: "IT Student & Self-Directed Builder", org: "Personal projects", desc: "Designing and building web systems alongside coursework.", points: ["Built a Barangay Management Information System with Django", "Practice with Python, databases, and front-end development"] },
    { date: "2023 — Present", role: "BS Information Technology", org: "Filamer Christian University", desc: "Third-year student, expected graduation 2028.", points: ["Coursework in programming, databases, and web development", "Hands-on school projects with real deliverables"] },
    { date: "Earlier", role: "Service Crew", org: "Vincent Catering", desc: "Customer-facing work that built teamwork, reliability, and communication.", points: ["Worked in a fast-paced team environment"] }
  ],
  // images: screenshots of the project (put the files in images/projects/) -> they become a slider
  // live: link that opens the running project in a new tab (leave "" to hide the button)
  // code: your GitHub repo link for this project (leave "" to hide the button)
  projects: [
    { title: "Barangay Management System", year: "2026", desc: "Admin and resident portals, certificate requests, blotter filing and a live dashboard.", tech: ["Django", "Python", "MySQL", "Tailwind", "JavaScript"], live: "http://127.0.0.1:8000/login", code: "https://github.com/diyanDel/Billanosite.git", images: ["images/projects/bms1.png", "images/projects/bms2.png","images/projects/bms3.png","images/projects/bms4.png","images/projects/bms5.png"] },
    { title: "Hand & Face Tracking and Computer Vision", year: "2026", desc: "Real-time hand landmark detection and gesture recognition.", tech: ["Python", "OpenCV", "MediaPipe"], live: "", code: "", images: ["images/projects/iot1.png","images/projects/iot2.png","images/projects/iot3.png","images/projects/iot4.png","images/projects/iot5.png"] },
    { title: "Personal Portfolio Website", year: "2026", desc: "This site — fully driven from a single data object.", tech: ["HTML", "CSS", "JavaScript"], live: "http://127.0.0.1:5500/My%20Portfolio/index.html#home", code: "", images: ["images/projects/pf1.png","images/projects/pf2.png","images/projects/pf3.png","images/projects/pf4.png","images/projects/pf5.png",] }
  ],
  statement: "I believe code is an opportunity to create something that *moves people.*",
  skills: {
    Frontend: [["HTML", 75], ["CSS", 65], ["JavaScript", 60]],
    Backend: [["Python", 60], ["Django", 60]],
    Database: [["PostgreSQL", 60], ["MySQL", 70]],
    Tools: [["Git", 60], ["GitHub", 55], ["VS Code", 80]]
  },
  email: "delljohnbolano@gmail.com",
  socials: [["GitHub", "https://github.com/diyanDel"], ["LinkedIn", "https://www.linkedin.com/feed/"], ["Facebook", "https://www.facebook.com/share/1PUaMYMxiy/?mibextid=wwXIfr"]]
};

/* ================= RENDER ================= */
const D = portfolioData, $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
document.title = D.fullName + " — Portfolio";
$("logo").innerHTML = '<span class="dot"></span>' + esc(D.status);
$("tag").textContent = D.tagline; $("title").textContent = D.title; $("intro").textContent = D.intro;
const words = D.nickname.trim().split(/\s+/); let gi = 0;
$("name").setAttribute("aria-label", D.nickname);
$("name").style.setProperty("--fs", Math.min(16.5, 150 / D.nickname.length) + "vw");
$("name").innerHTML = words.map((w, wi) => `<b class="wd">${[...w].map(c => `<span aria-hidden="true" class="${(words.length > 1 ? wi === 0 : gi < Math.ceil(w.length / 2)) ? "o" : ""}" style="--i:${gi++}">${esc(c)}</span>`).join("")}</b>`).join("");
document.querySelectorAll("#pimg,.p-color").forEach(el => el.src = D.profilePicture);
if (!D.profilePicture) $("portrait").hidden = true;
$("hs").innerHTML = D.socials.map(([n, u]) => `<li><a href="${esc(u)}" target="_blank" rel="noopener">${esc(n)} ↗</a></li>`).join("");
$("aboutHead").textContent = D.aboutHeadline; $("lead").innerHTML = D.aboutLead;
$("aboutP").innerHTML = D.aboutText.map(t => `<p>${esc(t)}</p>`).join("");
$("facts").innerHTML = D.details.filter(([, v]) => v).map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("");
$("int").innerHTML = D.interests.map(i => `<span>${esc(i)}</span>`).join("");
$("pic").innerHTML = D.profilePicture ? `<img src="${esc(D.profilePicture)}" alt="${esc(D.fullName)}">` : `<b>${esc(D.fullName[0])}</b>`;
$("tl").innerHTML = D.experience.map(e => `<div class="row rv"><div><div class="when">${esc(e.date)}</div><span class="org">${esc(e.org)}</span></div><div><h3>${esc(e.role)}</h3><p>${esc(e.desc)}</p><ul>${e.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul></div></div>`).join("");
const hues = [[18, 330], [200, 18], [30, 280], [12, 220]];
$("grid").innerHTML = D.projects.map((p, i) => {
  const [a, b] = hues[i % 4];
  const imgs = p.images && p.images.length ? p.images : (p.image ? [p.image] : []);
  const ok = u => u && u !== "#";
  const fallback = `<svg viewBox="0 0 400 275" width="100%" height="100%" preserveAspectRatio="xMidYMid slice"><defs><radialGradient id="g${i}" cx="${30 + i * 15}%" cy="${30 + (i % 2) * 40}%"><stop offset="0" stop-color="hsl(${a} 100% 55%)" stop-opacity=".85"/><stop offset="1" stop-color="hsl(${b} 60% 8%)" stop-opacity="0"/></radialGradient></defs><rect width="400" height="275" fill="#0b0b10"/><rect width="400" height="275" fill="url(#g${i})"/><g fill="none" stroke="rgba(255,255,255,.18)"><circle cx="${120 + i * 50}" cy="140" r="${50 + i * 12}"/><circle cx="${120 + i * 50}" cy="140" r="${90 + i * 10}"/></g><text x="24" y="250" fill="rgba(255,255,255,.9)" font-family="Inter" font-weight="800" font-size="34" letter-spacing="-1.5">0${i + 1}</text></svg>`;
  const art = imgs.length ? `<div class="slides">${imgs.map((src, n) => `<img class="sl${n ? "" : " on"}" src="${esc(src)}" alt="${esc(p.title)} screenshot ${n + 1}" loading="lazy">`).join("")}</div>` : fallback;
  const ctrl = imgs.length > 1 ? `<button class="sb prev" aria-label="Previous photo">‹</button><button class="sb next" aria-label="Next photo">›</button><div class="dots">${imgs.map((_, n) => `<i class="${n ? "" : "on"}"></i>`).join("")}</div>` : "";
  const btns = (ok(p.live) ? `<a href="${esc(p.live)}" target="_blank" rel="noopener">View Project</a>` : "") + (ok(p.code) ? `<a href="${esc(p.code)}" target="_blank" rel="noopener">Source Code</a>` : "");
  return `<article class="card rv" style="--d:${(i % 2) * .12}s"><div class="prev"><div class="art">${art}</div>${ctrl}<div class="ov"><p>${esc(p.desc)}</p></div><div class="arr"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7M8 7h9v9"/></svg></div></div><div class="meta"><h3>${esc(p.title)}</h3><small>${esc(p.year)}</small></div><div class="tags">${p.tech.map(t => `<span>${esc(t)}</span>`).join("")}</div><div class="cb">${btns}</div></article>`;
}).join("");
// photo slider for each project card
document.querySelectorAll(".card").forEach(card => {
  const s = card.querySelectorAll(".sl"); if (s.length < 2) return;
  const d = card.querySelectorAll(".dots i"); let n = 0, t, x0 = 0;
  const go = k => { s[n].classList.remove("on"); d[n].classList.remove("on"); n = (k + s.length) % s.length; s[n].classList.add("on"); d[n].classList.add("on"); };
  card.querySelector(".next").onclick = () => go(n + 1);
  card.querySelector(".prev").onclick = () => go(n - 1);
  const play = () => { clearInterval(t); t = setInterval(() => go(n + 1), 4000); };
  card.addEventListener("pointerenter", () => clearInterval(t)); card.addEventListener("pointerleave", play);
  card.addEventListener("touchstart", e => x0 = e.touches[0].clientX, { passive: true });
  card.addEventListener("touchend", e => { const dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 40) go(n + (dx < 0 ? 1 : -1)); }, { passive: true });
  play();
});
let k = 0;
$("stmt").innerHTML = D.statement.split(/(\*[^*]+\*)/).map(part => {
  const it = part.startsWith("*");
  return part.replace(/\*/g, "").split(" ").filter(Boolean).map(w => `<span class="w${it ? " serif" : ""}" style="--k:${k++}">${esc(w)}</span>`).join(" ");
}).join(" ");
$("sk").innerHTML = Object.entries(D.skills).map(([c, l]) => `<div class="rv"><h4>${esc(c)}</h4>${l.map(([n, v]) => `<div class="s"><div>${esc(n)}<em>${v}%</em></div><div class="bar"><i style="--v:${v}%"></i></div></div>`).join("")}</div>`).join("");
$("mail").textContent = D.email; $("mail").href = $("mailBtn").href = "mailto:" + D.email;
$("soc").innerHTML = D.socials.map(([n, u]) => `<a href="${esc(u)}" target="_blank" rel="noopener">${esc(n)} ↗</a>`).join("");
$("foot").textContent = "© " + new Date().getFullYear() + " " + D.fullName;
$("links").insertAdjacentHTML("beforeend", ["Home", "About", "Experience", "Projects", "Contact"].map(n => `<a href="#${n.toLowerCase()}">${n}</a>`).join(""));

/* ================= INTERACTION ================= */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .15 });
document.querySelectorAll(".rv,.stmt").forEach(el => io.observe(el));
// nav indicator
const as = [...document.querySelectorAll(".links a")], pill = $("pill");
function mv(a) { as.forEach(x => x.classList.toggle("on", x === a)); pill.style.left = a.offsetLeft + "px"; pill.style.width = a.offsetWidth + "px"; }
const secs = as.map(a => document.querySelector(a.getAttribute("href")));
const so = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { const i = secs.indexOf(e.target); if (i > -1) mv(as[i]); } }), { rootMargin: "-45% 0px -50% 0px" });
secs.forEach(s => so.observe(s)); mv(as[0]); addEventListener("resize", () => mv(as.find(a => a.classList.contains("on")) || as[0]));
// hamburger
const lk = $("links");
$("burger").onclick = () => { const o = lk.classList.toggle("open"); $("burger").textContent = o ? "Close" : "Menu"; };
as.forEach(a => a.addEventListener("click", () => { lk.classList.remove("open"); $("burger").textContent = "Menu"; }));
// glow follows cursor + light parallax (rAF throttled)
const g = $("glow"), rings = [...document.querySelectorAll(".ring")], sc = $("showcase");
let mx = innerWidth / 2, my = innerHeight / 2, gx = mx, gy = my, tick = false;
addEventListener("pointermove", e => { mx = e.clientX; my = e.clientY; });
(function loop() {
  gx += (mx - gx) * .08; gy += (my - gy) * .08; g.style.transform = `translate(${gx - 260}px,${gy - 260}px)`;
  const r = sc.getBoundingClientRect();
  if (r.bottom > 0 && r.top < innerHeight) rings.forEach(el => { el.style.transform = `translate(-50%,calc(-50% + ${(r.top + r.height / 2 - innerHeight / 2) * el.dataset.p * -4}px))`; });
  requestAnimationFrame(loop);
})();
// hero: hover to reveal orange-tinted color on the portrait
const hm = $("home"), pt = $("portrait");
hm.addEventListener("pointermove", e => { const r = pt.getBoundingClientRect(); pt.style.setProperty("--mx", e.clientX - r.left + "px"); pt.style.setProperty("--my", e.clientY - r.top + "px"); });
hm.addEventListener("pointerleave", () => { pt.style.setProperty("--mx", "-999px"); pt.style.setProperty("--my", "-999px"); });
