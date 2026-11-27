/* =========================================================
   WhiteLab site script
   - Shop / social links: edit LINKS below (one place for every page)
   - Header, footer and the mobile buy bar are injected from here
   - TH/EN: Thai is in the HTML; English lives in data-en="..."
   ========================================================= */
(function () {
  "use strict";
  document.documentElement.classList.remove("no-js");

  // ---- 1. Links (TODO: confirm with Thime's team) ----
  var LINKS = {
    tiktok: "https://www.tiktok.com/@whitelabth",         // TikTok profile / Shop tab
    shopee: "https://shopee.co.th/whitelab_official",
    line: "https://line.me/R/ti/p/@whitelabth",
    instagram: "https://www.instagram.com/whitelabth/",
    facebook: "https://www.facebook.com/p/Whitelab-Essentials-Thailand-61558214277811/",
    itgirlIg: "https://www.instagram.com/itgirl.bywhitelab/",
    skinnIg: "https://www.instagram.com/skinn.bywhitelab/",
    affiliate: "https://line.me/R/ti/p/@whitelabth"        // TODO: real affiliate sign-up link
  };

  var ICONS = {
    tiktok: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.1v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.7a5.7 5.7 0 1 0 4.9 5.7V9.1a7.4 7.4 0 0 0 4.3 1.4V7.4a4.3 4.3 0 0 1-3.2-1.6z"/></svg>',
    shopee: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a4 4 0 0 0-4 4H4.5L3 21h18L19.5 6H16a4 4 0 0 0-4-4zm0 1.6A2.4 2.4 0 0 1 14.4 6H9.6A2.4 2.4 0 0 1 12 3.6zM12 9c1.6 0 2.8.6 3.4 1.2l-.8 1.1c-.6-.5-1.5-.9-2.6-.9-1 0-1.6.4-1.6 1 0 1.6 5.2.8 5.2 4.2 0 1.6-1.4 2.9-3.7 2.9-1.6 0-3-.6-3.8-1.4l.8-1.2c.8.7 1.9 1.1 3 1.1 1.2 0 1.9-.5 1.9-1.2 0-1.8-5.2-.9-5.2-4.2C8.6 10.2 10 9 12 9z"/></svg>',
    line: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 3C6.5 3 2 6.6 2 11c0 4 3.6 7.3 8.4 7.9.3.1.8.2.9.5.1.3.1.7 0 1l-.1.9c0 .3-.2 1 .9.5 1.1-.5 6-3.5 8.2-6.1A7.4 7.4 0 0 0 22 11c0-4.4-4.5-8-10-8zM8.3 13.6H6.4a.5.5 0 0 1-.5-.5V9.3a.5.5 0 0 1 1 0v3.3h1.4a.5.5 0 0 1 0 1zm1.9-.5a.5.5 0 0 1-1 0V9.3a.5.5 0 0 1 1 0zm4.6 0a.5.5 0 0 1-.9.3l-2-2.6v2.3a.5.5 0 0 1-1 0V9.3a.5.5 0 0 1 .9-.3l2 2.6V9.3a.5.5 0 0 1 1 0zm3.1-2.4a.5.5 0 0 1 0 1h-1.4v.9h1.4a.5.5 0 0 1 0 1h-1.9a.5.5 0 0 1-.5-.5V9.3c0-.3.2-.5.5-.5h1.9a.5.5 0 0 1 0 1h-1.4v.9z"/></svg>',
    ig: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>'
  };

  // ---- 1b. Mockup banner: set DEMO = false when WhiteLab takes the site live ----
  var DEMO = true;
  if (DEMO) {
    var demo = document.createElement("div");
    demo.className = "demo-banner";
    demo.innerHTML = '<span data-en="MOCKUP for review only, not the official WhiteLab website">ตัวอย่างดีไซน์ (Mockup) สำหรับรีวิวเท่านั้น ไม่ใช่เว็บไซต์ทางการของ WhiteLab</span>';
    document.body.insertBefore(demo, document.body.firstChild);
  }

  // ---- 2. Shared header / footer / buy bar ----
  var page = document.body.getAttribute("data-page") || "home";
  function cur(p) { return page === p ? ' aria-current="page"' : ""; }

  var NAV = [
    ["teeth", "teeth-whitening.html", "ชุดฟอกสีฟัน", "Teeth Whitening"],
    ["essentials", "77-essentials.html", "77 Essentials", "77 Essentials"],
    ["itgirl", "it-girl.html", "It Girl", "It Girl"],
    ["skinn", "skinn.html", "Skinn", "Skinn"],
    ["about", "about.html", "เกี่ยวกับเรา", "About us"]
  ];
  var navHtml = NAV.map(function (n) {
    return '<a href="' + n[1] + '"' + cur(n[0]) + ' data-en="' + n[3] + '">' + n[2] + "</a>";
  }).join("");

  var header = document.querySelector("[data-include=header]");
  if (header) {
    header.outerHTML =
      '<header class="site-header" id="top">' +
      '<div class="container nav">' +
      '<a class="logo" href="index.html" aria-label="WhiteLab home"><span class="logo-mark">W</span><span class="logo-word">WhiteLab</span></a>' +
      '<nav class="nav-links" aria-label="Main">' + navHtml + "</nav>" +
      '<div class="nav-tools">' +
      '<div class="lang-toggle" role="group" aria-label="Language"><button type="button" data-lang="th">TH</button><button type="button" data-lang="en">EN</button></div>' +
      '<button class="menu-btn" type="button" aria-label="Menu" aria-expanded="false"><span></span></button>' +
      "</div></div>" +
      '<nav class="mobile-menu" aria-label="Mobile">' + navHtml + "</nav>" +
      "</header>";
  }

  function shopButtons(small) {
    return (
      '<a class="btn btn--tiktok" href="' + LINKS.tiktok + '" target="_blank" rel="noopener">' + ICONS.tiktok + (small ? "TikTok" : '<span data-en="Buy on TikTok Shop">ซื้อใน TikTok Shop</span>') + "</a>" +
      '<a class="btn btn--shopee" href="' + LINKS.shopee + '" target="_blank" rel="noopener">' + ICONS.shopee + (small ? "Shopee" : '<span data-en="Buy on Shopee">ซื้อใน Shopee</span>') + "</a>" +
      '<a class="btn btn--line" href="' + LINKS.line + '" target="_blank" rel="noopener">' + ICONS.line + (small ? "LINE" : '<span data-en="Chat on LINE">สอบถามทาง LINE</span>') + "</a>"
    );
  }
  document.querySelectorAll("[data-include=shop-buttons]").forEach(function (el) {
    el.outerHTML = '<div class="btn-row">' + shopButtons(false) + "</div>";
  });

  var footer = document.querySelector("[data-include=footer]");
  if (footer) {
    footer.outerHTML =
      '<footer class="site-footer"><div class="container">' +
      '<div class="footer-grid">' +
      '<div><a class="logo" href="index.html"><span class="logo-mark">W</span><span class="logo-word">WhiteLab</span></a>' +
      '<p style="margin-top:12px" data-en="Smile with Confidence ✨ Easy at-home smile care by WhiteLab Essentials.">Smile with Confidence ✨ ดูแลรอยยิ้มให้มั่นใจ ทำได้เองที่บ้าน</p></div>' +
      '<div><h4 data-en="Products">สินค้า</h4>' + NAV.slice(0, 4).map(function (n) { return '<a href="' + n[1] + '">' + n[3] + "</a>"; }).join("") + "</div>" +
      '<div><h4 data-en="Where to buy">ช่องทางสั่งซื้อ</h4><a href="' + LINKS.tiktok + '" target="_blank" rel="noopener">TikTok Shop</a><a href="' + LINKS.shopee + '" target="_blank" rel="noopener">Shopee</a><a href="' + LINKS.line + '" target="_blank" rel="noopener">LINE @whitelabth</a></div>' +
      '<div><h4 data-en="Follow us">ติดตามเรา</h4><a href="' + LINKS.instagram + '" target="_blank" rel="noopener">Instagram</a><a href="' + LINKS.tiktok + '" target="_blank" rel="noopener">TikTok</a><a href="' + LINKS.facebook + '" target="_blank" rel="noopener">Facebook</a></div>' +
      "</div>" +
      '<div class="footer-legal">' +
      // TODO: confirm every FDA (อย.) number against the official Thai FDA database before launch.
      '<p data-en="WhiteLab Essentials Co., Ltd. · Teeth whitening kit FDA notification no. 10-2-6800046427 (to be confirmed) · Use as directed on the label.">บริษัท ไวท์แล็บ เอสเซนเชียลส์ จำกัด · ชุดฟอกสีฟัน เลขที่ใบรับจดแจ้ง อย. 10-2-6800046427 (รอยืนยัน) · โปรดใช้ตามวิธีใช้บนฉลาก</p>' +
      "<p>© " + new Date().getFullYear() + " WhiteLab Essentials</p>" +
      "</div></div></footer>" +
      '<div class="buy-bar" aria-label="Quick buy">' + shopButtons(true) + "</div>";
  }

  // ---- 3. Language toggle ----
  var KEY = "wl-lang";
  function getLang() { try { return localStorage.getItem(KEY) || "th"; } catch (e) { return "th"; } }
  function setLang(lang) {
    try { localStorage.setItem(KEY, lang); } catch (e) { /* storage blocked: still switch */ }
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-en]").forEach(function (el) {
      if (!el.hasAttribute("data-th")) el.setAttribute("data-th", el.innerHTML);
      el.innerHTML = lang === "en" ? el.getAttribute("data-en") : el.getAttribute("data-th");
    });
    document.querySelectorAll(".lang-toggle button").forEach(function (b) {
      var on = b.getAttribute("data-lang") === lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest(".lang-toggle button");
    if (b) setLang(b.getAttribute("data-lang"));
  });
  setLang(getLang());

  // ---- 4. Mobile menu ----
  var menuBtn = document.querySelector(".menu-btn");
  var menu = document.querySelector(".mobile-menu");
  if (menuBtn && menu) {
    menuBtn.addEventListener("click", function () {
      var open = menu.classList.toggle("is-open");
      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  // ---- 5. Header + buy bar on scroll ----
  var headerEl = document.querySelector(".site-header");
  var bar = document.querySelector(".buy-bar");
  function onScroll() {
    var y = window.scrollY;
    if (headerEl) headerEl.classList.toggle("is-solid", y > 10);
    if (bar) bar.classList.toggle("is-visible", y > 480);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ---- 6. Reveal on scroll ----
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("is-in"); });
  }
})();
