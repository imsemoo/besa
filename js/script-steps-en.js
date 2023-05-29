// Get the step elements and buttons
const steps = document.getElementsByClassName("step");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentStep = 0; // Current step index

// Function to show the current step
function showStep(stepIndex) {
    // Hide all steps
    for (let i = 0; i < steps.length; i++) {
        steps[i].classList.remove("active");
    }

    // Show the current step
    steps[stepIndex].classList.add("active");

    // Update the buttons
    if (stepIndex === 0) {
        prevBtn.style.display = "none"; // Hide previous button on first step
    } else {
        prevBtn.style.display = "inline-block";
    }

    if (stepIndex === steps.length - 1) {
        nextBtn.innerHTML = "Submit"; // Change next button text on last step
    } else {
        nextBtn.innerHTML = "Next";
    }
}

// Function to go to the next step
function nextStep() {
    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep(currentStep);
    } else {
        // Perform form submission or validation here
        // Submit the form data
        // ...
    }
}

// Function to go to the previous step
function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        showStep(currentStep);
    }
}

// Event listeners for button clicks
nextBtn.addEventListener("click", nextStep);
prevBtn.addEventListener("click", prevStep);

// Show the initial step
showStep(currentStep);
// Get the timeline items
const timelineItems = document.getElementsByClassName("timeline-item");

// Function to update the active step and timeline
function updateStep(stepIndex) {
    // Hide all steps
    for (let i = 0; i < steps.length; i++) {
        steps[i].classList.remove("active");
        timelineItems[i].classList.remove("active");
    }

    // Show the current step
    steps[stepIndex].classList.add("active");
    timelineItems[stepIndex].classList.add("active");

    // Update the buttons
    if (stepIndex === 0) {
        prevBtn.style.display = "none"; // Hide previous button on first step
    } else {
        prevBtn.style.display = "inline-block";
    }

    if (stepIndex === steps.length - 1) {
        nextBtn.innerHTML = "Submit"; // Change next button text on last step
    } else {
        nextBtn.innerHTML = "Next";
    }
}

// Function to go to the next step
function nextStep() {
    if (currentStep < steps.length - 1) {
        currentStep++;
        updateStep(currentStep);
    } else {
        // Perform form submission or validation here
        // Submit the form data
        // ...
    }
}

// Function to go to the previous step
function prevStep() {
    if (currentStep > 0) {
        currentStep--;
        updateStep(currentStep);
    }
}

// Event listeners for button clicks
nextBtn.addEventListener("click", nextStep);
prevBtn.addEventListener("click", prevStep);

// Event listeners for timeline item clicks
for (let i = 0; i < timelineItems.length; i++) {
    timelineItems[i].addEventListener("click", () => {
        updateStep(i);
    });
}

// Show the initial step and timeline
updateStep(currentStep);
