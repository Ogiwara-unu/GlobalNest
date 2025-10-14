let jobs = [];

document.addEventListener("DOMContentLoaded", async () => {
  const response = await fetch("./data/empleos.json");
  jobs = await response.json();

  const zonas = [...new Set(jobs.map(j => j.zona))];
  const sectores = [...new Set(jobs.map(j => j.sector))];

  const zonaSelect = document.getElementById("filter-zona");
  const sectorSelect = document.getElementById("filter-sector");

  zonaSelect.innerHTML = `<option value="all">Todas</option>` + zonas.map(z => `<option value="${z}">${z}</option>`).join("");
  sectorSelect.innerHTML = `<option value="all">Todos</option>` + sectores.map(s => `<option value="${s}">${s}</option>`).join("");

  renderJobs(jobs);

  document.getElementById("apply-filter").addEventListener("click", () => {
    const zona = zonaSelect.value;
    const sector = sectorSelect.value;
    const filtered = jobs.filter(j =>
      (zona === "all" || j.zona === zona) &&
      (sector === "all" || j.sector === sector)
    );
    renderJobs(filtered);
  });
});

function renderJobs(list) {
  const container = document.getElementById("job-list");
  container.innerHTML = "";
  list.forEach(job => {
    const div = document.createElement("div");
    div.className = "job-item";
    div.textContent = `Puesto: ${job.title} (Sector: ${job.sector}, Zona: ${job.zona})`;
    div.onclick = () => showDetails(job);
    container.appendChild(div);
  });
}

function showDetails(job) {
  document.getElementById("job-title").textContent = `Detalles de: ${job.title}`;
  document.getElementById("job-description").textContent = job.description;
  document.getElementById("job-details").style.display = "block";
}
