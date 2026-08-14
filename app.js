/* ==========================================================================
   RAW FITNESS GYM - INTERACTIVE JAVASCRIPT
   Handles dynamic Kolkata time, live occupancy, 15-service modals, 
   trainer profile cards & modals, carousels, and bookings.
   ========================================================================== */

// 15 Detailed Gym Services Data (Zumba removed per user request)
const servicesData = [
  {
    id: "adult-sports",
    category: "sports",
    title: "Adult Sports",
    icon: "bi-trophy-fill",
    summary: "Competitive and recreational sports programs tailored for adult athletes.",
    description: "Engage in adult sports training including basketball conditioning, athletic endurance, agility drills, and strength building for competitive edge or recreational fitness.",
    schedule: "Daily: 6:00 AM - 10:00 PM"
  },
  {
    id: "aerobics",
    category: "cardio",
    title: "Aerobics",
    icon: "bi-activity",
    summary: "Rhythmic cardiovascular workouts designed to burn calories and boost stamina.",
    description: "High-energy aerobic sessions choreographed with motivating beats. Great for burning fat, improving heart health, and maintaining high daily energy levels.",
    schedule: "Mon/Wed/Fri: 7:00 AM & 6:00 PM"
  },
  {
    id: "crossfit",
    category: "strength",
    title: "CrossFit",
    icon: "bi-lightning-charge-fill",
    summary: "High-intensity functional movements designed to build raw strength and power.",
    description: "Our multi-floor CrossFit zone features bumper plates, kettlebells, battle ropes, and pull-up rigs led by certified strength coaches.",
    schedule: "Tue/Thu/Sat: 6:30 AM & 7:00 PM"
  },
  {
    id: "cycling",
    category: "cardio",
    title: "Cycling & Spin",
    icon: "bi-bicycle",
    summary: "Indoor spin classes with immersive music, resistance control, and max AC flow.",
    description: "Imported indoor spin bikes with heart-rate tracking in our air-conditioned cycling studio. Experience high-calorie burn with low joint impact.",
    schedule: "Daily: 8:00 AM & 6:30 PM"
  },
  {
    id: "dance-fitness",
    category: "dance",
    title: "Dance Fitness Classes",
    icon: "bi-music-note-beamed",
    summary: "Fun, full-body dance routines combining cardio with upbeat choreography.",
    description: "Dance your way to fitness with energetic dance workouts blending hip-hop, Bollywood beats, and cardio training in a high-vibe atmosphere.",
    schedule: "Tue/Thu: 5:30 PM & Sat: 10:00 AM"
  },
  {
    id: "hiit",
    category: "cardio",
    title: "HIIT (High Intensity)",
    icon: "bi-fire",
    summary: "Short burst, maximum effort workouts engineered for rapid fat loss.",
    description: "High-Intensity Interval Training (HIIT) combining kettlebells, plyometrics, and cardio sprints to keep your metabolism elevated for up to 24 hours.",
    schedule: "Daily Batches: Morning & Evening"
  },
  {
    id: "kickboxing",
    category: "combat",
    title: "Kickboxing",
    icon: "bi-hand-index-thumb-fill",
    summary: "Striking drills, pad work, and core conditioning for total body power.",
    description: "Learn proper kickboxing technique, strike heavy bags, and incinerate calories while developing self-defense skills and core stability.",
    schedule: "Mon/Wed/Fri: 8:00 PM"
  },
  {
    id: "nutrition",
    category: "wellness",
    title: "Nutrition Consulting",
    icon: "bi-heart-pulse-fill",
    summary: "Customized diet plans tailored to your muscle gain or weight loss goals.",
    description: "One-on-one nutrition guidance by experienced dietitians analyzing your macro balance, daily metabolic rate, and Kolkata lifestyle needs.",
    schedule: "By Appointment"
  },
  {
    id: "personal-training",
    category: "strength",
    title: "Personal Training",
    icon: "bi-person-badge-fill",
    summary: "1-on-1 dedicated coaching with custom routine tracking and body metrics.",
    description: "Accelerate results with dedicated 1-on-1 guidance from Raw Fitness certified trainers. Includes posture analysis, progressive overload, and form correction.",
    schedule: "Flexible Scheduling"
  },
  {
    id: "private-lessons",
    category: "wellness",
    title: "Private Lessons",
    icon: "bi-star-fill",
    summary: "Exclusive private coaching sessions in specialized sports or fitness disciplines.",
    description: "Private customized training sessions tailored specifically to your body type, physical recovery requirements, or specific athletic milestones.",
    schedule: "On Request"
  },
  {
    id: "sauna",
    category: "recovery",
    title: "Sauna",
    icon: "bi-thermometer-sun",
    summary: "Post-workout heat therapy for deep muscle relaxation and detox.",
    description: "Unwind in our clean, temperature-controlled sauna. Helps flush toxins, relieve muscle stiffness after heavy lifting, and boost circulation.",
    schedule: "Daily: 7:00 AM - 10:30 PM"
  },
  {
    id: "spa-services",
    category: "recovery",
    title: "Spa Services",
    icon: "bi-sparkles",
    summary: "Rejuvenating sports massage and post-training muscle recovery therapy.",
    description: "Dedicated spa therapy focused on tissue recovery, relieving muscle tension, and improving joint flexibility after rigorous workout sessions.",
    schedule: "Mon - Sat: 10:00 AM - 8:00 PM"
  },
  {
    id: "weight-training",
    category: "strength",
    title: "Weight Training",
    icon: "bi-badge-ad-fill",
    summary: "Imported plate-loaded machines, dumbbell racks, and heavy lifting platforms.",
    description: "Spread over multiple carpeted floors with Max AC. Fully equipped with imported biomechanical strength machines, cable towers, and free weights.",
    schedule: "Daily: Open 6 AM - 11 PM"
  },
  {
    id: "yoga",
    category: "wellness",
    title: "Yoga",
    icon: "bi-sun-fill",
    summary: "Traditional Hatha and Vinyasa Yoga to improve flexibility and mental clarity.",
    description: "Peaceful guided yoga sessions designed to enhance mobility, strengthen core posture, reduce stress, and improve breath control.",
    schedule: "Daily Morning: 6:00 AM & 7:30 AM"
  },
  {
    id: "youth-sports",
    category: "sports",
    title: "Youth Sports",
    icon: "bi-person-arms-up",
    summary: "Fun, structured fitness and conditioning programs for teenagers & kids.",
    description: "Building healthy athletic habits early. Safe physical development, speed-agility training, and motor skill enhancement under certified coach supervision.",
    schedule: "Tue/Thu/Sat: 4:00 PM"
  }
];

