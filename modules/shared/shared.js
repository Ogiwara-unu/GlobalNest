// Carga dinámica del navbar y footer
document.addEventListener("DOMContentLoaded", () => {
  const loadComponent = (id, path) => {
    fetch(path)
      .then(res => res.text())
      .then(html => document.getElementById(id).innerHTML = html);
  };

  loadComponent("navbar", "/globalnest/modules/shared/navbar.html");
  loadComponent("footer", "/globalnest/modules/shared/footer.html");
});
