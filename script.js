const welcomeBanner = document.getElementById("welcomeBanner");
const countdownEl = document.getElementById("countdown");
const stayBtn = document.getElementById("stayBtn");

const intro = document.getElementById("intro");
const maskLayer = document.getElementById("maskLayer");
const introText = document.getElementById("introText");
const revealBtn = document.getElementById("revealBtn");
const revealSection = document.getElementById("revealSection");

let idleTimeout, countdownInterval, redirectTimeout;
let countdownSeconds = 5;
const tabs = ["corporate", "college"];

// Animate in the banner
setTimeout(() => {
  welcomeBanner.classList.remove("right-full");
  welcomeBanner.classList.add("left-1/2");
}, 200);

// Start countdown
function startCountdown() {
  countdownEl.textContent = countdownSeconds;
  countdownInterval = setInterval(() => {
    countdownSeconds--;
    countdownEl.textContent = countdownSeconds;

    if (countdownSeconds <= 0) {
      clearInterval(countdownInterval);
    }
  }, 1000);

  redirectTimeout = setTimeout(() => {
    if (!intro.classList.contains("hidden")) {
      revealBtn.click(); // Simulate reveal click
    }
  }, countdownSeconds * 1000);
}

startCountdown();

// Handle "Stay" click
stayBtn.addEventListener("click", () => {
  clearInterval(countdownInterval);
  clearTimeout(redirectTimeout);
  countdownSeconds += 10;
  stayBtn.textContent = "⏳";
  stayBtn.disabled = true;

  // Restart countdown
  setTimeout(() => {
    stayBtn.textContent = "Stay";
    stayBtn.disabled = false;
  }, 8000);

  startCountdown();
});

// button click
revealBtn.addEventListener("click", () => {
  localStorage.setItem("activeSection", "home");
  intro.classList.add("hidden");
  revealSection.classList.remove("hidden");
  showSection(null, "home");

  document
    .querySelector("#revealSection > header > div > button")
    .classList.add("active");
});

// home cards
const grid = document.getElementById("achievementGrid");
const cards = grid.querySelectorAll(".group");

cards.forEach((card) => {
  const toggleBtn = card.querySelector(".toggle-btn");
  const desc = card.querySelector(".description");

  toggleBtn.addEventListener("click", () => {
    const isExpanded = desc.classList.contains("expanded");

    // Close all other cards
    cards.forEach((c) => {
      c.querySelector(".description").classList.remove("expanded");
      c.querySelector(".toggle-btn").textContent = "+";
    });

    // Toggle this one
    if (!isExpanded) {
      desc.classList.add("expanded");
      toggleBtn.textContent = "−";
    }
  });
});

// Mouse move spotlight logic
intro.addEventListener("mousemove", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  const radius = 100;
  const mask = `radial-gradient(circle at ${x}px ${y}px, black 0, black ${radius}px, transparent ${
    radius + 20
  }px)`;

  maskLayer.style.webkitMaskImage = mask;
  maskLayer.style.maskImage = mask;
  maskLayer.classList.add("masked");

  // Reset idle timeout
  clearTimeout(idleTimeout);
  idleTimeout = setTimeout(() => {
    maskLayer.classList.remove("masked");
  }, 1000);
});

// On mouse leave
intro.addEventListener("mouseleave", () => {
  // maskLayer.classList.remove("masked");
});

function goHome(e) {
  localStorage.setItem("activeSection", "home");
  welcomeBanner.style.display = "none";
  intro.classList.remove("hidden");
  revealSection.classList.add("hidden");
  document
    .querySelectorAll(".menu-item")
    .forEach((btn) => btn.classList.remove("active"));
  e.target.classList.add("active");
}

function showSection(e, id) {
  localStorage.setItem("activeSection", id);
  intro.classList.add("hidden");
  revealSection.classList.remove("hidden");

  // Hide all inner sections
  document.querySelectorAll("#revealSection > div").forEach((div) => {
    div.classList.add("hidden");
  });

  // Show selected section
  const targetSection = document.getElementById(id);
  targetSection.classList.remove("hidden");

  // Update menu active state
  document.querySelectorAll(".menu-item").forEach((btn) => {
    btn.classList.remove("active");
  });
  if (e) e.target.classList.add("active");
}

function toggleTab(e, type) {
  document
    .querySelectorAll(".tab-btn")
    .forEach((btn) => btn.classList.remove("active"));
  e.target.classList.add("active");
  localStorage.setItem("expTab", type);

  document
    .getElementById("corporate")
    .classList.toggle("hidden", type !== "corporate");
  document
    .getElementById("college")
    .classList.toggle("hidden", type !== "college");

  document
    .getElementById("extra-corporate")
    .classList.toggle("hidden", type !== "corporate");
  document
    .getElementById("extra-college")
    .classList.toggle("hidden", type !== "college");
}

const titles = [
  "👨‍💻 Rahul Gupta | Full Stack Dev",
  "MERN • Laravel • WordPress",
  "📁 Projects | 🔧 Experience | 📬 Contact",
];
let index = 0;
setInterval(() => {
  if (!revealSection.classList.contains("hidden")) {
    document.title = titles[index++ % titles.length];
  }
}, 5000);