// Detailed Trainer Profiles Data (6 Certified Coaches)
const trainersData = [
  {
    id: "imran",
    name: "Imran",
    role: "Head Strength & Bodybuilding Coach",
    certifications: "CSCS, IFBB Certified, Master Strength Coach",
    experience: "10+ Years",
    transformations: "220+ Members Trained",
    rating: "5.0★",
    tags: ["Hypertrophy", "Powerlifting", "Biomechanical Alignment", "Free Weights"],
    bio: "Imran is a master of progressive overload and imported strength machine mechanics. He has transformed over 220 members at Raw Fitness, focusing on zero-injury lifting form and maximum muscle development.",
    schedule: "Mon - Sat: 6:00 AM - 1:00 PM & 5:00 PM - 10:00 PM"
  },
  {
    id: "sahidul",
    name: "Sahidul",
    role: "Senior Functional & Cardio Specialist",
    certifications: "Certified Personal Trainer, HIIT Master Coach",
    experience: "8+ Years",
    transformations: "180+ Fat Loss Successes",
    rating: "4.9★",
    tags: ["HIIT Sprints", "Fat Loss", "Endurance", "Cardio Arena"],
    bio: "Sahidul leads high-energy cardio conditioning and fat-burn workouts across our imported treadmill arena and spin studio.",
    schedule: "Daily: 7:00 AM & 6:00 PM"
  },
  {
    id: "aziz",
    name: "Aziz",
    role: "CrossFit & Rig Drill Specialist",
    certifications: "CrossFit Level 2 Trainer, Athletic Conditioning Lead",
    experience: "9+ Years",
    transformations: "195+ Athletic Transformations",
    rating: "5.0★",
    tags: ["CrossFit Rigs", "Kettlebells", "Battle Ropes", "Agility"],
    bio: "Aziz specializes in high-intensity functional CrossFit workouts, battle rope circuits, and stamina conditioning for peak power.",
    schedule: "Tue / Thu / Sat: 6:30 AM & 7:00 PM"
  },
  {
    id: "nasir",
    name: "Nasir",
    role: "Heavy Resistance & Muscle Sculpting Coach",
    certifications: "K1 Bodybuilding Coach, Biomechanics Specialist",
    experience: "7+ Years",
    transformations: "160+ Body Transformations",
    rating: "4.9★",
    tags: ["Machine Biomechanics", "Muscle Sculpting", "Posture Correction", "Leg Press"],
    bio: "Nasir focuses on targeted machine biomechanics, muscle hypertrophy, and customized routine tracking for beginners and advanced lifters alike.",
    schedule: "Mon - Sat: 6:00 AM - 2:00 PM & 4:00 PM - 10:00 PM"
  },
  {
    id: "piush",
    name: "Piush",
    role: "Core Stability & Mobility Specialist",
    certifications: "Functional Movement Coach, Mobility Master",
    experience: "6+ Years",
    transformations: "150+ Clients Coached",
    rating: "4.9★",
    tags: ["Core Stability", "Joint Mobility", "Flexibility", "Aerobics"],
    bio: "Piush helps members build core stability, joint longevity, and flexibility while guiding energetic aerobic and functional conditioning routines.",
    schedule: "Mon / Wed / Fri: 7:30 AM & 5:30 PM"
  },
  {
    id: "angad",
    name: "Angad",
    role: "Personal Fitness & Youth Sports Coach",
    certifications: "Certified Youth & Adult Sports Lead, ACE Personal Trainer",
    experience: "8+ Years",
    transformations: "175+ Members Coached",
    rating: "5.0★",
    tags: ["Personal Training", "Youth Sports", "Speed & Agility", "Kickboxing"],
    bio: "Angad leads 1-on-1 personal coaching, youth sports agility, and striking kickboxing drills for overall athletic power and self-defense.",
    schedule: "Daily: By Appointment"
  }
];

