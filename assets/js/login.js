document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const login = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("/RadeUp/BDD/users.json");
        const data = await response.json();

        const user = data.users.find(
            u => u.login === login && u.password === password
        );

        if (user) {
            // Stocker l'utilisateur connecté
            localStorage.setItem("user", JSON.stringify(user));
            window.location.href = "index.html";
        } else {
            alert("❌ Login ou mot de passe incorrect");
        }

    } catch (error) {
        console.error("Erreur de chargement BDD :", error);
        alert("Erreur serveur");
    }
});
