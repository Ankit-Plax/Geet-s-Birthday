function startJourney() {
    document.getElementById("intro").classList.add("hidden");
    document.getElementById("timeline").classList.remove("hidden");
}

function nextToQuiz() {
    document.getElementById("timeline").classList.add("hidden");
    document.getElementById("quiz").classList.remove("hidden");
}

function checkAnswer() {
    const answer = document.getElementById("quizAnswer").value.toLowerCase();
    const feedback = document.getElementById("quizFeedback");
    if (answer.includes("call")) {
        feedback.textContent = "Correct! 💕";
        setTimeout(() => {
            document.getElementById("quiz").classList.add("hidden");
            document.getElementById("note").classList.remove("hidden");
            typeNote("I may not be there in person, but every heartbeat is with you today. Happy Birthday, my love.");
        }, 2000);
    } else {
        feedback.textContent = "Hmm... try again!";
    }
}

function typeNote(message) {
    const note = document.getElementById("typedNote");
    let index = 0;
    const typer = setInterval(() => {
        if (index < message.length) {
            note.textContent += message.charAt(index);
            index++;
        } else {
            clearInterval(typer);
        }
    }, 50);
}
