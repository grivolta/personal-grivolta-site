const data = window.siteData;

function setTextFields() {
  document.querySelectorAll("[data-field]").forEach((el) => {
    const key = el.dataset.field;
    if (data[key]) el.textContent = data[key];
  });
  document.title = `${data.brandName} | Portfolio`;
  const profile = document.querySelector("#profileImage");
  if (profile && data.profileImage) profile.src = data.profileImage;
}

function renderStats() {
  document.querySelector("#stats").innerHTML = data.stats.map(item => `
    <div class="stat"><strong>${item.value}</strong><span>${item.label}</span></div>
  `).join("");
}

function renderServices() {
  document.querySelector("#servicesGrid").innerHTML = data.services.map(item => `
    <article class="card reveal">
      <div class="icon">${item.icon}</div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join("");
}

function timelineItem(item) {
  return `<article class="timeline-item reveal">
    <div class="period">${item.period}</div>
    <h3>${item.title}</h3>
    <p><strong>${item.company}</strong></p>
    <p>${item.text}</p>
  </article>`;
}

function renderResume() {
  document.querySelector("#experienceList").innerHTML = data.experience.map(timelineItem).join("");
  document.querySelector("#educationList").innerHTML = data.education.map(timelineItem).join("");
}

function renderProjects() {
  document.querySelector("#projectsGrid").innerHTML = data.projects.map(item => `
    <article class="project-card reveal">
      <img src="${item.image}" alt="${item.title}">
      <h3>${item.title}</h3>
      <p>${item.text}</p>
      <div class="tags">${item.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
    </article>
  `).join("");
}

function renderContacts() {
  document.querySelector("#contactLinks").innerHTML = data.contacts.map(item => `
    <a class="btn secondary" href="${item.url}" target="_blank" rel="noreferrer">${item.label}</a>
  `).join("");
}

function enableMenu() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

function enableReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: .12 });
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

setTextFields();
renderStats();
renderServices();
renderResume();
renderProjects();
renderContacts();
enableMenu();
enableReveal();
