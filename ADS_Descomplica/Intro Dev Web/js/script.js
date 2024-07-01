"use strict";
document.addEventListener("DOMContentLoaded", function () {
    const enterBtn = document.querySelector(".primary");
    if (enterBtn) {
        enterBtn.addEventListener("click", function () {
            const nameInput = document.querySelector("#name");
            if (nameInput) {
                const name = nameInput.value.trim();
                const welcomeMessage = document.querySelector(".subtitle");
                if (welcomeMessage) {
                    if (name !== "") {
                        welcomeMessage.textContent = `Bem-Vind@, ${name}!`;
                    }
                    else {
                        alert("Por favor, informe seu nome.");
                    }
                }
            }
        });
    }
    const exitBtn = document.querySelector(".secondary");
    if (exitBtn) {
        exitBtn.addEventListener("click", function () {
            const nameInput = document.querySelector("#name");
            if (nameInput) {
                nameInput.value = "";
                const welcomeMessage = document.querySelector(".subtitle");
                if (welcomeMessage) {
                    welcomeMessage.textContent = "Welcome, ";
                }
            }
        });
    }
});
