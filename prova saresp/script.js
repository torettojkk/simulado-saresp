function resposta(q, alt) {
  if (q === 1) {
    if (alt === 'B') {
      document.getElementById("resp1").innerHTML = "✔️ Correto!";
      document.getElementById("resp1").style.color = "green";
    } else {
      document.getElementById("resp1").innerHTML = "❌ Errado!";
      document.getElementById("resp1").style.color = "red";
    }
  }
}
