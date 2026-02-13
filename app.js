let user = null;

function showLogin() {
  document.getElementById("app").innerHTML = `
    <h2>Login</h2>
    <input id="u" placeholder="username">
    <input id="p" type="password">
    <button onclick="login()">Login</button>
  `;
}

async function login() {
  const res = await fetch("/api/login", {
    method: "POST",
    body: JSON.stringify({
      username: document.getElementById("u").value,
      password: document.getElementById("p").value
    })
  });

  user = await res.json();
  showHome();
}

function showHome() {
  document.getElementById("app").innerHTML =
    "<h2>Xin chào " + user.username + "</h2>";
}

showLogin();