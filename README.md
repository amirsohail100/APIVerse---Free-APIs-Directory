# 🌌 APIVerse - Interactive 3D Glassmorphic API Hub

APIVerse is a modern, high-performance web application designed for developers to discover, search, filter, and access hundreds of APIs across multiple categories including Public/Free APIs, Enterprise Paid APIs, and Cutting-Edge Generative AI APIs.

---

## ✨ Features

- **🏠 Interactive Landing Page:** Modern glassmorphic hero section, feature breakdown, live stats, and quick navigation.
- **🆓 Free APIs Directory (`pages/free-apis.html`):** Real-time search and tag filtering for completely free APIs (Weather, News, Finance, Games, Space, etc.).
- **💳 Paid & Freemium APIs Directory (`pages/paid-apis.html`):** Explore top commercial APIs with direct redirection buttons to official dashboard endpoints for key generation.
- **🤖 Dedicated GenAI Hub (`pages/genai-apis.html`):** Specialized directory for LLM, Image Gen, Audio Synthesis, and Multimodal APIs with instant key portal links.
- **🎨 Glassmorphism & 3D UI:** Interactive 3D tilt cards, dynamic glowing borders, blur backdrops, and interactive particle background animations.

---
```js
{ name: "Naya API", category: "Data", desc: "Iska kaam kya hai.", url: "https://...", tag: "Free tier" }
```

## Shortlist kaise kaam karti hai
`free-apis.html` page par har card ke star (⭐) icon par click karne se woh API browser ke `localStorage` mein save ho jaati hai (server ki zaroorat nahi). Neeche-right corner mein "Shortlist" button se poori list dekh sakte hain aur wahin se remove bhi kar sakte hain.

## Aage kya jod sakte hain
- Backend jodkar shortlist ko account ke saath sync karna
- Har free API ke liye "Try it live" console (fetch karke response dikhana)
- Dark/Light theme toggle

---

## 🛠️ Tech Stack

- **HTML5 & CSS3:** Vanilla CSS variables, Backdrop Filter, CSS Grid, Flexbox, Glassmorphism design system.
- **JavaScript (ES6+):** Dynamic rendering, client-side real-time fuzzy search, Vanilla-Tilt 3D interactions, Canvas animation.

---

## 🚀 Quick Start

1. Clone or download the repository.
2. Open `index.html` directly in any web browser or use VS Code **Live Server**.
3. Explore and search APIs instantly across pages!
