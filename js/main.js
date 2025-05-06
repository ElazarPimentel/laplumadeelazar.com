/*
Name: js/main.js
Author: Elazar Pimentel also known as Alessio Aguirre Pimentel
Version: 02
Description: JavaScript functionality for La Pluma De Elazar blog site
*/

// Run the setup functions immediately to ensure they execute
window.onload = function() {
  try {
    setupThemeToggle();
    setupSmoothScrolling();
    enhanceReadability();
    updateFooterYear();
  } catch (error) {
    console.error('Error during initialization:', error);
  }
};

// Also keep the DOMContentLoaded event as a fallback
document.addEventListener('DOMContentLoaded', () => {
  try {
    if (!document.querySelector('.theme-toggle')) {
      setupThemeToggle();
    }
    setupSmoothScrolling();
    enhanceReadability();
    updateFooterYear();
  } catch (error) {
    console.error('Error during initialization:', error);
  }
});

/**
 * Sets up the theme toggle functionality
 */
function setupThemeToggle() {
  console.log('Setting up theme toggle');
  
  // Check for saved theme preference or use default
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  // Apply the current theme to the document
  document.documentElement.setAttribute('data-theme', currentTheme);
  document.body.setAttribute('data-theme', currentTheme);
  
  // Get the theme toggle button
  const themeToggle = document.querySelector('.theme-toggle');
  
  if (themeToggle) {
    // Update the icon based on the current theme
    updateThemeIcon(themeToggle, currentTheme);
    
    // Add click event listener to toggle theme
    themeToggle.addEventListener('click', () => {
      try {
        // Toggle theme
        const newTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        
        // Update theme in localStorage
        localStorage.setItem('theme', newTheme);
        
        // Apply the new theme
        document.documentElement.setAttribute('data-theme', newTheme);
        document.body.setAttribute('data-theme', newTheme);
        
        // Update the icon
        updateThemeIcon(themeToggle, newTheme);
      } catch (error) {
        console.error('Error toggling theme:', error);
      }
    });
  } else {
    console.error('Theme toggle button not found');
  }
}

/**
 * Updates the theme toggle icon based on current theme
 */
function updateThemeIcon(toggleButton, theme) {
  if (!toggleButton) return;
  
  // Update the icon based on theme
  if (theme === 'dark') {
    toggleButton.innerHTML = '<svg class="theme-toggle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';
    toggleButton.setAttribute('aria-label', 'Switch to light theme');
  } else {
    toggleButton.innerHTML = '<svg class="theme-toggle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
    toggleButton.setAttribute('aria-label', 'Switch to dark theme');
  }
}

/**
 * Updates the current year in the footer copyright text
 */
function updateFooterYear() {
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }
}

/**
 * Sets up smooth scrolling for anchor links
 */
function setupSmoothScrolling() {
  // Get all internal links
  const internalLinks = document.querySelectorAll('a[href^="#"]');
  
  // Add click event listener to each internal link
  internalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Get the target element ID from the href attribute
      const targetId = link.getAttribute('href');
      
      // If the target exists, smoothly scroll to it
      if (targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          
          // Scroll to target
          targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
          
          // Update URL hash without causing a jump
          history.pushState(null, null, targetId);
        }
      }
    });
  });
}

/**
 * Enhances readability and accessibility
 */
function enhanceReadability() {
  // Add proper HTML structure if not present
  if (!document.querySelector('main')) {
    const articles = document.querySelectorAll('article');
    if (articles.length > 0) {
      // Create main element if it doesn't exist
      const main = document.createElement('main');
      main.classList.add('container');
      
      // Move all articles into the main element
      const firstArticle = articles[0];
      const parent = firstArticle.parentNode;
      
      articles.forEach(article => {
        main.appendChild(article);
      });
      
      // Insert main after header
      const header = document.querySelector('header');
      if (header && header.nextSibling) {
        parent.insertBefore(main, header.nextSibling);
      } else {
        parent.appendChild(main);
      }
    }
  }
  
  // Add container class to header and footer if not present
  const header = document.querySelector('header');
  if (header && !header.querySelector('.header-container')) {
    const headerContent = header.innerHTML;
    header.innerHTML = `<div class="header-container">${headerContent}</div>`;
  }
  
  const footer = document.querySelector('footer');
  if (footer && !footer.querySelector('.container')) {
    const footerContent = footer.innerHTML;
    footer.innerHTML = `<div class="container">${footerContent}</div>`;
  }
  
  // Make external links open in a new tab with proper attributes for security
  const externalLinks = document.querySelectorAll('a[href^="http"]:not([href*="' + window.location.hostname + '"])');
  externalLinks.forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });
}

// Add support for older browsers
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;
    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

