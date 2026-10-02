/* ==========================================================================
   API Verse - AI Model APIs Dataset with SVG Paths
   ========================================================================== */

const AI_APIS = [
  // --- Original 10 Providers ---
  {
    name: "OpenAI (GPT Models)",
    desc: "Access flagship GPT-4o, GPT-4, and o-series reasoning models via official platform.",
    url: "https://platform.openai.com/api-keys",
    svg: "../assets/all SVGs/openai.svg",
    env: "OPENAI_API_KEY"
  },
  {
    name: "Anthropic (Claude)",
    desc: "Console access for Claude 3.5 Sonnet, Opus, and Haiku foundational models.",
    url: "https://console.anthropic.com/",
    svg: "../assets/all SVGs/anthropic.svg",
    env: "ANTHROPIC_API_KEY"
  },
  {
    name: "Mistral AI",
    desc: "Enterprise-grade access to Mistral Large, Codestral, and open-weight models.",
    url: "https://console.mistral.ai/",
    svg: "../assets/all SVGs/mistral.svg",
    env: "MISTRAL_API_KEY"
  },
  {
    name: "Google Gemini",
    desc: "Direct API key management via Google AI Studio for Gemini models.",
    url: "https://aistudio.google.com/app/apikey",
    svg: "../assets/all SVGs/google-gemini.svg",
    env: "GEMINI_API_KEY"
  },
  {
    name: "Cohere",
    desc: "Enterprise text generation, RAG optimization, and semantic embedding models.",
    url: "https://dashboard.cohere.com/api-keys",
    svg: "../assets/all SVGs/cohere.svg",
    env: "COHERE_API_KEY"
  },
  {
    name: "Groq",
    desc: "Ultra-fast LPU inference engine running Llama 3, Mixtral, and open LLMs.",
    url: "https://console.groq.com/keys",
    svg: "../assets/all SVGs/groq.svg",
    env: "GROQ_API_KEY"
  },
  {
    name: "Hugging Face",
    desc: "Access thousands of open-source models through Inference Endpoints and API tokens.",
    url: "https://huggingface.co/settings/tokens",
    svg: "../assets/all SVGs/huggingface.svg",
    env: "HF_TOKEN"
  },
  {
    name: "Perplexity API",
    desc: "Search-augmented LLMs integrating live web grounding for accurate factual queries.",
    url: "https://www.perplexity.ai/settings/api",
    svg: "../assets/all SVGs/perplexity.svg",
    env: "PERPLEXITY_API_KEY"
  },
  {
    name: "Together AI",
    desc: "High-performance serverless inference infrastructure for open-source AI models.",
    url: "https://api.together.xyz/settings/api-keys",
    svg: "../assets/all SVGs/together.svg",
    env: "TOGETHER_API_KEY"
  },
  {
    name: "Replicate",
    desc: "Cloud infrastructure to run and deploy open-source text, vision, and image models.",
    url: "https://replicate.com/account/api-tokens",
    svg: "../assets/all SVGs/replicate.svg",
    env: "REPLICATE_API_TOKEN"
  },

  // --- Multi-Model Aggregators & Routers ---
  {
    name: "OpenRouter",
    desc: "Unified API gateway offering standardized access to hundreds of LLMs.",
    url: "https://openrouter.ai/keys",
    svg: "../assets/all SVGs/openrouter.svg",
    env: "OPENROUTER_API_KEY"
  },
  {
    name: "Fireworks AI",
    desc: "Production-ready fast inference engine for fine-tuned open-source LLMs.",
    url: "https://fireworks.ai/account/api-keys",
    svg: "../assets/all SVGs/fireworks.svg",
    env: "FIREWORKS_API_KEY"
  },
  {
    name: "Anyscale Endpoints",
    desc: "Scalable serverless platform for hosting open-source models like Llama and CodeLlama.",
    url: "https://app.endpoints.anyscale.com/",
    svg: "../assets/all SVGs/anyscale.svg",
    env: "ANYSCALE_API_KEY"
  },
  {
    name: "DeepInfra",
    desc: "Low-latency, cost-effective inference for popular open-source text and vision LLMs.",
    url: "https://deepinfra.com/dash/api_keys",
    svg: "../assets/all SVGs/deepinfra.svg",
    env: "DEEPINFRA_API_KEY"
  },
  {
    name: "Stability AI",
    desc: "API suite for Stable Diffusion 3, Ultra, Flux image generation, and 3D modeling.",
    url: "https://platform.stability.ai/account/keys",
    svg: "../assets/all SVGs/stability.svg",
    env: "STABILITY_API_KEY"
  },
  {
    name: "Pinecone",
    desc: "Serverless vector database designed for real-time similarity search and RAG.",
    url: "https://app.pinecone.io/",
    svg: "../assets/all SVGs/pinecone.svg",
    env: "PINECONE_API_KEY"
  },
  {
    name: "ElevenLabs",
    desc: "Industry-leading AI voice generator, text-to-speech, and voice cloning platform.",
    url: "https://elevenlabs.io/app/settings/api-keys",
    svg: "../assets/all SVGs/elevenlabs.svg",
    env: "ELEVENLABS_API_KEY"
  }
];