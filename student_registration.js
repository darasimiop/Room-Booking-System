document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing

    const studentID = document.getElementById("studentID").value;
    const password = document.getElementById("password").value;

    // Ensure studentID and password are not empty
    if (!studentID || !password) {
        alert("Please enter both Student ID and Password.");
        return;
    }

    const userData = {
        studentID: studentID,
        password: password
    };

    // Send POST request to JSON Server
    fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("User registered:", data);
        alert("Registration Successful!");
        document.getElementById("registrationForm").reset();
    })
    .catch(error => console.error("Error:", error));
});
