const freeApis = [
  { name: "Open-Meteo Weather API", category: "Weather", desc: "Free weather forecast API for non-commercial use with no API key needed.", url: "https://open-meteo.com/" },
  { name: "Open Weather Map", category: "Weather", desc: "Current weather data, forecasts, and historical weather data via simple JSON endpoints.", url: "https://openweathermap.org/api" },
  { name: "Currents News API", category: "News", desc: "Latest international news headlines and real-time news search engine.", url: "https://currentsapi.services/en" },
  { name: "CoinGecko Crypto API", category: "Finance", desc: "Comprehensive crypto market data including price, volume, and market cap.", url: "https://www.coingecko.com/en/api" },
  { name: "NASA Open APIs", category: "Space", desc: "Access APOD (Astronomy Picture of the Day), rover photos, and space data.", url: "https://api.nasa.gov/" },
  { name: "REST Countries", category: "Data", desc: "Get information about world countries via RESTful JSON endpoints.", url: "https://restcountries.com/" }
];

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
        </div>
        <div class="card-footer">
          <a href="${api.url}" target="_blank" class="btn-action">View API Docs ↗</a>
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