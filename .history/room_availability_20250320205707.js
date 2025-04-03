fetch('db.json')
    .then(response => response.json())
    .then(data => {
        let roomList = document.getElementById("roomList");
        data.rooms.forEach(room => {
            let li = document.createElement("li");
            li.textContent = `Room ${room.number} - Type: ${room.type} - Status: ${room.status}`;
            roomList.appendChild(li);
        });
    })
    .catch(error => console.error("Error loading rooms:", error));
