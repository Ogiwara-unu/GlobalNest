let recursos = [];

document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("./data/recursos.json");
  recursos = await response.json();

  const tipos = [...new Set(recursos.map(r => r.tipo))];
  const select = document.getElementById("filter-tipo");
  select.innerHTML = `<option value="all">Todos</option>` + tipos.map(t => `<option value="${t}">${t}</option>`).join("");

  renderRecursos(recursos);

  document.getElementById("apply-filter").addEventListener("click", () => {
    const tipo = select.value;
    const filtrados = tipo === "all" ? recursos : recursos.filter(r => r.tipo === tipo);
    renderRecursos(filtrados);
  });
});

function renderRecursos(list) {
  const cont = document.getElementById("recursos-list");
  cont.innerHTML = "";
  list.forEach(r => {
    const div = document.createElement("div");
    div.className = "recurso-item";
    div.innerHTML = `
      <h3>${r.nombre}</h3>
      <p><strong>Tipo:</strong> ${r.tipo}</p>
      <p><strong>Ubicación:</strong> ${r.ubicacion}</p>
      <p><strong>Contacto:</strong> ${r.contacto}</p>
    `;
    cont.appendChild(div);
  });
}
