let leftBox = document.querySelector('.left-picture-box');
let mainBox = document.querySelector('.main-picture-box');
let rightBox = document.querySelector('.right-picture-box');

let images = [
    "url(images/mango.png)",
    "url(images/original.png)",
    "url(images/lime.png)"
];

// Initialize positions and images
function initializePositions() {
    leftBox.classList.add('position-left');
    mainBox.classList.add('position-center');
    rightBox.classList.add('position-right');
}

// Initialize the boxes with images
leftBox.style.backgroundImage = images[0];
mainBox.style.backgroundImage = images[1];
rightBox.style.backgroundImage = images[2];

initializePositions();

let isAnimating = false;

// Function to handle right button click (move images right)
function rightButtonClick() {
    if (isAnimating) return;
    isAnimating = true;

    // Update positions for animation
    leftBox.classList.remove('position-left');
    leftBox.classList.add('position-center');

    mainBox.classList.remove('position-center');
    mainBox.classList.add('position-right');

    rightBox.classList.remove('position-right');
    rightBox.classList.add('position-left');

    // After transition completes, update images and reset positions
    let middleImage = images[0];
    changeColor(middleImage);
    setTimeout(() => {
        // Disable transitions temporarily
        leftBox.style.transition = 'none';
        mainBox.style.transition = 'none';
        rightBox.style.transition = 'none';

        // Update the images array
        const temp = images[2];
        images[2] = images[1];
        images[1] = images[0];
        images[0] = temp;

        // Update images
        leftBox.style.backgroundImage = images[0];
        mainBox.style.backgroundImage = images[1];
        rightBox.style.backgroundImage = images[2];

        // Reset positions
        leftBox.classList.remove('position-center');
        mainBox.classList.remove('position-right');
        rightBox.classList.remove('position-left');

        leftBox.classList.add('position-left');
        mainBox.classList.add('position-center');
        rightBox.classList.add('position-right');

        // Force reflow
        void leftBox.offsetWidth;
        void mainBox.offsetWidth;
        void rightBox.offsetWidth;

        // Re-enable transitions
        leftBox.style.transition = '';
        mainBox.style.transition = '';
        rightBox.style.transition = '';

        isAnimating = false;
    }, 500);
}

// Function to handle left button click (move images left)
function leftButtonClick() {
    if (isAnimating) return;
    isAnimating = true;

    // Update positions for animation
    leftBox.classList.remove('position-left');
    leftBox.classList.add('position-right');

    mainBox.classList.remove('position-center');
    mainBox.classList.add('position-left');

    rightBox.classList.remove('position-right');
    rightBox.classList.add('position-center');

    // After transition completes, update images and reset positions
    let middleImage = images[2];
    changeColor(middleImage);
    setTimeout(() => {
        // Disable transitions temporarily
        leftBox.style.transition = 'none';
        mainBox.style.transition = 'none';
        rightBox.style.transition = 'none';

        // Update the images array
        const temp = images[0];
        images[0] = images[1];
        images[1] = images[2];
        images[2] = temp;

        // Update images
        leftBox.style.backgroundImage = images[0];
        mainBox.style.backgroundImage = images[1];
        rightBox.style.backgroundImage = images[2];

        // Reset positions
        leftBox.classList.remove('position-right');
        mainBox.classList.remove('position-left');
        rightBox.classList.remove('position-center');

        leftBox.classList.add('position-left');
        mainBox.classList.add('position-center');
        rightBox.classList.add('position-right');

        // Force reflow
        void leftBox.offsetWidth;
        void mainBox.offsetWidth;
        void rightBox.offsetWidth;

        // Re-enable transitions
        leftBox.style.transition = '';
        mainBox.style.transition = '';
        rightBox.style.transition = '';

        isAnimating = false;
    }, 500);
}

function changeColor(middleImage) {
    let mainBox = document.querySelector('.main-picture-box');
    let container_left = document.querySelector('.background-box-left');
    let container_right = document.querySelector('.background-box-right');
    let image = middleImage.split("/")[1].split(".")[0];

    if (image == "mango") {
        container_left.style.backgroundColor = "#FFA500";
        container_right.style.backgroundColor = "#FFA500";
    } else if (image == "original") {
        container_left.style.backgroundColor = "#AAB7B7";
        container_right.style.backgroundColor = "#AAB7B7";
    } else if (image == "lime") {
        container_left.style.backgroundColor = "#32CD32";
        container_right.style.backgroundColor = "#32CD32";
    }
}

// Event listeners for buttons
document.querySelector('.triangle-left').addEventListener('click', leftButtonClick);
document.querySelector('.triangle-right').addEventListener('click', rightButtonClick);