// Testimonials Data
const testimonialsData = [
  {
    quote: "Joining Raw Fitness was the best decision ever made for my health. The trainers are incredibly supportive, and the AC carpet area is unmatched! Lost 20 lbs with confidence.",
    author: "Rahul Chakraborty",
    role: "Regular Member (2+ Years)",
    stars: 5
  },
  {
    quote: "Imported machines + experienced trainers. Well maintained, max AC, and super eco-friendly surroundings that give extra energy during heavy lifts.",
    author: "Ananya Sen",
    role: "CrossFit & Strength Member",
    stars: 5
  },
  {
    quote: "The main thing for me is the good atmosphere ❤️ High energy, professional staff, clean sauna, and great community spirit!",
    author: "Subhabrata Roy",
    role: "Personal Training Client",
    stars: 5
  },
  {
    quote: "Best gym in Dum Dum! Multi-floor setup with affordable budget-friendly packages. The 15+ class variety is incredible.",
    author: "Pooja Banerjee",
    role: "Yoga & Aerobics Member",
    stars: 5
  }
];

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initLiveKolkataStatus();
  initPopularTimes();
  renderServices(servicesData);
  renderTrainers(trainersData);
  initServicesFilter();
  initFacilityTabs();
  initTestimonialsCarousel();
  initBookingModals();
  initMobileDrawer();
});

