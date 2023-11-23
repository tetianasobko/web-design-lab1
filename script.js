const buttons = document.querySelectorAll('button');
const result = document.getElementById('result');
const foodImage = document.getElementById('foodImage');

function handleFoodClick(foodName, imageUrl) {
    result.textContent = `You ordered: ${foodName}`;
    foodImage.src = imageUrl;
}

document.querySelector('#burger').addEventListener('click', function() {
    handleFoodClick('Hamburger', 'image/burger.jpg');
});

document.getElementById('pizza').addEventListener('click', function() {
    handleFoodClick('Pizza', 'image/pizza.jpg');
});

const pastaElement = document.getElementsByClassName('pasta')[0];
pastaElement.onclick = () => handleFoodClick('Pasta', 'image/pasta.jpg');

document.getElementById('dessert').addEventListener('click', function() {
    handleFoodClick('Dessert', 'image/dessert.jpg');
});

buttons.forEach(button => {
    button.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#5bc0de';
    });

    button.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#337ab7';
    });
});
