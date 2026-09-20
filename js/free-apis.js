// const freeApis = [
//   { 
//     name: "Open-Meteo Weather", 
//     category: "Weather", 
//     desc: "Free weather forecast API for non-commercial use with no API key required.", 
//     endpoint: "https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.20&current_weather=true", 
//     url: "https://open-meteo.com/" 
//   },
//   { 
//     name: "REST Countries", 
//     category: "Data", 
//     desc: "Get information about world countries via RESTful JSON endpoints.", 
//     endpoint: "https://restcountries.com/v3.1/all", 
//     url: "https://restcountries.com/" 
//   },
//   { 
//     name: "JSONPlaceholder", 
//     category: "Development", 
//     desc: "Free fake REST API for testing and prototyping user & post data.", 
//     endpoint: "https://jsonplaceholder.typicode.com/posts", 
//     url: "https://jsonplaceholder.typicode.com/" 
//   },
//   { 
//     name: "PokéAPI", 
//     category: "Games", 
//     desc: "All the Pokémon data you'll ever need in one place, easily accessible.", 
//     endpoint: "https://pokeapi.co/api/v2/pokemon/ditto", 
//     url: "https://pokeapi.co/" 
//   },
//   { 
//     name: "CoinGecko Crypto API", 
//     category: "Finance", 
//     desc: "Comprehensive crypto market data including price, volume, and market cap.", 
//     endpoint: "https://api.coingecko.com/api/v3/ping", 
//     url: "https://www.coingecko.com/en/api" 
//   },
//   { 
//     name: "NASA APOD API", 
//     category: "Space", 
//     desc: "Access Astronomy Picture of the Day with public demo key.", 
//     endpoint: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", 
//     url: "https://api.nasa.gov/" 
//   }
// ];

const FREE_APIS = [
  { name: "OpenWeatherMap", category: "Weather", desc: "Current weather, forecasts aur historical weather data duniya ke kisi bhi shehar ke liye.", url: "https://openweathermap.org/api", tag: "Free tier" },
  { name: "REST Countries", category: "Data", desc: "Duniya ke har desh ki jaankari — flag, capital, currency, population, sab kuch.", url: "https://restcountries.com/", tag: "No key needed" },
  { name: "JSONPlaceholder", category: "Testing", desc: "Fake REST API testing aur prototyping ke liye — posts, comments, users.", url: "https://jsonplaceholder.typicode.com/", tag: "No key needed" },
  { name: "PokéAPI", category: "Fun", desc: "Har Pokémon ki complete details — stats, moves, evolutions.", url: "https://pokeapi.co/", tag: "No key needed" },
  { name: "The Dog API", category: "Fun", desc: "Dog breeds ki images aur jaankari, random dog pictures.", url: "https://thedogapi.com/", tag: "Free tier" },
  { name: "The Cat API", category: "Fun", desc: "Cat breeds ki images aur jaankari, random cat pictures.", url: "https://thecatapi.com/", tag: "Free tier" },
  { name: "NewsAPI", category: "News", desc: "Duniya bhar ke news sources se headlines aur articles.", url: "https://newsapi.org/", tag: "Free tier" },
  { name: "Quotable", category: "Fun", desc: "Motivational aur famous quotes ka bada collection.", url: "https://github.com/lukePeavey/quotable", tag: "No key needed" },
  { name: "Open Trivia DB", category: "Fun", desc: "Quiz app banane ke liye trivia questions ka database.", url: "https://opentdb.com/", tag: "No key needed" },
  { name: "CoinGecko", category: "Finance", desc: "Cryptocurrency prices, market cap, aur historical data.", url: "https://www.coingecko.com/en/api", tag: "Free tier" },
  { name: "Exchangerate.host", category: "Finance", desc: "Real-time aur historical currency exchange rates.", url: "https://exchangerate.host/", tag: "No key needed" },
  { name: "NASA Open APIs", category: "Science", desc: "Space images, Mars rover photos, asteroid data NASA se directly.", url: "https://api.nasa.gov/", tag: "Free tier" },
  { name: "JokeAPI", category: "Fun", desc: "Programming, general aur dark jokes ka collection.", url: "https://sv443.net/jokeapi/v2/", tag: "No key needed" },
  { name: "IP Geolocation (ipapi)", category: "Data", desc: "IP address se location, timezone, ISP jaankari nikalo.", url: "https://ipapi.co/", tag: "Free tier" },
  { name: "GitHub REST API", category: "Developer", desc: "Repos, users, issues, commits — GitHub ka poora data.", url: "https://docs.github.com/en/rest", tag: "Free" },
  { name: "Spoonacular (Free tier)", category: "Food", desc: "Recipes, ingredients aur nutrition information.", url: "https://spoonacular.com/food-api", tag: "Free tier" },
  { name: "Unsplash API", category: "Media", desc: "High-quality free stock photos apne app me use karne ke liye.", url: "https://unsplash.com/developers", tag: "Free tier" },
  { name: "Numbers API", category: "Fun", desc: "Kisi bhi number ke baare me interesting facts.", url: "http://numbersapi.com/", tag: "No key needed" },
  { name: "Agify / Genderize / Nationalize", category: "Data", desc: "Naam se age, gender aur nationality predict karo.", url: "https://agify.io/", tag: "Free tier" },
  { name: "Public APIs List (GitHub)", category: "Directory", desc: "1000+ free public APIs ki community-maintained list.", url: "https://github.com/public-apis/public-apis", tag: "No key needed" },
];


// function showToast(msg) {
//   let toast = document.getElementById('toast');
//   if(!toast) {
//     toast = document.createElement('div');
//     toast.id = 'toast';
//     toast.className = 'toast';
//     document.body.appendChild(toast);
//   }
//   toast.innerText = msg;
//   toast.style.display = 'block';
//   setTimeout(() => { toast.style.display = 'none'; }, 2500);
// }

// function copyEndpoint(endpointUrl) {
//   navigator.clipboard.writeText(endpointUrl);
//   showToast(`Copied Endpoint URL! 🔗`);
// }

// function renderAPIs(data) {
//   const grid = document.getElementById('apiGrid');
//   grid.innerHTML = '';
  
//   if (data.length === 0) {
//     grid.innerHTML = `<p style="text-align:center; grid-column: 1/-1; color: var(--text-muted);">No Free APIs found matching your search.</p>`;
//     return;
//   }

//   data.forEach((api) => {
//     grid.innerHTML += `
//       <div class="api-card">
//         <div>
//           <div class="card-header">
//             <span class="api-title">${api.name}</span>
//             <span class="badge badge-free">${api.category}</span>
//           </div>
//           <p class="api-desc">${api.desc}</p>
          
//           <div class="key-box">
//             <div class="key-text-wrapper">
//               <span class="endpoint-display">${api.endpoint}</span>
//             </div>
//             <button class="btn-copy" onclick="copyEndpoint('${api.endpoint}')">📋 Copy Endpoint</button>
//           </div>
//         </div>
        
//         <div class="card-footer">
//           <a href="${api.url}" target="_blank" class="btn-action">Docs / Portal ↗</a>
//         </div>
//       </div>
//     `;
//   });
// }

// document.getElementById('searchInput').addEventListener('input', (e) => {
//   const query = e.target.value.toLowerCase();
//   const filtered = freeApis.filter(api => 
//     api.name.toLowerCase().includes(query) || 
//     api.category.toLowerCase().includes(query) ||
//     api.desc.toLowerCase().includes(query)
//   );
//   renderAPIs(filtered);
// });

// renderAPIs(freeApis);