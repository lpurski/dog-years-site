// Reference dog images
let image = document.querySelector("#dog");
let dogImages = ['husky.png', 'corgi.png', 'frenchbulldog.png', 'shibainu.png'];
let i = 0;

/**
 * Swap the dog image for the next one in the dogImages array.
 * @returns String of source location for an image file in the dogImages array.
 */
function swapImage(){
    if(i >= dogImages.length - 1) i = -1;
    i++;
    return setImageSrc();
}

/**
 * Set the source location of the dog image to a file in the dogImages array.
 * @returns String of source location for an image file in the dogImages array.
 */
function setImageSrc(){
    return image.src = "img/" + dogImages[i];
}

/**
 * Calculate human years into dog years.
 * Validate user input before displaying age.
 * Show user their age in dog years.
 */
function calcDogYears(){
    // Reference elements and grab user input
    let message = document.querySelector("#message");
    let validationMessage = document.querySelector("#validationMessage");
    let userInput = document.querySelector("#age").value;
    let age = parseInt(userInput);
    
    // Initialise years
    let earlyYears = 2;
    let laterYears = age - 2;
    let myAgeInDogYears = 0;

    // Calculate early and later dog years
    earlyYears = earlyYears *= 10.5;
    laterYears *= 4;

    // Calculate human age into dog years
    myAgeInDogYears = earlyYears + laterYears;

    // Validate user input
    // Age should be a valid number
    if (isNaN(age) || age <= 0){
        validationMessage.innerHTML = "Please enter your age."
    } else {
        validationMessage.innerHTML = "";
        message.innerHTML = "Your age in dog years is " + myAgeInDogYears + ".";
    }
}
