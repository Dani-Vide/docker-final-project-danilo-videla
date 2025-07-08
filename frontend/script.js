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
 
});
document.getElementById("greetButton").addEventListener("click", async () => {
    const response = await fetch("/api/greet/danilo");
    const saludo = JSON.stringify(response)
    document.getElementById("gname").value = saludo;
    const gname = document.getElementById("gname").value;  
});
