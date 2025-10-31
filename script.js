// Existing code remains the same

// Faster Auto-Increasing Counters
let likeCount = 1200;
let userCount = 1000000;
let onlineCount = 500;
let progress = 0;

function updateCounters() {
    likeCount += Math.floor(Math.random() * 10) + 5; // Bigger jumps
    userCount += Math.floor(Math.random() * 20) + 10;
    onlineCount += Math.floor(Math.random() * 5) + 2;
    progress = Math.min(progress + Math.random() * 2, 100); // Progress up to 100%
    
    document.getElementById('likeCount').textContent = likeCount;
    document.getElementById('userCount').textContent = userCount.toLocaleString();
    document.getElementById('onlineCount').textContent = onlineCount;
    document.getElementById('progressFill').style.width = progress + '%';
}

setInterval(updateCounters, 1000); // Update every 1 second

// Floating Particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        particlesContainer.appendChild(particle);
        setTimeout(() => particle.remove(), 6000);
    }
}

window.addEventListener('load', () => {
    createParticles();
    setInterval(createParticles, 5000); // New particles every 5s
});

// Improved Share Button
document.getElementById('shareBtn').addEventListener('click', async () => {
    const url = window.location.href;
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Check out this amazing AI Tools site!',
                text: 'Likes and users are exploding!',
                url: url
            });
        } catch (err) {
            console.log('Share failed:', err);
        }
    } else {
        // Fallback: Copy to clipboard
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copied to clipboard! Share it: ' + url);
        }).catch(() => {
            alert('Share this link: ' + url);
        });
    }
});
// Existing code remains the same

// About Page Particles
if (document.getElementById('aboutParticles')) {
    const particlesContainer = document.getElementById('aboutParticles');
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'about-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        particlesContainer.appendChild(particle);
        setTimeout(() => particle.remove(), 6000);
    }
}
// Existing code remains the same

// Contact Page Particles
if (document.getElementById('contactParticles')) {
    const particlesContainer = document.getElementById('contactParticles');
    for (let i = 0; i < 25; i++) {
        const particle = document.createElement('div');
        particle.className = 'contact-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        particlesContainer.appendChild(particle);
        setTimeout(() => particle.remove(), 6000);
    }
}

// Enhanced Form Validation
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            // Success Animation
            const btn = document.querySelector('.submit-btn');
            btn.innerHTML = '<i class="fas fa-check"></i> Sent!';
            btn.style.background = '#4caf50';
            setTimeout(() => {
                alert('Thank you for your message! We\'ll get back to you soon.');
                contactForm.reset();
                btn.innerHTML = 'Send Message <i class="fas fa-send"></i>';
                btn.style.background = 'linear-gradient(45deg, #ff5722, #ff9800)';
            }, 2000);
        } else {
            alert('Please fill in all fields.');
        }
    });
}
// Existing code remains the same

// Privacy Page Particles
if (document.getElementById('privacyParticles')) {
    const particlesContainer = document.getElementById('privacyParticles');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'privacy-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        particlesContainer.appendChild(particle);
        setTimeout(() => particle.remove(), 6000);
    }
}

// FAQ Toggle
document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.classList.toggle('show');
        const icon = button.querySelector('i');
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
    });
});

// Back to Top
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
// 🔍 Auto SEO Meta Setup
const seoData = {
  "index.html": {
    title: "Best Free AI Tools 2025 | ChatGPT, Midjourney, DALL·E 3 & More",
    desc: "Discover 1000+ free and trending AI tools for writing, image generation, coding, and productivity.",
  },
  "about.html": {
    title: "About Us | My Best Website – Empowering AI Enthusiasts",
    desc: "Learn about our mission to bring you the most advanced and useful AI tools from around the world.",
  },
  "tools.html": {
    title: "AI Tools Collection | Explore Free ChatGPT, Claude & Midjourney Tools",
    desc: "Browse our categorized library of top-rated AI tools for creators, coders, and designers.",
  },
  "contact.html": {
    title: "Contact Us | Get in Touch with My Best Website",
    desc: "We’re here to help! Reach out to us with questions, collaborations, or support.",
  },
  "privacy.html": {
    title: "Privacy Policy | My Best Website",
    desc: "Your data privacy matters. Learn how we collect, use, and protect your personal information.",
  }
};

const currentPage = window.location.pathname.split("/").pop();
if (seoData[currentPage]) {
  document.title = seoData[currentPage].title;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", seoData[currentPage].desc);
}
