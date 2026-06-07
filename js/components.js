// Shared navigation HTML
const NAV_HTML = `
<nav class="navbar">
  <div class="container">
    <a href="index.html" class="nav-logo">
      <div class="nav-logo-icon">🐯</div>
      <span class="nav-logo-text">Wild<span>Guard</span> Malaysia</span>
    </a>
    <div class="nav-links">
      <a href="index.html">Home</a>
      <a href="species.html">Species</a>
      <a href="news.html">Conservation News</a>
      <a href="get-involved.html">Get Involved</a>
      <a href="about.html">About</a>
    </div>
    <a href="get-involved.html" class="btn btn-amber btn-sm nav-cta">Take Action</a>
    <button class="nav-mobile-btn" aria-label="Menu">☰</button>
  </div>
</nav>
<div class="mobile-menu">
  <a href="index.html">🏠 Home</a>
  <a href="species.html">🐾 Species Directory</a>
  <a href="news.html">📰 Conservation News</a>
  <a href="get-involved.html">🤝 Get Involved</a>
  <a href="about.html">ℹ️ About</a>
  <a href="get-involved.html" class="mobile-cta">🌿 Take Action Now</a>
</div>`;

const FOOTER_HTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="nav-logo">
          <div class="nav-logo-icon">🐯</div>
          <span class="nav-logo-text" style="color:#fff;">Wild<span>Guard</span> Malaysia</span>
        </a>
        <p class="mt-2">A digital platform dedicated to protecting Malaysia's endangered wildlife and biodiversity. Together, we can make a difference.</p>
        <div class="footer-sdg">🌿 SDG 15 — Life on Land</div>
      </div>
      <div class="footer-col">
        <h4>Explore</h4>
        <ul>
          <li><a href="species.html">Species Directory</a></li>
          <li><a href="news.html">Conservation News</a></li>
          <li><a href="get-involved.html">Volunteer</a></li>
          <li><a href="get-involved.html">Donate</a></li>
          <li><a href="about.html">About Us</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Species</h4>
        <ul>
          <li><a href="species.html">Malayan Tiger</a></li>
          <li><a href="species.html">Pygmy Elephant</a></li>
          <li><a href="species.html">Malayan Sun Bear</a></li>
          <li><a href="species.html">Malayan Tapir</a></li>
          <li><a href="species.html">Proboscis Monkey</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Partners</h4>
        <ul>
          <li><a href="https://www.wwf.org.my" target="_blank">WWF-Malaysia</a></li>
          <li><a href="https://www.mycat.my" target="_blank">MYCAT</a></li>
          <li><a href="https://www.wildlife.gov.my" target="_blank">PERHILITAN</a></li>
          <li><a href="https://www.wildlife.sabah.gov.my" target="_blank">Sabah Wildlife</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 WildGuard Malaysia. FYP Project — Diploma in Multimedia, MSU.</span>
      <span>Aligned with <a href="https://sdgs.un.org/goals/goal15" target="_blank">UN SDG 15</a></span>
    </div>
  </div>
</footer>
<button class="back-top" title="Back to top">↑</button>`;

// Inject nav and footer
document.getElementById('nav-placeholder')?.insertAdjacentHTML('afterend', NAV_HTML);
document.getElementById('footer-placeholder')?.insertAdjacentHTML('beforebegin', FOOTER_HTML);
