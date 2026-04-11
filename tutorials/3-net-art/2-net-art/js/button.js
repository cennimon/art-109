function checkGuess() {
    const input = document.getElementById("input").value.toLowerCase();
    const popup = document.getElementById("popup");
    const text = document.getElementById("popup-text");

    const correctAnswer = "bird"; // change this if needed


    if (input === correctAnswer) {
        text.textContent = "yea";
    } else {
        text.textContent = "maybe..";
    }

    popup.style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}