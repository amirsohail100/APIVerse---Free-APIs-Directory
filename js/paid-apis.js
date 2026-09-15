const paidApis = [
  { name: "Stripe API", category: "Payments", desc: "Online payment processing suite for internet businesses with webhooks.", key: "sk_test_51Mz9XXK89sL001239988", keyUrl: "https://dashboard.stripe.com/register" },
  { name: "Twilio SMS & Voice", category: "Communication", desc: "Programmable SMS, voice calls, WhatsApp messaging, and verification.", key: "AC310029384910293849102938", keyUrl: "https://www.twilio.com/try-twilio" },
  { name: "Google Maps Platform", category: "Maps", desc: "World-class mapping, routing, geocoding, and places API for enterprise apps.", key: "AIzaSyD9x8c7v6b5n4m3L2k1J0", keyUrl: "https://console.cloud.google.com/google/maps-apis" },
  { name: "Fixer Currency API", category: "Finance", desc: "Foreign exchange rates and currency conversion data with official feeds.", key: "fixer_live_key_993021882", keyUrl: "https://fixer.io/" },
  { name: "SendGrid Email API", category: "Email", desc: "Cloud-based transactional and marketing email delivery infrastructure.", key: "SG.x98y7z6w5v4u3t2s1r0.Q1W2E3R4", keyUrl: "https://signup.sendgrid.com/" },
  { name: "Razorpay Payment API", category: "Payments", desc: "Accept payments, process payouts, and manage billing for global businesses.", key: "rzp_test_1DP5mmOlB5G5ag88", keyUrl: "https://dashboard.razorpay.com/" }
];

function maskKey(key) {
  if(key.length <= 8) return key;
  return key.substring(0, 5) + "••••••••" + key.substring(key.length - 4);
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
    grid.innerHTML = `<p style="text-align:center; grid-column: 1/-1; color: var(--text-muted);">No Paid APIs found matching your search.</p>`;
    return;
  }

  data.forEach((api, index) => {
    grid.innerHTML += `
      <div class="api-card">
        <div>
          <div class="card-header">
            <span class="api-title">${api.name}</span>
            <span class="badge badge-paid">${api.category}</span>
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