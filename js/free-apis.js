const freeApis = [
  { 
    name: "Open-Meteo Weather", 
    category: "Weather", 
    desc: "Free weather forecast API for non-commercial use with no API key required.", 
    endpoint: "https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.20&current_weather=true", 
    url: "https://open-meteo.com/" 
  },
  { 
    name: "REST Countries", 
    category: "Data", 
    desc: "Get information about world countries via RESTful JSON endpoints.", 
    endpoint: "https://restcountries.com/v3.1/all", 
    url: "https://restcountries.com/" 
  },
  { 
    name: "JSONPlaceholder", 
    category: "Development", 
    desc: "Free fake REST API for testing and prototyping user & post data.", 
    endpoint: "https://jsonplaceholder.typicode.com/posts", 
    url: "https://jsonplaceholder.typicode.com/" 
  },
  { 
    name: "PokéAPI", 
    category: "Games", 
    desc: "All the Pokémon data you'll ever need in one place, easily accessible.", 
    endpoint: "https://pokeapi.co/api/v2/pokemon/ditto", 
    url: "https://pokeapi.co/" 
  },
  { 
    name: "CoinGecko Crypto API", 
    category: "Finance", 
    desc: "Comprehensive crypto market data including price, volume, and market cap.", 
    endpoint: "https://api.coingecko.com/api/v3/ping", 
    url: "https://www.coingecko.com/en/api" 
  },
  { 
    name: "NASA APOD API", 
    category: "Space", 
    desc: "Access Astronomy Picture of the Day with public demo key.", 
    endpoint: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", 
    url: "https://api.nasa.gov/" 
  }
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

function copyEndpoint(endpointUrl) {
  navigator.clipboard.writeText(endpointUrl);
  showToast(`Copied Endpoint URL! 🔗`);
}

function renderAPIs(data) {
  const grid = document.getElementById('apiGrid');
  grid.innerHTML = '';
  
  if (data.length === 0) {
    grid.innerHTML = `<p style="text-align:center; grid-column: 1/-1; color: var(--text-muted);">No Free APIs found matching your search.</p>`;
    return;
  }

  data.forEach((api) => {
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
              <span class="endpoint-display">${api.endpoint}</span>
            </div>
            <button class="btn-copy" onclick="copyEndpoint('${api.endpoint}')">📋 Copy Endpoint</button>
          </div>
        </div>
        
        <div class="card-footer">
          <a href="${api.url}" target="_blank" class="btn-action">Docs / Portal ↗</a>
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