/* Header Scroll Effect */
function initHeader() {
  const header = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

/* Kolkata Dynamic Time & Business Hours Status */
function initLiveKolkataStatus() {
  const badgeEl = document.getElementById("live-open-status");
  if (!badgeEl) return;

  function updateStatus() {
    const now = new Date();
    const utcMs = now.getTime() + (now.getTimezoneOffset() * 60000);
    const kolkataMs = utcMs + (5.5 * 3600000);
    const kolkataTime = new Date(kolkataMs);

    const hours = kolkataTime.getHours();
    const minutes = kolkataTime.getMinutes();

    const isOpen = hours >= 6 && hours < 23;

    if (isOpen) {
      const closeTimeLeft = 23 - hours;
      let label = "Open Now • Closes 11 PM";
      if (closeTimeLeft <= 1) {
        label = `Closing Soon (${60 - minutes} mins remaining)`;
      }
      badgeEl.className = "live-status-badge open";
      badgeEl.innerHTML = `<span class="pulse-dot green"></span> ${label}`;
    } else {
      badgeEl.className = "live-status-badge closed";
      badgeEl.innerHTML = `<span class="pulse-dot red"></span> Closed Now • Opens 6 AM`;
    }
  }

  updateStatus();
  setInterval(updateStatus, 60000);
}

/* Popular Times & Occupancy Bars */
function initPopularTimes() {
  const barsContainer = document.getElementById("popular-times-bars");
  if (!barsContainer) return;

  const timeSlots = [
    { label: "6 AM", load: 70 },
    { label: "8 AM", load: 95 },
    { label: "10 AM", load: 40 },
    { label: "12 PM", load: 25 },
    { label: "3 PM", load: 35 },
    { label: "5 PM", load: 85 },
    { label: "7 PM", load: 100 },
    { label: "9 PM", load: 60 },
    { label: "10 PM", load: 30 }
  ];

  const now = new Date();
  const utcMs = now.getTime() + (now.getTimezoneOffset() * 60000);
  const kolkataTime = new Date(utcMs + (5.5 * 3600000));
  const currentHour = kolkataTime.getHours();

  barsContainer.innerHTML = timeSlots.map((slot) => {
    let slotHour = 6;
    if (slot.label.includes("AM")) slotHour = parseInt(slot.label);
    if (slot.label.includes("PM")) {
      const val = parseInt(slot.label);
      slotHour = val === 12 ? 12 : val + 12;
    }

    const isActive = Math.abs(currentHour - slotHour) <= 1;
    return `
      <div class="bar-col">
        <div class="bar-fill ${isActive ? 'active' : ''}" style="height: ${slot.load}%;"></div>
        <span class="bar-time">${slot.label}</span>
      </div>
    `;
  }).join('');
}

/* Render Services Cards */
function renderServices(data) {
  const container = document.getElementById("services-grid-container");
  if (!container) return;

  container.innerHTML = data.map(service => `
    <div class="service-card" onclick="openServiceModal('${service.id}')">
      <div class="plus-overlay-btn" title="View details"><i class="bi bi-plus-lg"></i></div>
      <div class="service-icon-wrapper" style="width:48px; height:48px; background:#f4f4f5; border:1px solid #e4e4e7; border-radius:12px; display:flex; align-items:center; justify-content:center; color:#000; font-size:1.4rem; margin-bottom:16px;">
        <i class="bi ${service.icon}"></i>
      </div>
      <h3>${service.title}</h3>
      <p>${service.summary}</p>
      <div class="service-card-footer">
        <span>Explore Program</span>
        <span class="arrow">→</span>
      </div>
    </div>
  `).join('');
}

/* Render Rich Trainer Profile Cards */
function renderTrainers(data) {
  const container = document.getElementById("trainers-grid-container");
  if (!container) return;

  container.innerHTML = data.map(trainer => `
    <div class="trainer-card-profile">
      <div class="trainer-img-wrapper">
        <div class="img-placeholder">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>
          <p>${trainer.name}</p>
          <span>[ Trainer Photo Frame ]</span>
        </div>
        <div class="trainer-badge-tag">${trainer.experience} Exp</div>
      </div>
      
      <div class="trainer-profile-body">
        <div class="trainer-role-title">${trainer.role}</div>
        <h3>${trainer.name}</h3>
        <div class="trainer-cert-row"><i class="bi bi-patch-check-fill"></i> ${trainer.certifications}</div>
        
        <div class="trainer-tags-wrapper">
          ${trainer.tags.map(tag => `<span class="trainer-tag">${tag}</span>`).join('')}
        </div>

        <div class="trainer-stats-row">
          <div><strong>${trainer.transformations}</strong></div>
          <div><span style="color:#f59e0b;">★ ${trainer.rating}</span> Member Rating</div>
        </div>

        <div class="trainer-actions-stacked">
          <button onclick="openTrainerModal('${trainer.id}')" class="btn btn-outline-light trainer-btn-bio">View Bio</button>
          <button onclick="openBookingModal('1-on-1 Session with ${trainer.name}')" class="btn btn-white trainer-btn-book">Book Session</button>
        </div>
      </div>
    </div>
  `).join('');
}

/* Trainer Profile Modal */
window.openTrainerModal = function(trainerId) {
  const trainer = trainersData.find(t => t.id === trainerId);
  if (!trainer) return;

  const modal = document.getElementById("trainer-profile-modal");
  const body = document.getElementById("modal-trainer-body");

  body.innerHTML = `
    <div style="display:flex; align-items:center; gap:16px; margin-bottom:18px;">
      <div style="width:54px; height:54px; background:#000; color:#fff; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:900; font-size:1.4rem;">
        ${trainer.name.charAt(0)}
      </div>
      <div>
        <h2 style="font-size:1.8rem; margin:0; line-height:1;">${trainer.name}</h2>
        <span style="color:#71717a; font-size:0.85rem; font-weight:700; text-transform:uppercase;">${trainer.role}</span>
      </div>
    </div>

    <div style="background:#f4f4f5; border:1px solid #e4e4e7; padding:16px; border-radius:14px; margin-bottom:20px; font-size:0.9rem;">
      <div style="margin-bottom:6px;"><strong>Certifications:</strong> ${trainer.certifications}</div>
      <div style="margin-bottom:6px;"><strong>Experience:</strong> ${trainer.experience} coaching in Dum Dum</div>
      <div><strong>Availability:</strong> <span style="color:#000; font-weight:600;">${trainer.schedule}</span></div>
    </div>

    <p style="color:#52525b; font-size:1rem; margin-bottom:24px; line-height:1.6;">${trainer.bio}</p>

    <div style="display:flex; gap:12px;">
      <button class="btn btn-secondary" onclick="closeTrainerModal(); openBookingModal('Session with ${trainer.name}')" style="flex:1;">Book 1-on-1 Training</button>
      <a href="tel:+917278976671" class="btn btn-outline-dark"><i class="bi bi-telephone-fill"></i> Call Gym</a>
    </div>
  `;

  modal.classList.add("active");
};

window.closeTrainerModal = function() {
  const modal = document.getElementById("trainer-profile-modal");
  if (modal) modal.classList.remove("active");
};

/* Filter Services by Category */
function initServicesFilter() {
  const filterBtns = document.querySelectorAll(".filter-btn");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.dataset.filter;
      applyServiceFilters(category);
    });
  });
}

