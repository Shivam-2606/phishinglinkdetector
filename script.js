const button = document.getElementById('checkButton');
const input = document.getElementById('urlInput');
const resultDiv = document.getElementById('result');

function checkURL() {
    const url = input.value.trim();

    if (url === "") {
        alert("Please enter a URL!");
        return;
    }

    let score = 0;

    if (url.includes("@")) score += 2;
    if (url.toLowerCase().includes("login")) score += 2;
    if (url.toLowerCase().includes("secure")) score += 1;
    if (url.length > 75) score += 1;
    if ((url.match(/\./g) || []).length > 3) score += 1;
    if (url.startsWith("http://")) score += 1;

    let verdict = "SAFE ✓";
    resultDiv.className = "safe";

    if (score >= 3) {
        verdict = "⚠️ MALICIOUS ❌";
        resultDiv.className = "malicious";
    }

    resultDiv.style.display = "block";
    resultDiv.innerHTML = `Result: ${verdict}<br>Risk Score: ${score}`;
}

button.addEventListener("click", checkURL);