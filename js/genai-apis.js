const genaiApis = [
  { name: "OpenAI Platform API", category: "LLM & Vision", desc: "GPT-4o, DALL-E 3, Whisper, and Embeddings endpoints for modern AI apps.", keyUrl: "https://platform.openai.com/api-keys" },
  { name: "Google Gemini API", category: "Multimodal LLM", desc: "Google DeepMind's Gemini Pro & Flash models for ultra-fast text, code, and vision reasoning.", keyUrl: "https://aistudio.google.com/app/apikey" },
  { name: "Anthropic Claude API", category: "LLM & Code", desc: "Claude 3.5 Sonnet & Haiku models with high contextual accuracy and safety controls.", keyUrl: "https://console.anthropic.com/settings/keys" },
  { name: "Hugging Face Inference API", category: "Open Source AI", desc: "Deploy and call over 100,000+ open-source AI models via serverless API.", keyUrl: "https://huggingface.co/settings/tokens" },
  { name: "Mistral AI API", category: "LLM & Embeddings", desc: "Open-weight and commercial enterprise AI models optimized for speed and performance.", keyUrl: "https://console.mistral.ai/api-keys/" },
  { name: "ElevenLabs Voice API", category: "Audio Synthesis", desc: "Ultra-realistic AI voice cloning, speech generation, and dubbing APIs.", keyUrl: "https://elevenlabs.io/app/settings/api-keys" }
];

function renderAPIs(data) {
  const grid = document.getElementById('apiGrid');
  grid.innerHTML = '';
  
  if (data.length === 0) {
    grid.innerHTML = `<p style="text-align:center; grid-column: 1/-1; color: var(--text-muted);">No Generative AI APIs found matching your search.</p>`;
    return;
  }

  data.forEach(api => {
    grid.innerHTML += `
      <div class="api-card">
        <div>
          <div class="card-header">
            <span class="api-title">${api.name}</span>
            <span class="badge badge-genai">${api.category}</span>
          </div>
          <p class="api-desc">${api.desc}</p>
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