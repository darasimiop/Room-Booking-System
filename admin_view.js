fetch("http://localhost:3000/bookings")
    .then(response => response.json())
    .then(bookings => {
        const tableBody = document.querySelector("#bookingTable tbody");

        bookings.forEach(booking => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${booking.studentID}</td>
                <td>${booking.roomNumber}</td>
                <td>${booking.checkIn}</td>
                <td>${booking.checkOut}</td>
            `;

            tableBody.appendChild(row);
        });
    })
    .catch(error => {
        console.error("Error fetching bookings:", error);
        alert("Failed to load bookings.");
    });
