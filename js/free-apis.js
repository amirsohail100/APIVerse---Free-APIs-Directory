const FREE_APIS = [
  { 
    name: "OpenWeatherMap", 
    category: "Weather", 
    desc: "Access current weather, forecasts, and historical weather data for any city worldwide.", 
    url: "https://openweathermap.org/api", 
    endpoint: "https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={YOUR_API_KEY}", 
    tag: "Free tier" 
  },
  { 
    name: "REST Countries", 
    category: "Data", 
    desc: "Get comprehensive information about countries—flags, capitals, currencies, population, and regions.", 
    url: "https://restcountries.com/", 
    endpoint: "https://restcountries.com/v3.1/all", 
    tag: "No key needed" 
  },
  { 
    name: "JSONPlaceholder", 
    category: "Testing", 
    desc: "Free fake REST API for testing and prototyping with mock posts, comments, users, and todos.", 
    url: "https://jsonplaceholder.typicode.com/", 
    endpoint: "https://jsonplaceholder.typicode.com/posts", 
    tag: "No key needed" 
  },
  { 
    name: "PokéAPI", 
    category: "Fun", 
    desc: "Complete Pokémon database containing details on stats, abilities, moves, types, and evolutions.", 
    url: "https://pokeapi.co/", 
    endpoint: "https://pokeapi.co/api/v2/pokemon/ditto", 
    tag: "No key needed" 
  },
  { 
    name: "The Dog API", 
    category: "Fun", 
    desc: "Fetch high-resolution dog images, breed information, and random puppy photos.", 
    url: "https://thedogapi.com/", 
    endpoint: "https://api.thedogapi.com/v1/images/search", 
    tag: "Free tier" 
  },
  { 
    name: "The Cat API", 
    category: "Fun", 
    desc: "Search, filter, and stream high-quality cat images, breed specs, and facts.", 
    url: "https://thecatapi.com/", 
    endpoint: "https://api.thecatapi.com/v1/images/search", 
    tag: "Free tier" 
  },
  { 
    name: "NewsAPI", 
    category: "News", 
    desc: "Fetch live news headlines and articles from thousands of worldwide sources and blogs.", 
    url: "https://newsapi.org/", 
    endpoint: "https://newsapi.org/v2/top-headlines?country=us&apiKey={YOUR_API_KEY}", 
    tag: "Free tier" 
  },
  { 
    name: "Quotable", 
    category: "Fun", 
    desc: "Open-source quote generator API offering famous quotes, author bios, and tags.", 
    url: "https://github.com/lukePeavey/quotable", 
    endpoint: "https://api.quotable.io/random", 
    tag: "No key needed" 
  },
  { 
    name: "Open Trivia DB", 
    category: "Fun", 
    desc: "Categorized trivia questions database perfect for building quiz and game applications.", 
    url: "https://opentdb.com/", 
    endpoint: "https://opentdb.com/api.php?amount=10", 
    tag: "No key needed" 
  },
  { 
    name: "CoinGecko", 
    category: "Finance", 
    desc: "Comprehensive cryptocurrency market data including live prices, volume, and trading pairs.", 
    url: "https://www.coingecko.com/en/api", 
    endpoint: "https://api.coingecko.com/api/v3/ping", 
    tag: "Free tier" 
  },
  { 
    name: "Exchangerate.host", 
    category: "Finance", 
    desc: "Real-time, historic, and multi-currency foreign exchange rates and conversion data.", 
    url: "https://exchangerate.host/", 
    endpoint: "https://api.exchangerate.host/latest", 
    tag: "No key needed" 
  },
  { 
    name: "NASA Open APIs", 
    category: "Science", 
    desc: "Explore space photography, Astronomy Picture of the Day (APOD), and Mars rover data.", 
    url: "https://api.nasa.gov/", 
    endpoint: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", 
    tag: "Free tier" 
  },
  { 
    name: "JokeAPI", 
    category: "Fun", 
    desc: "Multi-category joke generator serving programming, general, and miscellaneous humor.", 
    url: "https://v2.jokeapi.dev/", 
    endpoint: "https://v2.jokeapi.dev/joke/Any", 
    tag: "No key needed" 
  },
  { 
    name: "IP Geolocation (ipapi)", 
    category: "Data", 
    desc: "Identify IP address details including country, city, coordinates, timezone, and ISP.", 
    url: "https://ipapi.co/", 
    endpoint: "https://ipapi.co/json/", 
    tag: "Free tier" 
  },
  { 
    name: "GitHub REST API", 
    category: "Developer", 
    desc: "Interact programmatically with repositories, public user profiles, issues, and commits.", 
    url: "https://docs.github.com/en/rest", 
    endpoint: "https://api.github.com/users/octocat", 
    tag: "Free" 
  },
  { 
    name: "Spoonacular", 
    category: "Food", 
    desc: "Discover recipes, analyze nutrition facts, search ingredients, and generate meal plans.", 
    url: "https://spoonacular.com/food-api", 
    endpoint: "https://api.spoonacular.com/recipes/complexSearch?apiKey={YOUR_API_KEY}", 
    tag: "Free tier" 
  },
  { 
    name: "Unsplash API", 
    category: "Media", 
    desc: "Access high-resolution royalty-free photos and photography collections programmatically.", 
    url: "https://unsplash.com/developers", 
    endpoint: "https://api.unsplash.com/photos/?client_id={YOUR_ACCESS_KEY}", 
    tag: "Free tier" 
  },
  { 
    name: "Numbers API", 
    category: "Fun", 
    desc: "Returns interesting historical, mathematical, and trivia facts about any number.", 
    url: "http://numbersapi.com/", 
    endpoint: "http://numbersapi.com/random/math", 
    tag: "No key needed" 
  },
  { 
    name: "Agify / Genderize / Nationalize", 
    category: "Data", 
    desc: "Predict age, gender probability, and nationality based on a given first name.", 
    url: "https://agify.io/", 
    endpoint: "https://api.agify.io?name=michael", 
    tag: "Free tier" 
  },
  { 
    name: "Public APIs List (GitHub)", 
    category: "Directory", 
    desc: "A collective index listing thousands of free public APIs across various categories.", 
    url: "https://github.com/public-apis/public-apis", 
    endpoint: "https://api.publicapis.org/entries", 
    tag: "No key needed" 
  }
];