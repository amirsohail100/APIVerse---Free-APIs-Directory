const FREE_APIS = [
  // --- WEATHER & ENVIRONMENT ---
  { name: "OpenWeatherMap", category: "Weather", desc: "Access current weather, forecasts, and historical weather data for any city worldwide.", url: "https://openweathermap.org/api", endpoint: "https://api.openweathermap.org/data/2.5/weather?q={city_name}&appid={YOUR_API_KEY}", tag: "Free tier" },
  { name: "WeatherAPI", category: "Weather", desc: "Real-time weather, 14-day forecast, air quality, and astronomy data via REST.", url: "https://www.weatherapi.com/", endpoint: "https://api.weatherapi.com/v1/current.json?key={YOUR_KEY}&q=London", tag: "Free tier" },
  { name: "Open-Meteo", category: "Weather", desc: "Free weather API for non-commercial use with no API key required.", url: "https://open-meteo.com/", endpoint: "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true", tag: "No key needed" },
  { name: "AirVisual", category: "Weather", desc: "Real-time global air quality index (AQI) and weather data.", url: "https://www.iqair.com/commercial-api", endpoint: "https://api.airvisual.com/v2/nearest_city?key={YOUR_API_KEY}", tag: "Free tier" },
  { name: "USGS Earthquake API", category: "Weather", desc: "Real-time earthquake data updated every minute from US Geological Survey.", url: "https://earthquake.usgs.gov/fdsnws/event/1/", endpoint: "https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&minmagnitude=5", tag: "No key needed" },

  // --- DATA & PUBLIC INFORMATION ---
  { name: "REST Countries", category: "Data", desc: "Get comprehensive information about countries—flags, capitals, currencies, population.", url: "https://restcountries.com/", endpoint: "https://restcountries.com/v3.1/all", tag: "No key needed" },
  { name: "IP Geolocation (ipapi)", category: "Data", desc: "Identify IP address details including country, city, coordinates, timezone, and ISP.", url: "https://ipapi.co/", endpoint: "https://ipapi.co/json/", tag: "Free tier" },
  { name: "ipify", category: "Data", desc: "Simple public IP address API that returns your current public IP in plain text or JSON.", url: "https://www.ipify.org/", endpoint: "https://api.ipify.org?format=json", tag: "No key needed" },
  { name: "World Bank Open Data", category: "Data", desc: "Global development data on economics, population, education, and health.", url: "https://datahelpdesk.worldbank.org/", endpoint: "https://api.worldbank.org/v2/country/all/indicator/SP.POP.TOTL?format=json", tag: "No key needed" },
  { name: "Zipopotam.us", category: "Data", desc: "Postal code information and address lookup service for multiple countries.", url: "https://www.zippopotam.us/", endpoint: "https://api.zippopotam.us/us/90210", tag: "No key needed" },
  { name: "Agify.io", category: "Data", desc: "Predict the age of a person based on their first name.", url: "https://agify.io/", endpoint: "https://api.agify.io?name=michael", tag: "Free tier" },
  { name: "Genderize.io", category: "Data", desc: "Predict the gender of a person based on their first name.", url: "https://genderize.io/", endpoint: "https://api.genderize.io?name=lucy", tag: "Free tier" },
  { name: "Nationalize.io", category: "Data", desc: "Estimate national origin probabilities from a given first name.", url: "https://nationalize.io/", endpoint: "https://api.nationalize.io?name=nathan", tag: "Free tier" },
  { name: "Universities List API", category: "Data", desc: "Search universities and higher education institutions worldwide by name or country.", url: "https://github.com/Hipo/university-domains-list", endpoint: "http://universities.hipolabs.com/search?country=United+States", tag: "No key needed" },
  { name: "Open Food Facts", category: "Data", desc: "Database of food products with ingredients, allergens, and nutrition facts.", url: "https://world.openfoodfacts.org/data", endpoint: "https://world.openfoodfacts.org/api/v0/product/737628064502.json", tag: "No key needed" },

  // --- TESTING & MOCKING ---
  { name: "JSONPlaceholder", category: "Testing", desc: "Free fake REST API for testing and prototyping with mock posts, comments, users.", url: "https://jsonplaceholder.typicode.com/", endpoint: "https://jsonplaceholder.typicode.com/posts", tag: "No key needed" },
  { name: "ReqRes", category: "Testing", desc: "A hosted REST-API that responds to HTTP requests with realistic simulated responses.", url: "https://reqres.in/", endpoint: "https://reqres.in/api/users?page=2", tag: "No key needed" },
  { name: "DummyJSON", category: "Testing", desc: "Get dummy JSON data for REST operations: products, carts, users, posts, and quotes.", url: "https://dummyjson.com/", endpoint: "https://dummyjson.com/products/1", tag: "No key needed" },
  { name: "Fake Store API", category: "Testing", desc: "E-commerce mockup API offering clothing, electronics, products, and cart objects.", url: "https://fakestoreapi.com/", endpoint: "https://fakestoreapi.com/products", tag: "No key needed" },
  { name: "Httpbin", category: "Testing", desc: "HTTP Request & Response service to test methods, headers, auth, and IP responses.", url: "https://httpbin.org/", endpoint: "https://httpbin.org/get", tag: "No key needed" },
  { name: "Random User Generator", category: "Testing", desc: "Generate random user profile data including photo, address, and login info.", url: "https://randomuser.me/", endpoint: "https://randomuser.me/api/", tag: "No key needed" },
  { name: "Mockaroo API", category: "Testing", desc: "Generate up to 1,000 realistic mock records in JSON, CSV, SQL, or Excel format.", url: "https://www.mockaroo.com/", endpoint: "https://my.api.mockaroo.com/users.json?key={YOUR_API_KEY}", tag: "Free tier" },

  // --- ENTERTAINMENT & FUN ---
  { name: "PokéAPI", category: "Fun", desc: "Complete Pokémon database containing details on stats, abilities, moves, and types.", url: "https://pokeapi.co/", endpoint: "https://pokeapi.co/api/v2/pokemon/ditto", tag: "No key needed" },
  { name: "The Dog API", category: "Fun", desc: "Fetch high-resolution dog images, breed information, and random puppy photos.", url: "https://thedogapi.com/", endpoint: "https://api.thedogapi.com/v1/images/search", tag: "Free tier" },
  { name: "The Cat API", category: "Fun", desc: "Search, filter, and stream high-quality cat images, breed specs, and facts.", url: "https://thecatapi.com/", endpoint: "https://api.thecatapi.com/v1/images/search", tag: "Free tier" },
  { name: "Quotable", category: "Fun", desc: "Open-source quote generator API offering famous quotes, author bios, and tags.", url: "https://github.com/lukePeavey/quotable", endpoint: "https://api.quotable.io/random", tag: "No key needed" },
  { name: "Open Trivia DB", category: "Fun", desc: "Categorized trivia questions database perfect for building quiz and game apps.", url: "https://opentdb.com/", endpoint: "https://opentdb.com/api.php?amount=10", tag: "No key needed" },
  { name: "JokeAPI", category: "Fun", desc: "Multi-category joke generator serving programming, general, and dark humor.", url: "https://v2.jokeapi.dev/", endpoint: "https://v2.jokeapi.dev/joke/Any", tag: "No key needed" },
  { name: "Official Joke API", category: "Fun", desc: "Simple programming and setup-punchline joke endpoints.", url: "https://github.com/15Dkatz/official_joke_api", endpoint: "https://official-joke-api.appspot.com/random_joke", tag: "No key needed" },
  { name: "Numbers API", category: "Fun", desc: "Returns interesting historical, mathematical, and trivia facts about any number.", url: "http://numbersapi.com/", endpoint: "http://numbersapi.com/random/math", tag: "No key needed" },
  { name: "FunTranslations", category: "Fun", desc: "Translate text into Yoda, Minion, Shakespeare, Pirate, or Klingon dialect.", url: "https://funtranslations.com/api/", endpoint: "https://api.funtranslations.com/translate/yoda.json?text=Master%20Yoda", tag: "Free tier" },
  { name: "Advice Slip API", category: "Fun", desc: "Generate random piece of advice or search specific advice slips.", url: "https://api.adviceslip.com/", endpoint: "https://api.adviceslip.com/advice", tag: "No key needed" },
  { name: "Bored API", category: "Fun", desc: "Find random activities to do when bored based on budget and participant count.", url: "https://www.boredapi.com/", endpoint: "https://www.boredapi.com/api/activity", tag: "No key needed" },
  { name: "Cat Facts API", category: "Fun", desc: "Delivers random facts about cats with custom length controls.", url: "https://alexwohlbruck.github.io/cat-facts/", endpoint: "https://catfact.ninja/fact", tag: "No key needed" },
  { name: "Dog Facts API", category: "Fun", desc: "Get random facts and trivia regarding domestic dog breeds.", url: "https://kinduff.github.io/dog-api/", endpoint: "https://dog-api.kinduff.com/api/facts", tag: "No key needed" },
  { name: "MeowFacts", category: "Fun", desc: "Simple API returning cat facts in multiple translated languages.", url: "https://github.com/whxaxes/meowfacts", endpoint: "https://meowfacts.herokuapp.com/", tag: "No key needed" },
  { name: "Shibe.online", category: "Fun", desc: "Fetches pictures of Shiba Inus, cats, and birds.", url: "https://shibe.online/", endpoint: "https://shibe.online/api/shibes?count=1", tag: "No key needed" },
  { name: "Chuck Norris Jokes", category: "Fun", desc: "Random Chuck Norris facts and jokes database.", url: "https://api.chucknorris.io/", endpoint: "https://api.chucknorris.io/jokes/random", tag: "No key needed" },
  { name: "Kanye Rest", category: "Fun", desc: "Free REST API delivering random Kanye West quotes.", url: "https://kanye.rest/", endpoint: "https://api.kanye.rest/", tag: "No key needed" },
  { name: "Corporate BS Generator", category: "Fun", desc: "Generate corporate buzzword phrases for fake corporate websites.", url: "https://corporatebs-generator.sameerkumar.website/", endpoint: "https://corporatebs-generator.sameerkumar.website/", tag: "No key needed" },
  { name: "Techy API", category: "Fun", desc: "Generate clever tech-sounding jargon and tech phrases.", url: "https://techy-api.vercel.app/", endpoint: "https://techy-api.vercel.app/api/json", tag: "No key needed" },

  // --- ANIME & COMICS ---
  { name: "Jikan API (MyAnimeList)", category: "Anime", desc: "Unofficial MyAnimeList API to fetch anime, manga, characters, and user lists.", url: "https://jikan.moe/", endpoint: "https://api.jikan.moe/v4/anime/1", tag: "No key needed" },
  { name: "AnimeChan", category: "Anime", desc: "Random anime quotes filtered by character, anime title, or keywords.", url: "https://animechan.xyz/", endpoint: "https://animechan.xyz/api/random", tag: "No key needed" },
  { name: "Studio Ghibli API", category: "Anime", desc: "Resource API for Studio Ghibli films, characters, locations, and species.", url: "https://ghibliapi.vercel.app/", endpoint: "https://ghibliapi.vercel.app/films", tag: "No key needed" },
  { name: "Nekos.best", category: "Anime", desc: "High quality anime images and GIFs with metadata.", url: "https://nekos.best/", endpoint: "https://nekos.best/api/v2/neko", tag: "No key needed" },
  { name: "Marvel API", category: "Anime", desc: "Official API for Marvel comics, characters, creators, and story arcs.", url: "https://developer.marvel.com/", endpoint: "https://gateway.marvel.com/v1/public/characters?apikey={YOUR_KEY}", tag: "Free tier" },

  // --- FINANCE & CRYPTO ---
  { name: "CoinGecko API", category: "Finance", desc: "Comprehensive cryptocurrency market data including live prices, volume, and trading pairs.", url: "https://www.coingecko.com/en/api", endpoint: "https://api.coingecko.com/api/v3/ping", tag: "Free tier" },
  { name: "CoinCap API", category: "Finance", desc: "Real-time market data for over 1,000 cryptocurrencies.", url: "https://coincap.io/", endpoint: "https://api.coincap.io/v2/assets", tag: "No key needed" },
  { name: "Coinlore", category: "Finance", desc: "Cryptocurrency prices, market cap, volume, and exchange tickers.", url: "https://www.coinlore.com/cryptocurrency-data-api", endpoint: "https://api.coinlore.net/api/ticker/?id=90", tag: "No key needed" },
  { name: "ExchangeRate-API", category: "Finance", desc: "Free currency exchange rates for over 160 currencies.", url: "https://www.exchangerate-api.com/", endpoint: "https://open.er-api.com/v6/latest/USD", tag: "No key needed" },
  { name: "Frankfurter", category: "Finance", desc: "Open-source currency exchange rate API tracks foreign exchange rates published by European Central Bank.", url: "https://www.frankfurter.app/", endpoint: "https://api.frankfurter.app/latest?from=USD", tag: "No key needed" },
  { name: "Alpha Vantage", category: "Finance", desc: "Real-time and historical stock market data, forex, and technical indicators.", url: "https://www.alphavantage.co/", endpoint: "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo", tag: "Free tier" },
  { name: "Finnhub Stock API", category: "Finance", desc: "Real-time REST and WebSocket API for stocks, forex, and crypto data.", url: "https://finnhub.io/", endpoint: "https://finnhub.io/api/v1/quote?symbol=AAPL&token={YOUR_TOKEN}", tag: "Free tier" },
  { name: "Binance API", category: "Finance", desc: "Official Binance crypto exchange REST endpoints for ticker info and order books.", url: "https://binance-docs.github.io/apidocs/spot/en/", endpoint: "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT", tag: "No key needed" },

  // --- NEWS & ARTICLES ---
  { name: "NewsAPI", category: "News", desc: "Fetch live news headlines and articles from thousands of worldwide sources.", url: "https://newsapi.org/", endpoint: "https://newsapi.org/v2/top-headlines?country=us&apiKey={YOUR_API_KEY}", tag: "Free tier" },
  { name: "Spaceflight News API", category: "News", desc: "Get aerospace, NASA, SpaceX, and astronomy news articles and blogs.", url: "https://spaceflightnewsapi.net/", endpoint: "https://api.spaceflightnewsapi.net/v4/articles/", tag: "No key needed" },
  { name: "HackerNews API", category: "News", desc: "Official Firebase API access to top stories, comments, and job posts on Hacker News.", url: "https://github.com/HackerNews/API", endpoint: "https://hacker-news.firebaseio.com/v0/topstories.json", tag: "No key needed" },
  { name: "Currents API", category: "News", desc: "Latest global news headlines and article search across 18 languages.", url: "https://currentsapi.services/en", endpoint: "https://api.currentsapi.services/v1/latest-news?apiKey={YOUR_KEY}", tag: "Free tier" },

  // --- SCIENCE & SPACE ---
  { name: "NASA Open APIs", category: "Science", desc: "Explore space photography, Astronomy Picture of the Day (APOD), and Mars rover data.", url: "https://api.nasa.gov/", endpoint: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", tag: "Free tier" },
  { name: "ISS Location API", category: "Science", desc: "Get current latitude and longitude position of the International Space Station.", url: "http://open-notify.org/Open-Notify-API/ISS-Location-Now/", endpoint: "http://api.open-notify.org/iss-now.json", tag: "No key needed" },
  { name: "People in Space", category: "Science", desc: "Get real-time total count and names of astronauts currently orbiting in space.", url: "http://open-notify.org/", endpoint: "http://api.open-notify.org/astros.json", tag: "No key needed" },
  { name: "Launch Library 2", category: "Science", desc: "Upcoming rocket launches, spaceflight events, and space station expeditions.", url: "https://ll.thespacedevs.com/2.2.0/swagger/", endpoint: "https://ll.thespacedevs.com/2.2.0/launch/upcoming/", tag: "No key needed" },
  { name: "Solar System Open Data", category: "Science", desc: "Physical dimensions, orbital parameters, moons, and physics data for all planets.", url: "https://api.le-systeme-solaire.net/en/", endpoint: "https://api.le-systeme-solaire.net/rest/bodies/", tag: "No key needed" },

  // --- DEVELOPER TOOLS & REPOS ---
  { name: "GitHub REST API", category: "Developer", desc: "Interact programmatically with repositories, public user profiles, issues, and commits.", url: "https://docs.github.com/en/rest", endpoint: "https://api.github.com/users/octocat", tag: "Free tier" },
  { name: "GitLab API", category: "Developer", desc: "Automate GitLab projects, users, pipelines, and commits.", url: "https://docs.gitlab.com/ee/api/rest/", endpoint: "https://gitlab.com/api/v4/projects", tag: "Free tier" },
  { name: "IPinfo.io", category: "Developer", desc: "Fast IP address geolocation, ASN details, domain resolution, and network mapping.", url: "https://ipinfo.io/", endpoint: "https://ipinfo.io/8.8.8.8/json", tag: "Free tier" },
  { name: "CDNJS API", category: "Developer", desc: "Search and discover frontend open-source JavaScript libraries hosted on cdnjs.", url: "https://cdnjs.com/api", endpoint: "https://api.cdnjs.com/libraries?search=react", tag: "No key needed" },
  { name: "npm Registry API", category: "Developer", desc: "Query package metadata, version histories, and download stats from npm registry.", url: "https://github.com/npm/registry/blob/master/docs/REGISTRY-API.md", endpoint: "https://registry.npmjs.org/express", tag: "No key needed" },
  { name: "PyPI JSON API", category: "Developer", desc: "Retrieve Python package metadata, releases, and dependencies from PyPI.", url: "https://warehouse.pypa.io/api-reference/json.html", endpoint: "https://pypi.org/pypi/requests/json", tag: "No key needed" },
  { name: "Shields.io", category: "Developer", desc: "Generate pixel-perfect SVG badges for GitHub readmes and documentation.", url: "https://shields.io/", endpoint: "https://img.shields.io/badge/status-active-brightgreen.svg", tag: "No key needed" },
  { name: "CORS AnyWhere", category: "Developer", desc: "Proxy service that adds CORS headers to browser requests.", url: "https://cors-anywhere.herokuapp.com/", endpoint: "https://cors-anywhere.herokuapp.com/https://example.com", tag: "Free tier" },
  { name: "Microlink API", category: "Developer", desc: "Turn any webpage into data, generate automated PDF previews or opengraph screenshots.", url: "https://microlink.io/", endpoint: "https://api.microlink.io?url=https://github.com", tag: "Free tier" },
  { name: "HTTP Status Codes API", category: "Developer", desc: "Returns mock HTTP status codes (200, 404, 500) for testing error boundaries.", url: "https://httpstat.us/", endpoint: "https://httpstat.us/200", tag: "No key needed" },

  // --- MEDIA, IMAGES & DESIGN ---
  { name: "Unsplash API", category: "Media", desc: "Access high-resolution royalty-free photos and photography collections.", url: "https://unsplash.com/developers", endpoint: "https://api.unsplash.com/photos/?client_id={YOUR_ACCESS_KEY}", tag: "Free tier" },
  { name: "Pexels API", category: "Media", desc: "Search millions of free stock photos and videos from global creators.", url: "https://www.pexels.com/api/", endpoint: "https://api.pexels.com/v1/search?query=nature", tag: "Free tier" },
  { name: "Pixabay API", category: "Media", desc: "Over 2.7 million stock photos, vectors, illustrations, and videos.", url: "https://pixabay.com/api/docs/", endpoint: "https://pixabay.com/api/?key={YOUR_API_KEY}&q=yellow+flowers", tag: "Free tier" },
  { name: "Lorem Picsum", category: "Media", desc: "Easy to use, stylish placeholder images with custom width and height.", url: "https://picsum.photos/", endpoint: "https://picsum.photos/200/300", tag: "No key needed" },
  { name: "PlaceKitten", category: "Media", desc: "A quick and simple service for getting pictures of kittens for use as placeholders.", url: "https://placekitten.com/", endpoint: "https://placekitten.com/200/300", tag: "No key needed" },
  { name: "Robohash", category: "Media", desc: "Generate unique robot, monster, or alien avatars from any text string.", url: "https://robohash.org/", endpoint: "https://robohash.org/your-custom-text.png", tag: "No key needed" },
  { name: "DiceBear Avatars", category: "Media", desc: "Generate unique avatar icons based on seed strings for user profiles.", url: "https://www.dicebear.com/", endpoint: "https://api.dicebear.com/7.x/bottts/svg?seed=Felix", tag: "No key needed" },

  // --- FOOD & DRINK ---
  { name: "Spoonacular", category: "Food", desc: "Discover recipes, analyze nutrition facts, search ingredients, and generate meal plans.", url: "https://spoonacular.com/food-api", endpoint: "https://api.spoonacular.com/recipes/complexSearch?apiKey={YOUR_API_KEY}", tag: "Free tier" },
  { name: "TheCocktailDB", category: "Food", desc: "Open database of drinks and cocktail recipes including ingredients, measures, and photos.", url: "https://www.thecocktaildb.com/api.php", endpoint: "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita", tag: "Free tier" },
  { name: "TheMealDB", category: "Food", desc: "Crowdsourced database of recipes from around the world with video guides.", url: "https://www.themealdb.com/api.php", endpoint: "https://www.themealdb.com/api/json/v1/1/random.php", tag: "Free tier" },
  { name: "Coffee API", category: "Food", desc: "Random hot and iced coffee drink images with descriptions.", url: "https://coffee.alexflipnote.dev/", endpoint: "https://coffee.alexflipnote.dev/random.json", tag: "No key needed" },

  // --- BOOKS & LITERATURE ---
  { name: "Open Library API", category: "Books", desc: "Access catalog of millions of book titles, authors, cover images, and ISBN details.", url: "https://openlibrary.org/developers/api", endpoint: "https://openlibrary.org/isbn/9780140328721.json", tag: "No key needed" },
  { name: "Google Books API", category: "Books", desc: "Search through full-text content, reviews, and metadata of Google Books catalog.", url: "https://developers.google.com/books", endpoint: "https://www.googleapis.com/books/v1/volumes?q=search+terms", tag: "Free tier" },
  { name: "Gutendex", category: "Books", desc: "Web API for free ebook catalog from Project Gutenberg.", url: "https://gutendex.com/", endpoint: "https://gutendex.com/books/", tag: "No key needed" },
  { name: "PoetryDB", category: "Books", desc: "API for search and retrieval of internet poetical works and classic poems.", url: "https://poetrydb.org/", endpoint: "https://poetrydb.org/author/Shakespeare", tag: "No key needed" },

  // --- MUSIC & AUDIO ---
  { name: "Spotify Web API", category: "Music", desc: "Access Spotify music catalog, artists, tracks, playlists, and user library.", url: "https://developer.spotify.com/documentation/web-api", endpoint: "https://api.spotify.com/v1/artists/{id}", tag: "Free tier" },
  { name: "Deezer API", category: "Music", desc: "Query Deezer music catalog, album artwork, track charts, and genre listings.", url: "https://developers.deezer.com/api", endpoint: "https://api.deezer.com/artist/27", tag: "No key needed" },
  { name: "Genius API", category: "Music", desc: "Search song lyrics metadata, artist bios, and musical annotations.", url: "https://docs.genius.com/", endpoint: "https://api.genius.com/search?q=Kendrick%20Lamar", tag: "Free tier" },
  { name: "iTunes Search API", category: "Music", desc: "Search content within the iTunes Store including podcasts, music, and movies.", url: "https://performance-developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/index.html", endpoint: "https://itunes.apple.com/search?term=jack+johnson", tag: "No key needed" },
  { name: "Lyrics.ovh", category: "Music", desc: "Simple REST API to retrieve song lyrics by artist and song title.", url: "https://lyricsovh.docs.apiary.io/", endpoint: "https://api.lyrics.ovh/v1/Coldplay/Adventure%20of%20a%20Lifetime", tag: "No key needed" },

  // --- SPORTS & GAMING ---
  { name: "CheapShark API", category: "Gaming", desc: "Track digital PC game deals and sale discounts across Steam, GOG, and Humble.", url: "https://apidocs.cheapshark.com/", endpoint: "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15", tag: "No key needed" },
  { name: "RAWG Video Games API", category: "Gaming", desc: "Database of 500,000+ games across 50 platforms with screenshots and ratings.", url: "https://rawg.io/apidocs", endpoint: "https://api.rawg.io/api/games?key={YOUR_API_KEY}", tag: "Free tier" },
  { name: "FreeToGame API", category: "Gaming", desc: "Track best free-to-play PC and browser games with live metadata and links.", url: "https://www.freetogame.com/api-doc", endpoint: "https://www.freetogame.com/api/games", tag: "No key needed" },
  { name: "OpenDota API", category: "Gaming", desc: "Dota 2 match history, hero statistics, player stats, and live telemetry data.", url: "https://docs.opendota.com/", endpoint: "https://api.opendota.com/api/heroStats", tag: "No key needed" },
  { name: "Chess.com API", category: "Gaming", desc: "Access user profiles, game archives, leaderboards, and live tournaments.", url: "https://www.chess.com/news/view/published-data-api", endpoint: "https://api.chess.com/pub/player/erik", tag: "No key needed" },
  { name: "Football-Data.org", category: "Sports", desc: "Football fixture data, live scores, standings, and team stats for global leagues.", url: "https://www.football-data.org/", endpoint: "https://api.football-data.org/v4/competitions/PL/matches", tag: "Free tier" },
  { name: "Ergast Formula 1 API", category: "Sports", desc: "Historical data for Formula 1 motor racing including lap times, standings, and circuits.", url: "http://ergast.com/mrd/", endpoint: "http://ergast.com/api/f1/current/driverStandings.json", tag: "No key needed" },

  // --- ART, ARCHITECTURE & DICTIONARY ---
  { name: "Free Dictionary API", category: "Directory", desc: "Definitions, phonetic pronunciations, synonyms, and audio files for English words.", url: "https://dictionaryapi.dev/", endpoint: "https://api.dictionaryapi.dev/api/v2/entries/en/hello", tag: "No key needed" },
  { name: "Metropolitan Museum of Art", category: "Directory", desc: "Access 470,000+ high-res images of public domain artworks from The Met.", url: "https://metmuseum.github.io/", endpoint: "https://collectionapi.metmuseum.org/public/collection/v1/objects/436535", tag: "No key needed" },
  { name: "Rijksmuseum API", category: "Directory", desc: "Explore Dutch master art collections including Rembrandt and Vermeer masterpieces.", url: "https://data.rijksmuseum.nl/object-metadata/api/", endpoint: "https://www.rijksmuseum.nl/api/en/collection?key={YOUR_KEY}&format=json", tag: "Free tier" },
  { name: "Art Institute of Chicago", category: "Directory", desc: "Artworks, exhibition data, and high-res image manifests.", url: "https://api.artic.edu/docs/", endpoint: "https://api.artic.edu/api/v1/artworks/129884", tag: "No key needed" }
];