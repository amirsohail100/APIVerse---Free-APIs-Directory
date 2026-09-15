const paidApis = [
  { name: "Stripe API", category: "Payments", desc: "Online payment processing suite for internet businesses with developer webhooks.", keyUrl: "https://dashboard.stripe.com/register" },
  { name: "Twilio SMS & Voice", category: "Communication", desc: "Programmable SMS, voice calls, WhatsApp messaging, and verification endpoints.", keyUrl: "https://www.twilio.com/try-twilio" },
  { name: "Google Maps Platform", category: "Maps & Geocoding", desc: "World-class mapping, routing, geocoding, and places API for enterprise apps.", keyUrl: "https://console.cloud.google.com/google/maps-apis" },
  { name: "Fixer Currency API", category: "Finance", desc: "Foreign exchange rates and currency conversion data with official banking feeds.", keyUrl: "https://fixer.io/" },
  { name: "SendGrid Email API", category: "Email", desc: "Cloud-based transactional and marketing email delivery infrastructure.", keyUrl: "https://signup.sendgrid.com/" }
];

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