function applyServiceFilters(category) {
  const filtered = servicesData.filter(item => {
    return category === "all" || item.category === category;
  });

  renderServices(filtered);
}

/* Service Detail Modal Trigger */
window.openServiceModal = function(serviceId) {
  const item = servicesData.find(s => s.id === serviceId);
  if (!item) return;

  const modal = document.getElementById("service-detail-modal");
  const body = document.getElementById("modal-service-body");

  body.innerHTML = `
    <div style="display:flex; align-items:center; gap:16px; margin-bottom:16px;">
      <div style="width:48px; height:48px; background:#000; color:#fff; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:1.4rem;">
        <i class="bi ${item.icon}"></i>
      </div>
      <div>
        <h2 style="font-size:1.8rem; margin:0;">${item.title}</h2>
        <span style="color:#71717a; font-size:0.85rem; font-weight:700; text-transform:uppercase;">Category: ${item.category}</span>
      </div>
    </div>
    <p style="color:#52525b; font-size:1.05rem; margin-bottom:20px; line-height:1.6;">${item.description}</p>
    <div style="background:#f4f4f5; border:1px solid #e4e4e7; padding:16px; border-radius:14px; margin-bottom:24px;">
      <strong style="color:#000; display:block; margin-bottom:4px;">Typical Timings & Batches:</strong>
      <span style="color:#000; font-weight:600;">${item.schedule}</span>
    </div>
    <div style="display:flex; gap:12px;">
      <button class="btn btn-secondary" onclick="closeServiceModal(); openBookingModal('${item.title}')" style="flex:1;">Book Free Trial Session</button>
      <a href="tel:+917278976671" class="btn btn-outline-dark"><i class="bi bi-telephone-fill"></i> Call Gym</a>
    </div>
  `;

  modal.classList.add("active");
};

