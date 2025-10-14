document.addEventListener("DOMContentLoaded", () => {
  const loadComponent = (id, path) => {
    fetch(path)
      .then(res => res.text())
      .then(html => document.getElementById(id).innerHTML = html)
      .then(() => {
        // Activar toggle de hamburguesa solo si existe
        const hamburger = document.querySelector(".hamburger");
        const navLinks = document.querySelector(".nav-links");
        if (hamburger) {
          hamburger.addEventListener("click", () => {
            navLinks.classList.toggle("active");
          });
        }
      });
  };

  loadComponent("navbar", "/modules/shared/navbar.html");
  loadComponent("footer", "/modules/shared/footer.html");
});
