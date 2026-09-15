const genaiApis = [
  { name: "OpenAI Platform API", category: "LLM & Vision", desc: "GPT-4o, DALL-E 3, Whisper, and Embeddings endpoints for modern AI apps.", key: "sk-proj-aB1c2D3e4F5g6H7i8J9k0L1m", keyUrl: "https://platform.openai.com/api-keys" },
  { name: "Google Gemini API", category: "Multimodal LLM", desc: "DeepMind's Gemini Pro & Flash models for ultra-fast text, code, and vision.", key: "AIzaSyD9x8c7v6b5n4m3L2k1J0mN", keyUrl: "https://aistudio.google.com/app/apikey" },
  { name: "Anthropic Claude API", category: "LLM & Code", desc: "Claude 3.5 Sonnet & Haiku models with high contextual accuracy and safety.", key: "sk-ant-api03-x9y8z7w6v5u4t3s2", keyUrl: "https://console.anthropic.com/settings/keys" },
  { name: "Hugging Face Inference API", category: "Open Source AI", desc: "Deploy and call over 100,000+ open-source AI models via serverless API.", key: "hf_x9y8z7w6v5u4t3s2r1q0p9o8", keyUrl: "https://huggingface.co/settings/tokens" },
  { name: "Mistral AI API", category: "LLM & Embeddings", desc: "Open-weight and commercial enterprise AI models optimized for speed.", key: "mistral_live_key_99302188277", keyUrl: "https://console.mistral.ai/api-keys/" },
  { name: "ElevenLabs Voice API", category: "Audio Synthesis", desc: "Ultra-realistic AI voice cloning, speech generation, and dubbing APIs.", key: "el_key_8849204859103948", keyUrl: "https://elevenlabs.io/app/settings/api-keys" },
  { name: "Groq Cloud LPU API", category: "Ultra Fast Inference", desc: "LPU Inference Engine delivering 500+ tokens/sec for Llama 3 & Mixtral.", key: "gsk_8849204859103948572019", keyUrl: "https://console.groq.com/keys" }
];

function maskKey(key) {
  if(key.length <= 8) return key;
  return key.substring(0, 6) + "••••••••" + key.substring(key.length - 4);
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
    grid.innerHTML = `<p style="text-align:center; grid-column: 1/-1; color: var(--text-muted);">No Generative AI APIs found matching your search.</p>`;
    return;
  }

  data.forEach((api, index) => {
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
              <button id="eye-btn-${index}" class="btn-eye" onclick="toggleEye(${index}, '${api.key}')">👁️</button>
              <span id="key-display-${index}" class="key-display" data-shown="false">${maskKey(api.key)}</span>
            </div>
            <button class="btn-copy" onclick="copyToClipboard('${api.key}')">📋 Copy</button>
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