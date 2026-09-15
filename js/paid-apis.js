const paidApis = [
  { name: "Stripe API", category: "Payments", desc: "Online payment processing suite for internet businesses with webhooks.", format: "sk_test_51Mz...XyZ123", keyUrl: "https://dashboard.stripe.com/register" },
  { name: "Twilio SMS & Voice", category: "Communication", desc: "Programmable SMS, voice calls, WhatsApp messaging, and verification.", format: "AC3100...2284729104", keyUrl: "https://www.twilio.com/try-twilio" },
  { name: "Google Maps Platform", category: "Maps", desc: "World-class mapping, routing, geocoding, and places API for enterprise apps.", format: "AIzaSyD-xXxXxXxXxXx", keyUrl: "https://console.cloud.google.com/google/maps-apis" },
  { name: "Fixer Currency API", category: "Finance", desc: "Foreign exchange rates and currency conversion data with official feeds.", format: "fixer_live_key_993021", keyUrl: "https://fixer.io/" },
  { name: "SendGrid Email API", category: "Email", desc: "Cloud-based transactional and marketing email delivery infrastructure.", format: "SG.xxxxxxxxxxxxxxxxxx", keyUrl: "https://signup.sendgrid.com/" },
  { name: "Razorpay Payment API", category: "Payments", desc: "Accept payments, process payouts, and manage billing for global businesses.", format: "rzp_test_1DP5mmOlB5G5ag", keyUrl: "https://dashboard.razorpay.com/" },
  { name: "Supabase Database API", category: "Database", desc: "Open-source Firebase alternative with auto-generated Postgres REST APIs.", format: "eyJhbGciOiJIUzI1NiIsInR...", keyUrl: "https://supabase.com/dashboard" },
  { name: "Algolia Search API", category: "Search Engine", desc: "Ultra-fast hosted search engine API for e-commerce and real-time apps.", format: "algolia_admin_key_32chars", keyUrl: "https://www.algolia.com/users/sign_up" }
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

function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  showToast(`Copied Key/Format: ${text}`);
}

function renderAPIs(data) {
  const grid = document.getElementById('apiGrid');
  grid.innerHTML = '';
  
  if (data.length === 0) {
    grid.innerHTML = `<p style="text-align:center; grid-column: 1/-1; color: var(--text-muted);">No Paid APIs found matching your search.</p>`;
    return;
  }

  data.forEach(api => {
    grid.innerHTML += `
      <div class="api-card">
        <div>
          <div class="card-header">
            <span class="api-title">${api.name}</span>
            <span class="badge badge-paid">${api.category}</span>
          </div>
          <p class="api-desc">${api.desc}</p>
          <div class="key-box">
            <span>🔑 ${api.format}</span>
            <button class="btn-copy" onclick="copyToClipboard('${api.format}')">📋 Copy</button>
          </div>
        </div>
        <div class="card-footer">
          <a href="${api.keyUrl}" target="_blank" class="btn-action" style="background: linear-gradient(135deg, #f59e0b, #d97706);">Get Live Key 🔑</a>
        </div>
      </div>
    `;
  });
}

document.getElementById('searchInput').addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  const filtered = paidApis.filter(api => 
    api.name.toLowerCase().includes(query) || 
    api.category.toLowerCase().includes(query) ||
    api.desc.toLowerCase().includes(query)
  );
  renderAPIs(filtered);
});

renderAPIs(paidApis);