document.querySelectorAll(".core-value").forEach(element => {
    element.addEventListener("click", () => {
        speechSynthesis.cancel();
        speechSynthesis.speak(new SpeechSynthesisUtterance(element.textContent)
        );
    });
});