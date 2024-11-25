function submitForm() {
    const formData = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        city: document.getElementById("city").value
    };

    fetch("/api/users/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (response.ok) {
            alert("User registered successfully!");
            document.getElementById("signup-form").reset();
        } else {
            alert("Failed to register user.");
        }
    })
    .catch(error => console.error("Error:", error));
}
