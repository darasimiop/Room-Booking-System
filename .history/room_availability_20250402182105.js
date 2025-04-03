fetch("http://localhost:3000/rooms")
    .then(response => response.json())
    .then(data => {
        let roomList = document.getElementById("roomList");
        data.forEach(room => {
            if (room.status === "Available") {
                let li = document.createElement("li");
                li.textContent = `Room ${room.number} - Type: ${room.type} - Status: ${room.status}`;
                roomList.appendChild(li);
            }
        });
    })
    .catch(error => console.error("Error loading rooms:", error));
