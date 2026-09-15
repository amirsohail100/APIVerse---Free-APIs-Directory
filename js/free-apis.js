const freeApis = [
  { name: "Open-Meteo Weather API", category: "Weather", desc: "Free weather forecast API for non-commercial use with no API key required.", format: "No Key Required (Public Endpoint)", url: "https://open-meteo.com/" },
  { name: "Open Weather Map", category: "Weather", desc: "Current weather data, forecasts, and historical weather data via simple JSON.", format: "owm_live_key_32chars_format", url: "https://openweathermap.org/api" },
  { name: "Currents News API", category: "News", desc: "Latest international news headlines and real-time news search engine.", format: "cur_live_9a8b7c6d5e4f", url: "https://currentsapi.services/en" },
  { name: "CoinGecko Crypto API", category: "Finance", desc: "Comprehensive crypto market data including price, volume, and market cap.", format: "CG-xxxxYYYYzzzzAAAA", url: "https://www.coingecko.com/en/api" },
  { name: "NASA Open APIs", category: "Space", desc: "Access APOD (Astronomy Picture of the Day), rover photos, and space data.", format: "DEMO_KEY", url: "https://api.nasa.gov/" },
  { name: "REST Countries", category: "Data", desc: "Get information about world countries via RESTful JSON endpoints.", format: "No Key Required", url: "https://restcountries.com/" },
  { name: "JSONPlaceholder", category: "Development", desc: "Free fake REST API for testing and prototyping user & post data.", format: "No Key Required", url: "https://jsonplaceholder.typicode.com/" },
  { name: "PokéAPI", category: "Games", desc: "All the Pokémon data you'll ever need in one place, easily accessible.", format: "No Key Required", url: "https://pokeapi.co/" },
  { name: "ExchangeRate-API", category: "Finance", desc: "Free currency conversion and exchange rate data via simple REST.", format: "exr_live_8849204859", url: "https://www.exchangerate-api.com/" },
  { name: "IPify IP Address API", category: "Utility", desc: "A simple public IP address API that returns your public IP in JSON format.", format: "No Key Required", url: "https://www.ipify.org/" }
];

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
  showToast(`Copied Key/Format: ${text}`);
}

function renderAPIs(data) {
  const grid = document.getElementById('apiGrid');
  grid.innerHTML = '';
  
  if (data.length === 0) {
    grid.innerHTML = `<p style="text-align:center; grid-column: 1/-1; color: var(--text-muted);">No Free APIs found matching your search.</p>`;
    return;
  }

  data.forEach(api => {
    grid.innerHTML += `
      <div class="api-card">
        <div>
          <div class="card-header">
            <span class="api-title">${api.name}</span>
            <span class="badge badge-free">${api.category}</span>
          </div>
          <p class="api-desc">${api.desc}</p>
          <div class="key-box">
            <span>🔑 ${api.format}</span>
            <button class="btn-copy" onclick="copyToClipboard('${api.format}')">📋 Copy</button>
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