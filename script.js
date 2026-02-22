/* ============================================
   MALAVIKA POLANKI — PORTFOLIO JAVASCRIPT
   File: script.js
   ============================================ */

/**
 * SCROLL REVEAL ANIMATION
 * ─────────────────────────────────────────────
 * How it works:
 *  1. All elements with class="reveal" start invisible (defined in CSS)
 *  2. IntersectionObserver watches each element
 *  3. When an element scrolls into view, we add class "visible"
 *  4. CSS transition then fades it in and slides it up
 *  5. A small staggered delay (i * 80ms) makes multiple elements
 *     animate one after another instead of all at once
 */

const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger the animation delay for each element
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, i * 80);
    }
  });
}, {
  threshold: 0.1  // Trigger when 10% of the element is visible
});

// Attach observer to every .reveal element on the page
reveals.forEach(el => observer.observe(el));
