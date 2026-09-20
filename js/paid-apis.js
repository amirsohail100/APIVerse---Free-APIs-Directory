const PAID_APIS = [
  { name: "Google Maps Platform", category: "Maps", desc: "Maps, geocoding, places aur directions — production-grade location services.", url: "https://mapsplatform.google.com/", pricing: "Pay-as-you-go" },
  { name: "Twilio", category: "Communication", desc: "SMS, voice calls aur WhatsApp messaging apne app me integrate karo.", url: "https://www.twilio.com/en-us/pricing", pricing: "Usage-based" },
  { name: "Stripe", category: "Payments", desc: "Online payments, subscriptions aur invoicing ke liye industry-standard API.", url: "https://stripe.com/pricing", pricing: "Per-transaction" },
  { name: "AWS (Amazon Web Services)", category: "Cloud", desc: "Compute, storage, database — sab kuch cloud pe, hundreds of APIs.", url: "https://aws.amazon.com/pricing/", pricing: "Pay-as-you-go" },
  { name: "SendGrid", category: "Email", desc: "Transactional aur marketing emails bhejne ke liye reliable API.", url: "https://sendgrid.com/en-us/pricing", pricing: "Tiered plans" },
  { name: "Algolia", category: "Search", desc: "Lightning-fast search API apki website ya app ke liye.", url: "https://www.algolia.com/pricing/", pricing: "Usage-based" },
  { name: "Cloudinary", category: "Media", desc: "Image aur video upload, optimization aur delivery at scale.", url: "https://cloudinary.com/pricing", pricing: "Tiered plans" },
  { name: "Bloomberg Market Data", category: "Finance", desc: "Professional-grade real-time financial market data.", url: "https://www.bloomberg.com/professional/product/market-data/", pricing: "Enterprise" },
  { name: "Zoom API", category: "Communication", desc: "Video meetings, webinars apne app me embed karo.", url: "https://developers.zoom.us/pricing/", pricing: "Tiered plans" },
  { name: "Shopify API", category: "E-commerce", desc: "Apna khud ka e-commerce store apps ke through control karo.", url: "https://www.shopify.com/plus", pricing: "Plan-based" },
];


// const paidApis = [
//   { 
//     name: "Stripe API", 
//     category: "Payments", 
//     desc: "Online payment processing suite for internet businesses with webhooks.", 
//     endpoint: "https://api.stripe.com/v1/charges", 
//     keyUrl: "https://dashboard.stripe.com/register" 
//   },
//   { 
//     name: "Twilio SMS API", 
//     category: "Communication", 
//     desc: "Programmable SMS, voice calls, WhatsApp messaging, and verification.", 
//     endpoint: "https://api.twilio.com/2010-04-01/Accounts", 
//     keyUrl: "https://www.twilio.com/try-twilio" 
//   },
//   { 
//     name: "Google Maps Platform", 
//     category: "Maps", 
//     desc: "World-class mapping, routing, geocoding, and places API for enterprise apps.", 
//     endpoint: "https://maps.googleapis.com/maps/api/geocode/json", 
//     keyUrl: "https://console.cloud.google.com/google/maps-apis" 
//   },
//   { 
//     name: "SendGrid Email API", 
//     category: "Email", 
//     desc: "Cloud-based transactional and marketing email delivery infrastructure.", 
//     endpoint: "https://api.sendgrid.com/v3/mail/send", 
//     keyUrl: "https://signup.sendgrid.com/" 
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
//   showToast(`Copied Base Endpoint! 🔗`);
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
//             <span class="badge badge-paid">${api.category}</span>
//           </div>
//           <p class="api-desc">${api.desc}</p>

//           <div class="key-box">
//             <div class="key-text-wrapper">
//               <span class="endpoint-display">${api.endpoint}</span>
//             </div>
//             <button class="btn-copy" onclick="copyEndpoint('${api.endpoint}')">📋 Copy Base Endpoint</button>
//           </div>
//         </div>
        
//         <div class="card-footer">
//           <a href="${api.keyUrl}" target="_blank" class="btn-action" style="background: linear-gradient(135deg, #f59e0b, #d97706);">Get API Key 🔑</a>
//         </div>
//       </div>
//     `;
//   });
// }

// document.getElementById('searchInput').addEventListener('input', (e) => {
//   const query = e.target.value.toLowerCase();
//   const filtered = paidApis.filter(api => 
//     api.name.toLowerCase().includes(query) || 
//     api.category.toLowerCase().includes(query) ||
//     api.desc.toLowerCase().includes(query)
//   );
//   renderAPIs(filtered);
// });

// renderAPIs(paidApis);