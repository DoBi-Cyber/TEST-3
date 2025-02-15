const userInput = document.getElementById('user-input');
const terminalBody = document.querySelector('.terminal-body');

const commands = {
    help: "Available commands: help, about, secret, clear",
    about: "This is a hacking-themed folder website.",
    secret: "Accessing secret file... <a href='files/secret-file.txt' download>Download</a>",
    clear: () => { terminalBody.innerHTML = ''; }
};

document.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const input = userInput.textContent.trim().toLowerCase();
        if (commands[input]) {
            if (typeof commands[input] === 'function') {
                commands[input]();
            } else {
                terminalBody.innerHTML += `<p>> ${commands[input]}</p>`;
            }
        } else {
            terminalBody.innerHTML += `<p>> Command not found: ${input}</p>`;
        }
        userInput.textContent = '';
        terminalBody.scrollTop = terminalBody.scrollHeight;
    } else if (e.key === 'Backspace') {
        userInput.textContent = userInput.textContent.slice(0, -1);
    } else if (e.key.length === 1) {
        userInput.textContent += e.key;
    }
});