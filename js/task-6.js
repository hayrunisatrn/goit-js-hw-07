function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")}`;
}

document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector("#controls input");
    const createButton = document.querySelector("[data-create]");
    const destroyButton = document.querySelector("[data-destroy]");
    const boxesContainer = document.querySelector("#boxes");

    function createBoxes(amount) {
        boxesContainer.innerHTML = ""; // Önceki kutuları temizle
        let size = 30; // İlk kutunun boyutu

        const fragment = document.createDocumentFragment();

        for (let i = 0; i < amount; i++) {
            const box = document.createElement("div");
            box.style.width = `${size}px`;
            box.style.height = `${size}px`;
            box.style.backgroundColor = getRandomHexColor();
            box.style.margin = "5px"; // Kutular arasında boşluk bırak
            size += 10; // Bir sonraki kutu 10px daha büyük olacak
            fragment.appendChild(box);
        }

        boxesContainer.appendChild(fragment);
    }

    function destroyBoxes() {
        boxesContainer.innerHTML = ""; // Kutuları temizle
    }

    createButton.addEventListener("click", function () {
        const amount = parseInt(input.value.trim(), 10);

        if (amount >= 1 && amount <= 100) {
            createBoxes(amount);
            input.value = ""; // Input alanını temizle
        }
    });

    destroyButton.addEventListener("click", destroyBoxes);
});
