document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("./data/tramites.json");
  const tramites = await response.json();
  const list = document.getElementById("tramite-list");

  tramites.forEach(t => {
    const li = document.createElement("li");
    const input = document.createElement("input");
    input.type = "checkbox";
    input.id = t.id;

    const label = document.createElement("label");
    label.htmlFor = t.id;
    label.textContent = t.descripcion;

    li.appendChild(input);
    li.appendChild(label);
    list.appendChild(li);
  });
});
