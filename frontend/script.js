document.getElementById("loadButton").addEventListener("click", async () => {
  const response = await fetch("/api/students");
  const students = await response.json();
  const tbody = document.querySelector("#studentsTable tbody");
  tbody.innerHTML = "";
  students.forEach((student) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${student.id}</td><td>${student.name}</td>`;
    tbody.appendChild(row);
  });
});
document.getElementById("unloadButton").addEventListener("click", async () => {
    const ename = document.getElementById("ename").value;
    const response = await fetch("/students/" + ename);
    const answer = await response.json();
    const tbody = document.querySelector("#studentsTable tbody");
    tbody.innerHTML = "";
    students.forEach((student) => {
        const row = document.createElement("tr");
        row.innerHTML = `<td>${student.id}</td><td>${student.name}</td>`;
        tbody.appendChild(row);
    });
});
document.getElementById("greetButton").addEventListener("click", async () => {
    const gname = document.getElementById("gname").value;
    const response = await fetch("/api/greet/" + gname);
    const saludo = await response.json();
    document.getElementById("saludo").value = saludo.message;
});
