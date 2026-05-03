// Atelier De Huiskamer - Main JavaScript

// ===== MOBILE MENU TOGGLE =====
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  
  // Close menu when clicking a link
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// ===== ACTIVE NAVIGATION LINK =====
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(item => {
  const href = item.getAttribute('href');
  if (href === currentPage) {
    item.classList.add('active');
  }
});

// ===== LIGHTBOX FUNCTIONALITY =====
class Lightbox {
  constructor() {
    this.currentIndex = 0;
    this.images = [];
    this.lightboxElement = null;
    this.init();
  }
  
  init() {
    // Create lightbox HTML
    this.createLightbox();
    
    // Find all images with lightbox class
    const lightboxImages = document.querySelectorAll('.lightbox-trigger');
    
    lightboxImages.forEach((img, index) => {
      this.images.push(img.src);
      img.addEventListener('click', () => {
        this.open(index);
      });
      img.style.cursor = 'pointer';
    });
  }
  
  createLightbox() {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.id = 'lightbox';
    
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <button class="lightbox-close" id="lightbox-close">&times;</button>
        <img src="" alt="" class="lightbox-image" id="lightbox-image">
        <button class="lightbox-nav lightbox-prev" id="lightbox-prev">&lsaquo;</button>
        <button class="lightbox-nav lightbox-next" id="lightbox-next">&rsaquo;</button>
      </div>
    `;
    
    document.body.appendChild(lightbox);
    this.lightboxElement = lightbox;
    
    // Event listeners
    document.getElementById('lightbox-close').addEventListener('click', () => this.close());
    document.getElementById('lightbox-prev').addEventListener('click', () => this.prev());
    document.getElementById('lightbox-next').addEventListener('click', () => this.next());
    
    // Close on background click
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        this.close();
      }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (!this.lightboxElement.classList.contains('active')) return;
      
      if (e.key === 'Escape') this.close();
      if (e.key === 'ArrowLeft') this.prev();
      if (e.key === 'ArrowRight') this.next();
    });
  }
  
  open(index) {
    this.currentIndex = index;
    this.show();
    this.lightboxElement.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  close() {
    this.lightboxElement.classList.remove('active');
    document.body.style.overflow = '';
  }
  
  show() {
    const img = document.getElementById('lightbox-image');
    img.src = this.images[this.currentIndex];
    
    // Show/hide navigation arrows
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');
    
    prevBtn.style.display = this.currentIndex === 0 ? 'none' : 'block';
    nextBtn.style.display = this.currentIndex === this.images.length - 1 ? 'none' : 'block';
  }
  
  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.show();
    }
  }
  
  next() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
      this.show();
    }
  }
}

// Initialize lightbox when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const lightboxImages = document.querySelectorAll('.lightbox-trigger');
  if (lightboxImages.length > 0) {
    new Lightbox();
  }
});

// ===== PASSWORD PROTECTION =====
class PasswordProtection {
  constructor(password, contentId) {
    this.correctPassword = password;
    this.contentId = contentId;
    this.attempts = 0;
    this.maxAttempts = 3;
    this.init();
  }
  
  init() {
    const form = document.getElementById('password-form');
    if (!form) return;
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.checkPassword();
    });
  }
  
  checkPassword() {
    const input = document.getElementById('password-input');
    const error = document.getElementById('password-error');
    const enteredPassword = input.value;
    
    if (enteredPassword === this.correctPassword) {
      this.unlock();
    } else {
      this.attempts++;
      
      if (this.attempts >= this.maxAttempts) {
        error.textContent = 'Te veel pogingen. Probeer later opnieuw.';
        error.classList.add('show');
        input.disabled = true;
        document.querySelector('.btn').disabled = true;
      } else {
        error.textContent = `Onjuist wachtwoord. ${this.maxAttempts - this.attempts} pogingen over.`;
        error.classList.add('show');
        input.value = '';
        input.focus();
      }
    }
  }
  
  unlock() {
    const overlay = document.querySelector('.password-overlay');
    const content = document.getElementById(this.contentId);
    
    if (overlay) overlay.style.display = 'none';
    if (content) {
      content.classList.remove('content-locked');
      content.classList.add('content-unlocked');
    }
    
    // Store unlock status in session
    sessionStorage.setItem(this.contentId + '_unlocked', 'true');
  }
  
  checkSession() {
    const unlocked = sessionStorage.getItem(this.contentId + '_unlocked');
    if (unlocked === 'true') {
      this.unlock();
    }
  }
}

// Initialize password protection when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const passwordForm = document.getElementById('password-form');
  if (passwordForm) {
    const protection = new PasswordProtection('redlight2024', 'protected-content');
    protection.checkSession();
  }
});

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ===== CONTACT FORM HANDLING =====
let selectedEmail = 'dehuiskamerbavegem@outlook.com';
let selectedName = 'Atelier De Huiskamer';

// Handle contact choice buttons
const choiceButtons = document.querySelectorAll('.contact-choice-btn');
choiceButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Remove active class from all buttons
    choiceButtons.forEach(btn => {
      btn.classList.remove('active');
      btn.style.backgroundColor = 'transparent';
      btn.style.color = 'var(--color-text)';
    });
    
    // Add active class to clicked button
    this.classList.add('active');
    this.style.backgroundColor = 'var(--color-text)';
    this.style.color = 'white';
    
    // Update selected email and name
    selectedEmail = this.getAttribute('data-email');
    selectedName = this.getAttribute('data-name');
  });
});

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formMessage = document.getElementById('form-message');
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Create mailto link with selected email
    const subject = encodeURIComponent(`Contact van ${name} voor ${selectedName}`);
    const body = encodeURIComponent(`Naam: ${name}\nEmail: ${email}\n\nBericht:\n${message}`);
    const mailtoLink = `mailto:${selectedEmail}?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Show success message
    formMessage.textContent = `Je e-mail programma opent zo meteen voor ${selectedName}. Als dit niet werkt, mail direct naar ${selectedEmail}`;
    formMessage.style.display = 'block';
    formMessage.style.color = 'var(--color-text-secondary)';
    
    // Reset form after short delay
    setTimeout(() => {
      contactForm.reset();
      setTimeout(() => {
        formMessage.style.display = 'none';
      }, 3000);
    }, 1000);
  });
}

// ===== SCROLL EFFECTS =====
let lastScroll = 0;
const nav = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll <= 0) {
    nav.style.transform = 'translateY(0)';
    return;
  }
  
  if (currentScroll > lastScroll && currentScroll > 100) {
    // Scrolling down
    nav.style.transform = 'translateY(-100%)';
  } else {
    // Scrolling up
    nav.style.transform = 'translateY(0)';
  }
  
  lastScroll = currentScroll;
});
