document.addEventListener("DOMContentLoaded", function () {
  const mobileMenu = document.querySelector(".mobile-menu");
  const hamburgerIcon = document.querySelector(".header-hamburger");
  const closeIcon = document.querySelector(".header-close");
  const mobileMenuHeaders = document.querySelectorAll(".header-mobile");

  // Toggle mobile menu visibility
  function toggleMobileMenu() {
    mobileMenu.classList.toggle("show");
    hamburgerIcon.classList.toggle("hide");
    closeIcon.classList.toggle("show");
  }

  // Toggle submenu visibility for mobile
  function toggleSubmenu(header) {
    const submenu = header.nextElementSibling;
    submenu.classList.toggle("show");
    header.querySelector(".header-mobile-icon").classList.toggle("show");

    // Close other submenus
    mobileMenuHeaders.forEach(function (otherHeader) {
      if (otherHeader !== header) {
        const otherSubmenu = otherHeader.nextElementSibling;
        otherSubmenu.classList.remove("show");
        otherHeader.querySelector(".header-mobile-icon").classList.remove("show");
      }
    });
  }

  // Event listener for hamburger icon click
  hamburgerIcon.addEventListener("click", toggleMobileMenu);

  // Event listener for close icon click
  closeIcon.addEventListener("click", toggleMobileMenu);

  // Close mobile menu when a link is clicked
  const mobileLinks = document.querySelectorAll(".mobile-menu a");
  mobileLinks.forEach(function (link) {
    link.addEventListener("click", toggleMobileMenu);
  });

  // Event listener for mobile menu headers
  mobileMenuHeaders.forEach(function (header) {
    header.addEventListener("click", function () {
      toggleSubmenu(header);
    });
  });

  // Toggle submenu visibility for desktop
  const desktopMenuTabs = document.querySelectorAll(".header-tab");

  desktopMenuTabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      const dropdown = tab.nextElementSibling;
      dropdown.classList.toggle("show");
      tab.querySelector(".header-arrow").classList.toggle("show");

      // Close other submenus
      desktopMenuTabs.forEach(function (otherTab) {
        if (otherTab !== tab) {
          const otherDropdown = otherTab.nextElementSibling;
          otherDropdown.classList.remove("show");
          otherTab.querySelector(".header-arrow").classList.remove("show");
        }
      });
    });
  });
});
