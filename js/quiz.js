const a = {
  q1: 'b', q2: 'b', q3: 'a', q4: 'b', q5: 'b',
  q6: 'a', q7: 'b', q8: 'a', q9: 'a', q10: 'a',
  q11: 'a', q12: 'a', q13: 'a', q14: 'a', q15: 'a'
};

document.getElementById("quizForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let s = 0;
  const r = document.getElementById("correctAnswers");
  r.innerHTML = "";

  for (let i = 1; i <= 15; i++) {
    const q = "q" + i;
    const x = document.querySelector(`input[name="${q}"]:checked`);
    const c = a[q];

    const l = document.createElement("li");
    l.className = "list-group-item";

    if (x && x.value === c) {
      s++;
      l.innerHTML = `✔ Question ${i} : Correct`;
      l.style.color = "green";
    } else {
      const g = document.querySelector(
        `input[name="${q}"][value="${c}"]`
      ).nextElementSibling.textContent;

      const u = x
        ? x.nextElementSibling.textContent
        : "Non répondue";

      l.innerHTML = `
        ✘ Question ${i}<br>
        Votre réponse : ${u}<br>
        Réponse correcte : ${g}
      `;
      l.style.color = "red";
    }

    r.appendChild(l);
  }

  const p = Math.round((s / 15) * 100);

  document.getElementById("scoreDisplay").textContent = `${s}/15`;
  document.getElementById("scoreText").textContent =
    p >= 80
      ? "Excelent"
      : p >= 60
      ? "Bien"
      : "Doit s’améliorer";

  document.getElementById("resultCard").style.display = "block";
});
