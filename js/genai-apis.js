const AI_APIS = [
  { name: "OpenAI (GPT models)", desc: "GPT-4, GPT-4o aur o-series models ke liye API key.", url: "https://platform.openai.com/signup", color: "#10A37F" },
  { name: "Anthropic (Claude)", desc: "Claude models (Sonnet, Opus, Haiku) ke liye Console access.", url: "https://console.anthropic.com/", color: "#D97757" },
  { name: "Mistral AI", desc: "Mistral Small, Medium, Large models — European open-weight AI.", url: "https://console.mistral.ai/", color: "#FF7000" },
  { name: "Google Gemini", desc: "Gemini models ke liye Google AI Studio se seedha API key.", url: "https://aistudio.google.com/app/apikey", color: "#4285F4" },
  { name: "Cohere", desc: "Enterprise-grade text generation aur embedding models.", url: "https://dashboard.cohere.com/api-keys", color: "#39594C" },
  { name: "Groq", desc: "Ultra-fast inference ke saath open models (Llama, Mixtral).", url: "https://console.groq.com/keys", color: "#F55036" },
  { name: "Hugging Face", desc: "Hazaaron open-source models — Inference API se access karo.", url: "https://huggingface.co/settings/tokens", color: "#FFD21E" },
  { name: "Perplexity API", desc: "Search-augmented AI models ke liye API access.", url: "https://www.perplexity.ai/settings/api", color: "#20808D" },
  { name: "Together AI", desc: "Open-source LLMs ko fast, affordable inference ke saath run karo.", url: "https://api.together.xyz/settings/api-keys", color: "#0F6FFF" },
  { name: "Replicate", desc: "Image, video aur text models ko simple API calls se run karo.", url: "https://replicate.com/account/api-tokens", color: "#000000" },
];



// const genaiApis = [
//   { 
//     name: "OpenAI API", 
//     category: "LLM & Vision", 
//     desc: "GPT-4o, DALL-E 3, Whisper, and Embeddings endpoints for modern AI apps.", 
//     endpoint: "https://api.openai.com/v1/chat/completions", 
//     keyUrl: "https://platform.openai.com/api-keys" 
//   },
//   { 
//     name: "Google Gemini API", 
//     category: "Multimodal LLM", 
//     desc: "DeepMind's Gemini Pro & Flash models for ultra-fast text, code, and vision.", 
//     endpoint: "https://generativelanguage.googleapis.com/v1beta/models", 
//     keyUrl: "https://aistudio.google.com/app/apikey" 
//   },
//   { 
//     name: "Anthropic Claude API", 
//     category: "LLM & Code", 
//     desc: "Claude 3.5 Sonnet & Haiku models with high contextual accuracy and safety.", 
//     endpoint: "https://api.anthropic.com/v1/messages", 
//     keyUrl: "https://console.anthropic.com/settings/keys" 
//   },
//   { 
//     name: "Hugging Face Inference", 
//     category: "Open Source AI", 
//     desc: "Deploy and call over 100,000+ open-source AI models via serverless API.", 
//     endpoint: "https://api-inference.huggingface.co/models", 
//     keyUrl: "https://huggingface.co/settings/tokens" 
//   }
// ];

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

// function copyEndpoint(url) {
//   navigator.clipboard.writeText(url);
//   showToast(`Copied GenAI Endpoint! 🔗`);
// }

// function renderAPIs(data) {
//   const grid = document.getElementById('apiGrid');
//   grid.innerHTML = '';

//   data.forEach((api) => {
//     grid.innerHTML += `
//       <div class="api-card">
//         <div>
//           <div class="card-header">
//             <span class="api-title">${api.name}</span>
//             <span class="badge badge-genai">${api.category}</span>
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
//           <a href="${api.keyUrl}" target="_blank" class="btn-action" style="background: linear-gradient(135deg, #a855f7, #7f00ff);">Generate Key 🔑</a>
//         </div>
//       </div>
//     `;
//   });
// }

// document.getElementById('searchInput').addEventListener('input', (e) => {
//   const query = e.target.value.toLowerCase();
//   const filtered = genaiApis.filter(api => 
//     api.name.toLowerCase().includes(query) || 
//     api.category.toLowerCase().includes(query) ||
//     api.desc.toLowerCase().includes(query)
//   );
//   renderAPIs(filtered);
// });

// renderAPIs(genaiApis);