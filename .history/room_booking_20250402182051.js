document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const studentID = document.getElementById("studentID").value;
    const roomNumber = document.getElementById("roomNumber").value;
    const checkIn = document.getElementById("checkIn").value;
    const checkOut = document.getElementById("checkOut").value;

    const booking = {
        studentID,
        roomNumber,
        checkIn,
        checkOut
    };

    fetch("http://localhost:3000/bookings", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
        // After booking is successful, update room status to "Booked"
        return fetch(`http://localhost:3000/rooms?number=${roomNumber}`)
            .then(res => res.json())
            .then(rooms => {
                if (rooms.length > 0) {
                    const roomId = rooms[0].id;
                    return fetch(`http://localhost:3000/rooms/${roomId}`, {
                        method: "PATCH",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ status: "Booked" })
                    });
                }
            });
    })
    .then(() => {
        alert("Booking successful!");
        document.getElementById("bookingForm").reset();
    })
    .catch(err => console.error("Error:", err));
});