window.onload = () => {
  const active = localStorage.getItem("activeSection");

  if (active && active !== "home") {
    intro.classList.add("hidden");
    revealSection.classList.remove("hidden");
    document.getElementById(active).classList.remove("hidden");
    document.querySelectorAll(".menu-item").forEach((btn) => {
      btn.classList.remove("active");
      if (btn.textContent.toLowerCase().includes(active))
        btn.classList.add("active");
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const lastTab = localStorage.getItem("expTab") || "corporate";

  // toggleTab(
  //   { target: document.querySelector(`[onclick*='${lastTab}']`) },
  //   lastTab
  // );

  document.querySelector(`.tab-btn[onclick*="${lastTab}"]`)?.click();

  const paragraphs = document.querySelectorAll("#project .grid p");

  paragraphs.forEach((p) => {
    const originalText = p.textContent.trim();
    const length = 120;

    if (originalText.length > length) {
      p.textContent = originalText.slice(0, length) + "...";
    }
  });
});

document.querySelectorAll(".dynamic-placeholder").forEach((field) => {
  const placeholders = JSON.parse(field.dataset.placeholder || "[]");
  let i = 0;
  setInterval(() => {
    if (!field.value) {
      field.placeholder = placeholders[i % placeholders.length];
      i++;
    }
  }, 5000);
});

const contactForm = document.getElementById("contactForm");
const status = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const mobile = contactForm.mobile.value.trim();
  const message = contactForm.message.value.trim();

  // Regular expressions
  const emailPattern = /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i;

  // Client-side validation
  if (!name || name.length < 3) {
    showStatus("❌ Please enter a valid name.", "red");
    return;
  }

  if (!emailPattern.test(email)) {
    showStatus("❌ Please enter a valid email address.", "red");
    return;
  }

  if (mobile.length < 5) {
    showStatus("❌ Enter a Valid Mobile Number.", "red");
    return;
  }

  if (!message || message.length < 5) {
    showStatus("❌ Write something meaningful", "red");
    return;
  }

  // Prepare and submit the form
  const formData = new FormData(contactForm);

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        showStatus(
          "🎉 Your message was sent successfully! Rahul Gupta will contact you shortly.",
          "#34a853"
        );
        contactForm.reset();
        // Redirect after 3 seconds
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          status.innerHTML = "";
        }, 4000);
      } else {
        showStatus("❌ Message failed to send. Please try again.", "red");
      }
    })
    .catch(() => {
      showStatus("⚠️ Network error. Please try again later.", "orange");
    });
});

function showStatus(message, color) {
  status.innerText = message;
  status.style.color = color;
}

function scrollToProject() {
  // Show the Project section
  showSection(null, "project");

  // Scroll smoothly to it
  const projectSection = document.getElementById("project");
  if (projectSection) {
    projectSection.scrollIntoView({ behavior: "smooth" });
  }

  // Set active menu item (optional)
  document
    .querySelectorAll(".menu-item")
    .forEach((btn) => btn.classList.remove("active"));
  document
    .querySelector(".menu-item[onclick*='project']")
    .classList.add("active");
}

// project
const projectTabs = document.querySelectorAll(".project-tab-btn");
const projectCards = document.querySelectorAll(".project-card");

projectTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active class
    projectTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const selectedCategory = tab.getAttribute("data-category");

    projectCards.forEach((card) => {
      const categories = card.getAttribute("data-category").split(" ");
      if (
        selectedCategory === "all" ||
        categories.includes(selectedCategory)
      ) {
        // card.classList.remove("hidden");
        card.style.display = "block";
      } else {
        // card.classList.add("hidden");
        card.style.display = "none";
      }
    });
  });
});

  // Disable right-click
  document.addEventListener("contextmenu", (e) => e.preventDefault());

  // Disable F12, Ctrl+Shift+I, Ctrl+U
  document.onkeydown = function (e) {
    if (
      e.key === "F12" ||
      (e.ctrlKey && e.shiftKey && ["I", "C", "J"].includes(e.key)) ||
      (e.ctrlKey && e.key === "U")
    ) {
      return false;
    }
  };
  

  document.querySelectorAll('.image-slider-container').forEach((slider, idx) => {
    const images = JSON.parse(slider.dataset.images || '[]');
    let current = 0;

    // Create wrapper
    const wrapper = document.createElement('div');
    wrapper.className = 'relative';

    // Create all images
    images.forEach((src, i) => {
      const img = document.createElement('img');
      img.src = src;
      img.loading = 'lazy';
      img.className = `w-full h-[180px] object-cover rounded transition-all duration-300 top-0 left-0 ${i === 0 ? 'block' : 'hidden'}`;
      wrapper.appendChild(img);
    });

    // Create left/right buttons
    const prevBtn = document.createElement('button');
    prevBtn.innerText = '‹';
    prevBtn.className = 'absolute left-1 top-1/2 -translate-y-1/2 text-white bg-black/30 px-2 py-1 rounded hover:bg-black/50 z-10';
    prevBtn.onclick = () => showSlide(current === 0 ? images.length - 1 : current - 1);

    const nextBtn = document.createElement('button');
    nextBtn.innerText = '›';
    nextBtn.className = 'absolute right-1 top-1/2 -translate-y-1/2 text-white bg-black/30 px-2 py-1 rounded hover:bg-black/50 z-10';
    nextBtn.onclick = () => showSlide((current + 1) % images.length);

    wrapper.appendChild(prevBtn);
    wrapper.appendChild(nextBtn);

    // Append to DOM
    slider.appendChild(wrapper);

    function showSlide(index) {
      const allImgs = wrapper.querySelectorAll('img');
      allImgs[current].classList.add('hidden');
      allImgs[index].classList.remove('hidden');
      current = index;
    }
  });