document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector("#name-input");
    const output = document.querySelector("#name-output");

    input.addEventListener("input", function () {
        const trimmedValue = input.value.trim(); // Boşlukları temizle
        output.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
    });
});
