// Simulando uma busca e resultado de peças reservadas
document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Exemplo de adicionar uma peça ao histórico após a busca
    addHistoryItem({
        part: "Pastilhas de freio",
        date: "15/10/2023",
        location: "Centro Automotivo Conceição - Av. Diederichsen, 1426 - Vila Guarani (Zona Sul), São Paulo - SP, 04310-001, Brasil",
        vehicle: "Honda Civic"
    });

    alert("Peça reservada com sucesso!");
});

function addHistoryItem(item) {
    const historyTable = document.getElementById("historyTable");

    const newRow = historyTable.insertRow();

    const partCell = newRow.insertCell(0);
    const dateCell = newRow.insertCell(1);
    const locationCell = newRow.insertCell(2);
    const vehicleCell = newRow.insertCell(3);

    partCell.textContent = item.part;
    dateCell.textContent = item.date;
    locationCell.textContent = item.location;
    vehicleCell.textContent = item.vehicle;
}
