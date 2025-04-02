document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const booking = {
        studentID: document.getElementById("studentID").value,
        roomNumber: document.getElementById("roomNumber").value,
        checkIn: document.getElementById("checkIn").value,
        checkOut: document.getElementById("checkOut").value
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
        alert("Booking successful!");
        document.getElementById("bookingForm").reset();
    })
    .catch(err => console.error("Error:", err));
});
