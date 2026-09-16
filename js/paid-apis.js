const paidApis = [
  { 
    name: "Stripe API", 
    category: "Payments", 
    desc: "Online payment processing suite for internet businesses with webhooks.", 
    endpoint: "https://api.stripe.com/v1/charges", 
    keyUrl: "https://dashboard.stripe.com/register" 
  },
  { 
    name: "Twilio SMS API", 
    category: "Communication", 
    desc: "Programmable SMS, voice calls, WhatsApp messaging, and verification.", 
    endpoint: "https://api.twilio.com/2010-04-01/Accounts", 
    keyUrl: "https://www.twilio.com/try-twilio" 
  },
  { 
    name: "Google Maps Platform", 
    category: "Maps", 
    desc: "World-class mapping, routing, geocoding, and places API for enterprise apps.", 
    endpoint: "https://maps.googleapis.com/maps/api/geocode/json", 
    keyUrl: "https://console.cloud.google.com/google/maps-apis" 
  },
  { 
    name: "SendGrid Email API", 
    category: "Email", 
    desc: "Cloud-based transactional and marketing email delivery infrastructure.", 
    endpoint: "https://api.sendgrid.com/v3/mail/send", 
    keyUrl: "https://signup.sendgrid.com/" 
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
  showToast(`Copied Base Endpoint! 🔗`);
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
            <span class="badge badge-paid">${api.category}</span>
          </div>
          <p class="api-desc">${api.desc}</p>

          <div class="key-box">
            <div class="key-text-wrapper">
              <span class="endpoint-display">${api.endpoint}</span>
            </div>
            <button class="btn-copy" onclick="copyEndpoint('${api.endpoint}')">📋 Copy Base Endpoint</button>
          </div>
        </div>
        
        <div class="card-footer">
          <a href="${api.keyUrl}" target="_blank" class="btn-action" style="background: linear-gradient(135deg, #f59e0b, #d97706);">Get API Key 🔑</a>
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