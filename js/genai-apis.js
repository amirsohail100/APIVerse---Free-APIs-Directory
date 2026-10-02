/* ==========================================================================
   API Verse - AI Model APIs Dataset with SVG Paths (Complete 62 Providers)
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

  // --- Multi-Model Aggregators & Routers (11-18) ---
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
    name: "Novita AI",
    desc: "Flexible API endpoints for Stable Diffusion, Llama 3, and specialized voice models.",
    url: "https://novita.ai/get-started/API-Key.html",
    svg: "../assets/all SVGs/novita.svg",
    env: "NOVITA_API_KEY"
  },
  {
    name: "Lepton AI",
    desc: "Build and run AI apps in seconds with ultra-fast serverless cloud deployments.",
    url: "https://www.lepton.ai/",
    svg: "../assets/all SVGs/lepton.svg",
    env: "LEPTON_WORKSPACE_TOKEN"
  },
  {
    name: "OctoAI (OctoML)",
    desc: "Optimized cloud endpoints for running Stable Diffusion, Llama, and custom models.",
    url: "https://octoai.cloud/settings/api-tokens",
    svg: "../assets/all SVGs/octoai.svg",
    env: "OCTOAI_API_KEY"
  },
  {
    name: "Baseten",
    desc: "High-performance model serving infrastructure with autoscaling GPU hardware.",
    url: "https://app.baseten.co/settings/account/api_keys",
    svg: "../assets/all SVGs/baseten.svg",
    env: "BASETEN_API_KEY"
  },

  // --- Image & Video Generation APIs (19-28) ---
  {
    name: "Stability AI",
    desc: "API suite for Stable Diffusion 3, Ultra, Flux image generation, and 3D modeling.",
    url: "https://platform.stability.ai/account/keys",
    svg: "../assets/all SVGs/stability.svg",
    env: "STABILITY_API_KEY"
  },
  {
    name: "Fal AI",
    desc: "Lightning-fast media generation APIs powering Flux.1 and SDXL diffusion pipelines.",
    url: "https://fal.ai/dashboard/keys",
    svg: "../assets/all SVGs/fal.svg",
    env: "FAL_KEY"
  },
  {
    name: "Runway ML",
    desc: "Next-gen generative video and motion generation APIs (Gen-2 & Gen-3 Alpha).",
    url: "https://runwayml.com/",
    svg: "../assets/all SVGs/runway.svg",
    env: "RUNWAY_API_KEY"
  },
  {
    name: "Luma AI (Dream Machine)",
    desc: "High-fidelity 3D capture and realistic AI video generation APIs.",
    url: "https://lumalabs.ai/dream-machine/api",
    svg: "../assets/all SVGs/luma.svg",
    env: "LUMA_API_KEY"
  },
  {
    name: "Clipdrop API",
    desc: "AI image editing tools including background removal, upscaling, and relighting.",
    url: "https://clipdrop.co/apis",
    svg: "../assets/all SVGs/clipdrop.svg",
    env: "CLIPDROP_API_KEY"
  },
  {
    name: "Leonardo AI",
    desc: "Production-quality image generation API with custom fine-tuned visual styles.",
    url: "https://app.leonardo.ai/api-access",
    svg: "../assets/all SVGs/leonardo.svg",
    env: "LEONARDO_API_KEY"
  },
  {
    name: "Ideogram API",
    desc: "State-of-the-art image generation API with exceptional typography and text rendering.",
    url: "https://ideogram.ai/manage-api",
    svg: "../assets/all SVGs/ideogram.svg",
    env: "IDEOGRAM_API_KEY"
  },
  {
    name: "Recraft AI",
    desc: "Vector graphics, 3D icons, and brand illustration generation via developer API.",
    url: "https://www.recraft.ai/api",
    svg: "../assets/all SVGs/recraft.svg",
    env: "RECRAFT_API_KEY"
  },
  {
    name: "Scenario AI",
    desc: "AI engine for game developers to generate consistent style assets and textures.",
    url: "https://www.scenario.com/",
    svg: "../assets/all SVGs/scenario.svg",
    env: "SCENARIO_API_KEY"
  },
  {
    name: "Midjourney (Third-Party)",
    desc: "REST wrapper APIs providing automated access to Midjourney image generation.",
    url: "https://useapi.net/",
    svg: "../assets/all SVGs/midjourney.svg",
    env: "USEAPI_TOKEN"
  },

  // --- Voice, Speech & Audio AI (29-36) ---
  {
    name: "ElevenLabs",
    desc: "Industry-leading AI voice generator, text-to-speech, and voice cloning platform.",
    url: "https://elevenlabs.io/app/settings/api-keys",
    svg: "../assets/all SVGs/elevenlabs.svg",
    env: "ELEVENLABS_API_KEY"
  },
  {
    name: "Deepgram",
    desc: "Ultra-fast speech-to-text transcription and conversational voice AI APIs.",
    url: "https://console.deepgram.com/",
    svg: "../assets/all SVGs/deepgram.svg",
    env: "DEEPGRAM_API_KEY"
  },
  {
    name: "AssemblyAI",
    desc: "Speech AI models for real-time transcription, audio intelligence, and diarization.",
    url: "https://www.assemblyai.com/app/account",
    svg: "../assets/all SVGs/assemblyai.svg",
    env: "ASSEMBLYAI_API_KEY"
  },
  {
    name: "PlayHT",
    desc: "Conversational text-to-speech engine with ultra-realistic low-latency streaming voices.",
    url: "https://play.ht/studio/api-access",
    svg: "../assets/all SVGs/playht.svg",
    env: "PLAYHT_API_KEY"
  },
  {
    name: "Cartesia (Sonic)",
    desc: "Ultra-low-latency text-to-speech API engineered for real-time AI voice agents.",
    url: "https://play.cartesia.ai/console",
    svg: "../assets/all SVGs/cartesia.svg",
    env: "CARTESIA_API_KEY"
  },
  {
    name: "Resemble AI",
    desc: "Custom AI voice cloning, deepfake detection, and localized speech synthesis.",
    url: "https://app.resemble.ai/settings/api",
    svg: "../assets/all SVGs/resemble.svg",
    env: "RESEMBLE_API_KEY"
  },
  {
    name: "Suno AI (Unofficial)",
    desc: "API wrappers for full-length AI music generation and song synthesis.",
    url: "https://suno-api.org/",
    svg: "../assets/all SVGs/suno.svg",
    env: "SUNO_API_KEY"
  },
  {
    name: "Udio AI (Unofficial)",
    desc: "Developer endpoints for generating studio-quality musical compositions and vocals.",
    url: "https://udioapi.pro/",
    svg: "../assets/all SVGs/udio.svg",
    env: "UDIO_API_KEY"
  },

  // --- Vector Databases & Search RAG Infrastructure (37-44) ---
  {
    name: "Pinecone",
    desc: "Serverless vector database designed for real-time similarity search and RAG.",
    url: "https://app.pinecone.io/",
    svg: "../assets/all SVGs/pinecone.svg",
    env: "PINECONE_API_KEY"
  },
  {
    name: "Qdrant Cloud",
    desc: "Vector search engine optimized for high-dimensional payload filtering and RAG.",
    url: "https://cloud.qdrant.io/",
    svg: "../assets/all SVGs/qdrant.svg",
    env: "QDRANT_API_KEY"
  },
  {
    name: "Weaviate Cloud",
    desc: "Open-source vector database supporting multi-modal embeddings and hybrid search.",
    url: "https://console.weaviate.cloud/",
    svg: "../assets/all SVGs/weaviate.svg",
    env: "WEAVIATE_API_KEY"
  },
  {
    name: "Chroma Cloud",
    desc: "Developer-friendly embeddings database built specifically for LLM applications.",
    url: "https://www.trychroma.com/",
    svg: "../assets/all SVGs/chroma.svg",
    env: "CHROMA_SERVER_AUTH_CREDENTIALS"
  },
  {
    name: "Milvus Zilliz Cloud",
    desc: "Enterprise cloud vector database for ultra-large scale vector embeddings.",
    url: "https://cloud.zilliz.com/",
    svg: "../assets/all SVGs/zilliz.svg",
    env: "ZILLIZ_API_KEY"
  },
  {
    name: "Upstash Vector",
    desc: "Serverless vector database accessed via simple REST endpoints for edge functions.",
    url: "https://console.upstash.com/",
    svg: "../assets/all SVGs/upstash.svg",
    env: "UPSTASH_VECTOR_REST_TOKEN"
  },
  {
    name: "Tavily AI Search",
    desc: "Search engine API purpose-built for AI agents and RAG web retrieval pipelines.",
    url: "https://tavily.com/",
    svg: "../assets/all SVGs/tavily.svg",
    env: "TAVILY_API_KEY"
  },
  {
    name: "Exa AI (Metaphor)",
    desc: "Neural web search API retrieving semantically relevant web content for LLMs.",
    url: "https://dashboard.exa.ai/api-keys",
    svg: "../assets/all SVGs/exa.svg",
    env: "EXA_API_KEY"
  },

  // --- Specialized & Frontier AI Platforms (45-54) ---
  {
    name: "AI21 Labs (Jurassic)",
    desc: "Enterprise language models, Task-Specific APIs, and contextual rephrase engines.",
    url: "https://studio.ai21.com/account/account",
    svg: "../assets/all SVGs/ai21.svg",
    env: "AI21_API_KEY"
  },
  {
    name: "Jamba (AI21)",
    desc: "Mamba-Transformer hybrid model API designed for ultra-long context windows.",
    url: "https://studio.ai21.com/",
    svg: "../assets/all SVGs/jamba.svg",
    env: "JAMBA_API_KEY"
  },
  {
    name: "DeepSeek AI",
    desc: "High-performance coding and reasoning open models with low-cost cloud APIs.",
    url: "https://platform.deepseek.com/api_keys",
    svg: "../assets/all SVGs/deepseek.svg",
    env: "DEEPSEEK_API_KEY"
  },
  {
    name: "01.AI (Yi Models)",
    desc: "Bilingual open-weight LLMs with long-context comprehension from Kai-Fu Lee.",
    url: "https://platform.lingyiwanwu.com/",
    svg: "../assets/all SVGs/yi.svg",
    env: "YI_API_KEY"
  },
  {
    name: "Qwen AI (Alibaba Cloud)",
    desc: "Tongyi Qianwen LLMs, coding models, and vision-language API suite.",
    url: "https://dashscope.console.aliyun.com/",
    svg: "../assets/all SVGs/qwen.svg",
    env: "DASHSCOPE_API_KEY"
  },
  {
    name: "Zhipu AI (GLM)",
    desc: "Advanced bilingual Chinese-English GLM-4 language models and visual LLMs.",
    url: "https://open.bigmodel.cn/usercenter/apikeys",
    svg: "../assets/all SVGs/zhipu.svg",
    env: "ZHIPU_API_KEY"
  },
  {
    name: "Voyage AI",
    desc: "State-of-the-art domain-specific text and code embedding models for RAG.",
    url: "https://dash.voyageai.com/api-keys",
    svg: "../assets/all SVGs/voyage.svg",
    env: "VOYAGE_API_KEY"
  },
  {
    name: "Unstructured AI",
    desc: "Ingest and process unstructured PDFs, tables, and documents for LLM pipelines.",
    url: "https://unstructured.io/api-key",
    svg: "../assets/all SVGs/unstructured.svg",
    env: "UNSTRUCTURED_API_KEY"
  },
  {
    name: "LlamaIndex Cloud",
    desc: "Managed parsing, indexing, and retrieval APIs for enterprise data connections.",
    url: "https://cloud.llamaindex.ai/",
    svg: "../assets/all SVGs/llamaindex.svg",
    env: "LLAMA_CLOUD_API_KEY"
  },
  {
    name: "LangSmith / LangChain",
    desc: "LLM observability, evaluation, tracing, and agent debugging infrastructure.",
    url: "https://smith.langchain.com/settings",
    svg: "../assets/all SVGs/langchain.svg",
    env: "LANGCHAIN_API_KEY"
  },

  // --- Enterprise AI & Video/Avatar Platforms (55-62) ---
  {
    name: "HeyGen API",
    desc: "AI avatar generation, video localization, and voice-driven spokesperson APIs.",
    url: "https://app.heygen.com/settings?nav=API",
    svg: "../assets/all SVGs/heygen.svg",
    env: "HEYGEN_API_KEY"
  },
  {
    name: "Synthesia API",
    desc: "Enterprise video production API converting script text into photo-realistic avatars.",
    url: "https://www.synthesia.io/api",
    svg: "../assets/all SVGs/synthesia.svg",
    env: "SYNTHESIA_API_KEY"
  },
  {
    name: "D-ID API",
    desc: "Create interactive conversational avatars from single photos and text inputs.",
    url: "https://studio.d-id.com/account",
    svg: "../assets/all SVGs/d-id.svg",
    env: "DID_API_KEY"
  },
  {
    name: "Tencent Hunyuan",
    desc: "Enterprise foundational model API for text, code, and 3D generation.",
    url: "https://cloud.tencent.com/product/hunyuan",
    svg: "../assets/all SVGs/tencent.svg",
    env: "HUNYUAN_SECRET_KEY"
  },
  {
    name: "Baidu ERNIE Bot",
    desc: "Wenxin Yiyan platform APIs powering large-scale natural language tasks.",
    url: "https://console.bce.baidu.com/qianfan/",
    svg: "../assets/all SVGs/ernie.svg",
    env: "ERNIE_API_KEY"
  },
  {
    name: "Clarifai",
    desc: "Full-lifecycle computer vision, NLP, and custom AI model deployment platform.",
    url: "https://portal.clarifai.com/settings/authentication",
    svg: "../assets/all SVGs/clarifai.svg",
    env: "CLARIFAI_PAT"
  },
  {
    name: "Roboflow API",
    desc: "Computer vision platform for training, deploying, and running custom object detection.",
    url: "https://app.roboflow.com/settings/tokens",
    svg: "../assets/all SVGs/roboflow.svg",
    env: "ROBOFLOW_API_KEY"
  },
  {
    name: "MonsterAPI",
    desc: "One-click deployment and low-cost fine-tuning REST endpoints for open-source LLMs.",
    url: "https://monsterapi.ai/user/manage-api-key",
    svg: "../assets/all SVGs/monsterapi.svg",
    env: "MONSTER_API_KEY"
  }
];