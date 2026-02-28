/*
----------------------------------------
EARTH DESERVES BETTER - JavaScript File
----------------------------------------
This file handles interactivity.
When a user clicks a button,
the message below updates dynamically.
----------------------------------------
*/

function calculateCarbon() {

    // Get input values
    let distance = document.getElementById("distance").value;
    let electricity = document.getElementById("electricity").value;

    // Simple formula (example only)
    let carbon = (distance * 0.21) + (electricity * 0.5);

    // Display result
    document.getElementById("carbonResult").innerText =
        "Estimated CO₂ Emission: " + carbon.toFixed(2) + " kg";
}

function showMessage(type) {

    // Select the paragraph where text will change
    const infoText = document.getElementById("infoText");

    // Check which button was clicked
    if (type === "segregation") {
        infoText.innerHTML =
        "Smart bins reduce human error and improve recycling accuracy. Less waste ends up in landfills.";
    }

    else if (type === "app") {
        infoText.innerHTML =
        "Gamified apps motivate users with rewards and badges. Recycling becomes fun and engaging!";
    }

    else if (type === "carbon") {
        infoText.innerHTML =
        "Carbon trackers show your environmental impact and encourage greener daily habits.";
    }
}



