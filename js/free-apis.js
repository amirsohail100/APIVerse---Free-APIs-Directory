const freeApis = [
  { name: "Open-Meteo Weather API", category: "Weather", desc: "Free weather forecast API for non-commercial use with no API key required.", key: "NO_KEY_REQUIRED", url: "https://open-meteo.com/" },
  { name: "Open Weather Map", category: "Weather", desc: "Current weather data, forecasts, and historical weather data via simple JSON.", key: "owm_live_9a8b7c6d5e4f3a2b", url: "https://openweathermap.org/api" },
  { name: "Currents News API", category: "News", desc: "Latest international news headlines and real-time news search engine.", key: "cur_live_8849204859103948", url: "https://currentsapi.services/en" },
  { name: "CoinGecko Crypto API", category: "Finance", desc: "Comprehensive crypto market data including price, volume, and market cap.", key: "CG-88x99YzZ11Aa22Bb", url: "https://www.coingecko.com/en/api" },
  { name: "NASA Open APIs", category: "Space", desc: "Access APOD (Astronomy Picture of the Day), rover photos, and space data.", key: "DEMO_KEY_NASA_2026", url: "https://api.nasa.gov/" },
  { name: "REST Countries", category: "Data", desc: "Get information about world countries via RESTful JSON endpoints.", key: "NO_KEY_REQUIRED", url: "https://restcountries.com/" },
  { name: "JSONPlaceholder", category: "Development", desc: "Free fake REST API for testing and prototyping user & post data.", key: "NO_KEY_REQUIRED", url: "https://jsonplaceholder.typicode.com/" },
  { name: "PokéAPI", category: "Games", desc: "All the Pokémon data you'll ever need in one place, easily accessible.", key: "NO_KEY_REQUIRED", url: "https://pokeapi.co/" }
];

function maskKey(key) {
  if(key === "NO_KEY_REQUIRED") return "No Key Required";
  if(key.length <= 8) return key;
  return key.substring(0, 4) + "••••••••" + key.substring(key.length - 4);
}

function toggleEye(index, fullKey) {
  const elem = document.getElementById(`key-display-${index}`);
  const eyeBtn = document.getElementById(`eye-btn-${index}`);
  if (elem.getAttribute('data-shown') === 'false') {
    elem.innerText = fullKey;
    elem.setAttribute('data-shown', 'true');
    eyeBtn.innerText = '🙈';
  } else {
    elem.innerText = maskKey(fullKey);
    elem.setAttribute('data-shown', 'false');
    eyeBtn.innerText = '👁️';
  }
}

function showToast(msg) {
  let toast = document.getElementById('toast');
  if(!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerText = msg;
  toast.style.display = 'block';
  setTimeout(() => { toast.style.display = 'none'; }, 2500);
}

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  showToast(`Copied Key: ${text}`);
}

function renderAPIs(data) {
  const grid = document.getElementById('apiGrid');
  grid.innerHTML = '';
  
  if (data.length === 0) {
    grid.innerHTML = `<p style="text-align:center; grid-column: 1/-1; color: var(--text-muted);">No Free APIs found matching your search.</p>`;
    return;
  }

  data.forEach((api, index) => {
    grid.innerHTML += `
      <div class="api-card">
        <div>
          <div class="card-header">
            <span class="api-title">${api.name}</span>
            <span class="badge badge-free">${api.category}</span>
          </div>
          <p class="api-desc">${api.desc}</p>
          <div class="key-box">
            <div class="key-text-wrapper">
              <button id="eye-btn-${index}" class="btn-eye" onclick="toggleEye(${index}, '${api.key}')">👁️</button>
              <span id="key-display-${index}" class="key-display" data-shown="false">${maskKey(api.key)}</span>
            </div>
            <button class="btn-copy" onclick="copyToClipboard('${api.key}')">📋 Copy</button>
          </div>
        </div>
        <div class="card-footer">
          <a href="${api.url}" target="_blank" class="btn-action">View API Portal ↗</a>
        </div>
      </div>
    `;
  });
}

document.getElementById('searchInput').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = freeApis.filter(api => 
    api.name.toLowerCase().includes(query) || 
    api.category.toLowerCase().includes(query) ||
    api.desc.toLowerCase().includes(query)
  );
  renderAPIs(filtered);
});

renderAPIs(freeApis);