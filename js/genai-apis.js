const genaiApis = [
  { 
    name: "OpenAI API", 
    category: "LLM & Vision", 
    desc: "GPT-4o, DALL-E 3, Whisper, and Embeddings endpoints for modern AI apps.", 
    endpoint: "https://api.openai.com/v1/chat/completions", 
    keyUrl: "https://platform.openai.com/api-keys" 
  },
  { 
    name: "Google Gemini API", 
    category: "Multimodal LLM", 
    desc: "DeepMind's Gemini Pro & Flash models for ultra-fast text, code, and vision.", 
    endpoint: "https://generativelanguage.googleapis.com/v1beta/models", 
    keyUrl: "https://aistudio.google.com/app/apikey" 
  },
  { 
    name: "Anthropic Claude API", 
    category: "LLM & Code", 
    desc: "Claude 3.5 Sonnet & Haiku models with high contextual accuracy and safety.", 
    endpoint: "https://api.anthropic.com/v1/messages", 
    keyUrl: "https://console.anthropic.com/settings/keys" 
  },
  { 
    name: "Hugging Face Inference", 
    category: "Open Source AI", 
    desc: "Deploy and call over 100,000+ open-source AI models via serverless API.", 
    endpoint: "https://api-inference.huggingface.co/models", 
    keyUrl: "https://huggingface.co/settings/tokens" 
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

function copyEndpoint(url) {
  navigator.clipboard.writeText(url);
  showToast(`Copied GenAI Endpoint! 🔗`);
}

function renderAPIs(data) {
  const grid = document.getElementById('apiGrid');
  grid.innerHTML = '';

  data.forEach((api) => {
    grid.innerHTML += `
      <div class="api-card">
        <div>
          <div class="card-header">
            <span class="api-title">${api.name}</span>
            <span class="badge badge-genai">${api.category}</span>
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
          <a href="${api.keyUrl}" target="_blank" class="btn-action" style="background: linear-gradient(135deg, #a855f7, #7f00ff);">Generate Key 🔑</a>
        </div>
      </div>
    `;
  });
}

document.getElementById('searchInput').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = genaiApis.filter(api => 
    api.name.toLowerCase().includes(query) || 
    api.category.toLowerCase().includes(query) ||
    api.desc.toLowerCase().includes(query)
  );
  renderAPIs(filtered);
});

renderAPIs(genaiApis);