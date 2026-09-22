/* ============================================================
   API NEXUS — APP LOGIC
   ============================================================ */

const SHORTLIST_KEY = "apinexus_shortlist_v1";

function getShortlist(){
  try{ return JSON.parse(localStorage.getItem(SHORTLIST_KEY)) || []; }
  catch(e){ return []; }
}
function saveShortlist(list){
  localStorage.setItem(SHORTLIST_KEY, JSON.stringify(list));
}
function isShortlisted(name){
  return getShortlist().some(item => item.name === name);
}
function toggleShortlist(api){
  let list = getShortlist();
  if(isShortlisted(api.name)){
    list = list.filter(item => item.name !== api.name);
  } else {
    list.push({ name: api.name, url: api.url });
  }
  saveShortlist(list);
  renderShortlistDrawer();
  return isShortlisted(api.name);
}

/* ---------- 3D tilt-on-hover for cards ---------- */
function attachTilt(selector){
  document.querySelectorAll(selector).forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const rotateX = ((y / rect.height) - 0.5) * -10;
      const rotateY = ((x / rect.width) - 0.5) * 10;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)";
    });
  });
}

/* ---------- FREE APIs page rendering ---------- */
let activeCategory = "All";
let searchTerm = "";

function renderFreeApis(){
  const grid = document.getElementById("apiGrid");
  const countEl = document.getElementById("resultCount");
  if(!grid) return;

  const filtered = FREE_APIS.filter(api => {
    const matchesCat = activeCategory === "All" || api.category === activeCategory;
    const matchesSearch = (api.name + api.desc + api.category)
      .toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  countEl.textContent = `${filtered.length} API${filtered.length !== 1 ? "s" : ""} mil rahi hain`;

  if(filtered.length === 0){
    grid.innerHTML = `<div class="empty-state">Koi API nahi mili. Search ya filter badal ke dekhiye.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(api => {
    const endpointBlock = api.endpoint ? `
      <div class="endpoint-box">
        <input type="text" class="endpoint-text" value="${api.endpoint}" readonly onclick="this.select()" />
        <button class="icon-copy-btn" onclick="copyEndpoint('${api.endpoint}', this)">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
        </button>
      </div>
    ` : '';

    return `
      <div class="api-card" data-name="${api.name}">
        <div class="api-card-top">
          <div>
            <span class="category-pill">${api.category}</span>
            <h3>${api.name}</h3>
          </div>
          <span class="tag-pill ${api.tag.includes('Free') ? 'paid' : ''}">${api.tag}</span>
        </div>
        <p class="desc">${api.desc}</p>
        
        ${endpointBlock}

        <div class="api-card-footer">
          <a class="link-btn" href="${api.url}" target="_blank" rel="noopener">Docs dekhein &rarr;</a>
          <button class="shortlist-btn ${isShortlisted(api.name) ? "saved" : ""}" data-name="${api.name}" title="Shortlist karein">
            ${isShortlisted(api.name) ? "&#9733;" : "&#9734;"}
          </button>
        </div>
      </div>
    `;
  }).join("");

  grid.querySelectorAll(".shortlist-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const api = FREE_APIS.find(a => a.name === btn.dataset.name);
      const saved = toggleShortlist(api);
      btn.classList.toggle("saved", saved);
      btn.innerHTML = saved ? "&#9733;" : "&#9734;";
    });
  });

  attachTilt(".api-card");
}

/* ---------- Copy Endpoint Logic ---------- */
function copyEndpoint(endpoint, btnElement) {
  navigator.clipboard.writeText(endpoint).then(() => {
    const span = btnElement.querySelector("span");
    const originalText = span.innerText;
    span.innerText = "Copied!";
    btnElement.classList.add("copied");
    setTimeout(() => {
      span.innerText = originalText;
      btnElement.classList.remove("copied");
    }, 2000);
  }).catch(err => {
    console.error("Failed to copy endpoint: ", err);
  });
}

function setupFreeApisPage(){
  const searchInput = document.getElementById("searchInput");
  const chipGroup = document.getElementById("chipGroup");
  if(!searchInput || !chipGroup) return;

  const categories = ["All", ...new Set(FREE_APIS.map(a => a.category))];
  chipGroup.innerHTML = categories.map(cat =>
    `<button class="chip ${cat === "All" ? "active" : ""}" data-cat="${cat}">${cat}</button>`
  ).join("");

  chipGroup.querySelectorAll(".chip").forEach(chip => {
    chip.addEventListener("click", () => {
      chipGroup.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      activeCategory = chip.dataset.cat;
      renderFreeApis();
    });
  });

  searchInput.addEventListener("input", (e) => {
    searchTerm = e.target.value;
    renderFreeApis();
  });

  renderFreeApis();
  renderShortlistDrawer();
  setupShortlistToggle();
}

/* ---------- Shortlist drawer ---------- */
function renderShortlistDrawer(){
  const drawer = document.getElementById("shortlistDrawer");
  const countBadge = document.getElementById("shortlistCount");
  if(!drawer) return;
  const list = getShortlist();

  if(countBadge) countBadge.textContent = list.length;

  if(list.length === 0){
    drawer.innerHTML = `<h4>Aapki Shortlist</h4><p style="color:var(--text-dim); font-size:0.88rem;">Abhi koi API shortlist nahi ki hai. Star icon par click karein.</p>`;
    return;
  }

  drawer.innerHTML = `<h4>Aapki Shortlist (${list.length})</h4>` +
    list.map(item => `
      <div class="shortlist-item">
        <a href="${item.url}" target="_blank" rel="noopener">${item.name}</a>
        <button class="remove-x" data-name="${item.name}">&times;</button>
      </div>
    `).join("");

  drawer.querySelectorAll(".remove-x").forEach(btn => {
    btn.addEventListener("click", () => {
      let list = getShortlist().filter(item => item.name !== btn.dataset.name);
      saveShortlist(list);
      renderShortlistDrawer();
      renderFreeApis();
    });
  });
}

function setupShortlistToggle(){
  const toggleBtn = document.getElementById("shortlistToggle");
  const drawer = document.getElementById("shortlistDrawer");
  if(!toggleBtn || !drawer) return;
  toggleBtn.addEventListener("click", () => drawer.classList.toggle("open"));
}

/* ---------- PAID APIs page rendering ---------- */
function renderPaidApis(){
  const grid = document.getElementById("paidGrid");
  if(!grid) return;
  grid.innerHTML = PAID_APIS.map(api => `
    <div class="api-card">
      <div class="api-card-top">
        <div>
          <span class="category-pill">${api.category}</span>
          <h3>${api.name}</h3>
        </div>
        <span class="tag-pill paid">${api.pricing}</span>
      </div>
      <p class="desc">${api.desc}</p>
      <div class="api-card-footer">
        <a class="btn btn-primary" style="padding:9px 18px; font-size:0.85rem;" href="${api.url}" target="_blank" rel="noopener">
          Website par jaayein &rarr;
        </a>
      </div>
    </div>
  `).join("");
  attachTilt(".api-card");
}

/* ---------- AI APIs page rendering ---------- */



function renderAiApis(){
  const grid = document.getElementById("aiGrid");
  if(!grid) return;
  grid.innerHTML = AI_APIS.map(api => `
    <div class="ai-card">
      <div class="ai-dot" style="background:${api.color};"></div>
      <h3>${api.name}</h3>
      <p>${api.desc}</p>
      <a class="ai-signin-btn" href="${api.url}" target="_blank" rel="noopener">Sign in &amp; API Key lein &rarr;</a>
    </div>
  `).join("");
  attachTilt(".api-card");

  
}

/* ---------- Home page: 3D orbit nodes ---------- */
function setupOrbitNodes(){
  document.querySelectorAll(".orbit").forEach(orbit => {
    const node = document.createElement("div");
    node.className = "node";
    orbit.appendChild(node);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupOrbitNodes();
  setupFreeApisPage();
  renderPaidApis();
  renderAiApis();
});

// Copy ENV variable helper function
function copyEnv(envVar, btnElement) {
  navigator.clipboard.writeText(envVar).then(() => {
    const originalText = btnElement.innerText;
    btnElement.innerText = "Copied!";
    btnElement.classList.add("copied");
    setTimeout(() => {
      btnElement.innerText = originalText;
      btnElement.classList.remove("copied");
    }, 2000);
  }).catch(err => {
    console.error("Failed to copy ENV variable:", err);
  });
}

// Render AI Model Cards
function renderAiCards() {
  const container = document.getElementById("aiGrid");
  if (!container || typeof AI_APIS === "undefined") return;

  container.innerHTML = AI_APIS.map((api) => {
    return `
      <div class="api-card" data-name="${api.name}">
        <div class="api-card-top">
          <div>
            <span class="category-pill">LLM</span>
            <h3>${api.name}</h3>
          </div>
        </div>
        <p class="desc">${api.desc}</p>
        <div class="env-box">
          <span class="env-label">ENV:</span>
          <code class="env-code">${api.env}</code>
          <button class="icon-copy-btn" onclick="copyEndpoint('${api.env}', this)">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
        </div>
        <div class="api-card-footer">
          <a class="btn btn-primary" style="padding:9px 18px; font-size:0.85rem;" href="${api.url}" target="_blank" rel="noopener">
            Website par jaayein &rarr;
          </a>
        </div>
      </div>
    `;
  }).join("");
}

// Global DOM Loaded initialization
document.addEventListener("DOMContentLoaded", () => {
  renderAiCards();
});