window.closeServiceModal = function() {
  const modal = document.getElementById("service-detail-modal");
  if (modal) modal.classList.remove("active");
};

/* Facilities Tab Switching */
function initFacilityTabs() {
  const tabs = document.querySelectorAll(".facility-tab");
  const panels = document.querySelectorAll(".facility-panel");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      panels.forEach(p => p.classList.remove("active"));

      tab.classList.add("active");
      const targetId = tab.dataset.target;
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) targetPanel.classList.add("active");
    });
  });
}

/* Testimonials Carousel */
let currentSlide = 0;
function initTestimonialsCarousel() {
  const container = document.getElementById("testimonials-slides");
  if (!container) return;

  container.innerHTML = testimonialsData.map((item, idx) => `
    <div class="testimonial-slide-item" style="display: ${idx === 0 ? 'block' : 'none'}; animation: fadeIn 0.3s ease;">
      <div class="testimonial-avatar-header">
        <div class="testimonial-avatar-img">${item.author.charAt(0)}</div>
        <div>
          <div class="testimonial-author-name">${item.author}</div>
          <span style="font-size:0.75rem; color:#71717a;">${item.role}</span>
        </div>
      </div>
      <p class="testimonial-body-quote">"${item.quote}"</p>
    </div>
  `).join('');

  document.getElementById("prev-test-btn")?.addEventListener("click", () => changeSlide(-1));
  document.getElementById("next-test-btn")?.addEventListener("click", () => changeSlide(1));
}

function changeSlide(direction) {
  const slides = document.querySelectorAll(".testimonial-slide-item");
  if (!slides.length) return;

  slides[currentSlide].style.display = "none";
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";
}

/* Free Trial / Inquiry Modal */
window.openBookingModal = function(serviceName = "Free Trial Pass") {
  const modal = document.getElementById("booking-modal");
  const serviceInput = document.getElementById("booking-service-name");

  if (serviceInput) serviceInput.value = serviceName;
  if (modal) modal.classList.add("active");
};

window.closeBookingModal = function() {
  const modal = document.getElementById("booking-modal");
  if (modal) modal.classList.remove("active");
};

function initBookingModals() {
  const form = document.getElementById("booking-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      
      const name = document.getElementById("book-name").value.trim();
      const phone = document.getElementById("book-phone").value.trim();
      const slot = document.getElementById("book-pref").value;
      const service = document.getElementById("booking-service-name").value;

      let slotLabel = "Morning (6 AM - 11 AM)";
      if (slot === "afternoon") slotLabel = "Afternoon (11 AM - 4 PM)";
      if (slot === "evening") slotLabel = "Evening (4 PM - 11 PM)";

      const message = `🏋️ *NEW RAW FITNESS GYM INQUIRY*%0A%0A` +
                      `👤 *Name:* ${encodeURIComponent(name)}%0A` +
                      `📞 *Phone:* ${encodeURIComponent(phone)}%0A` +
                      `⏰ *Preferred Slot:* ${encodeURIComponent(slotLabel)}`;

      const whatsappUrl = `https://wa.me/917278976671?text=${message}`;

      const btn = form.querySelector("button[type='submit']");
      btn.innerText = "Opening WhatsApp...";

      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        btn.innerText = "Submit Inquiry";
        closeBookingModal();
        form.reset();
      }, 400);
    });
  }
}

/* Mobile Nav Drawer Toggle */
function initMobileDrawer() {
  const toggleBtn = document.getElementById("nav-toggle");
  const closeBtn = document.getElementById("close-nav");
  const drawer = document.getElementById("mobile-drawer");
  const overlay = document.getElementById("drawer-overlay");

  function openDrawer() {
    drawer.classList.add("active");
    overlay.classList.add("active");
  }

  function closeDrawer() {
    drawer.classList.remove("active");
    overlay.classList.remove("active");
  }

  if (toggleBtn) toggleBtn.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (overlay) overlay.addEventListener("click", closeDrawer);

  document.querySelectorAll(".mobile-nav-links a").forEach(link => {
    link.addEventListener("click", closeDrawer);
  });
}
