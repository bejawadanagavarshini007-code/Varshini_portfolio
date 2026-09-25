/**
 * PORTFOLIO JAVASCRIPT INTERACTIONS
 * Author: Bejawada Naga Varshini
 * Description: Typing effect, theme switcher, scroll spy, project filters, copy-to-clipboard, form feedback
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTypingEffect();
  initMobileMenu();
  initScrollSpy();
  initProjectFilters();
  initClipboardCopy();
  initContactForm();
  initBackToTop();
});

/* --------------------------------------------------------------------------
   1. THEME SWITCHER (Dark & Light Mode with LocalStorage)
   -------------------------------------------------------------------------- */
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const htmlRoot = document.documentElement;

  // Retrieve saved theme or default to dark
  const savedTheme = localStorage.getItem('theme_preference') || 'dark';
  htmlRoot.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      htmlRoot.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme_preference', newTheme);
    });
  }
}

/* --------------------------------------------------------------------------
   2. DYNAMIC TYPING EFFECT
   -------------------------------------------------------------------------- */
function initTypingEffect() {
  const typingElement = document.getElementById('typingText');
  if (!typingElement) return;

  const roles = [
    'Aspiring Software Engineer',
    'AI & Generative AI Enthusiast',
    'Computer Science Student',
    'Python & SQL Developer'
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  function type() {
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typingElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      typingElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 95;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at end of word
      isDeleting = true;
      typingSpeed = 1600;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400;
    }

    setTimeout(type, typingSpeed);
  }

  type();
}

/* --------------------------------------------------------------------------
   3. MOBILE NAVIGATION MENU
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (!mobileMenuBtn || !navLinks) return;

  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close menu when clicking on any nav link
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      mobileMenuBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* --------------------------------------------------------------------------
   4. ACTIVE SECTION SCROLL SPY
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  function updateActiveLink() {
    const scrollPosition = window.scrollY + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });
}

/* --------------------------------------------------------------------------
   5. PROJECT FILTER TABS (Completed vs Concepts)
   -------------------------------------------------------------------------- */
function initProjectFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (!filterButtons.length || !projectCards.length) return;

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Update active filter button state
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');

        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   6. 1-CLICK COPY TO CLIPBOARD
   -------------------------------------------------------------------------- */
function initClipboardCopy() {
  const copyButtons = document.querySelectorAll('.copy-btn');
  const toast = document.getElementById('toast');

  copyButtons.forEach(button => {
    button.addEventListener('click', () => {
      const textToCopy = button.getAttribute('data-clipboard');
      if (!textToCopy) return;

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied "${textToCopy}" to clipboard!`);
        }).catch(() => {
          fallbackCopy(textToCopy);
        });
      } else {
        fallbackCopy(textToCopy);
      }
    });
  });

  function fallbackCopy(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast(`Copied "${text}" to clipboard!`);
    } catch (e) {
      showToast('Could not copy automatically. Please copy manually.');
    }
    document.body.removeChild(tempInput);
  }

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
}

/* --------------------------------------------------------------------------
   7. CONTACT FORM SUBMISSION
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const statusMessage = document.getElementById('formStatus');

  if (!form || !statusMessage) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('senderName').value.trim();
    const email = document.getElementById('senderEmail').value.trim();
    const subject = document.getElementById('senderSubject').value.trim();
    const message = document.getElementById('senderMessage').value.trim();

    if (!name || !email || !subject || !message) {
      statusMessage.textContent = 'Please fill out all required fields.';
      statusMessage.style.color = '#ef4444';
      return;
    }

    // Construct mailto link so the user's default email client can send it
    const mailtoLink = `mailto:bejawadanagavarshini007@gmail.com?subject=${encodeURIComponent(
      `[Portfolio Contact] ${subject}`
    )}&body=${encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`)}`;

    statusMessage.textContent = 'Thank you! Opening your email client to send the message...';
    statusMessage.className = 'form-status-message success';

    window.open(mailtoLink, '_blank');
    form.reset();

    setTimeout(() => {
      statusMessage.textContent = '';
    }, 6000);
  });
}

/* --------------------------------------------------------------------------
   8. FLOATING BACK TO TOP BUTTON
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.getElementById('backToTop');
  if (!backToTopBtn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  }, { passive: true });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
