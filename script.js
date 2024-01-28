function calculateBudget() {
    // Fetch Values from Input Fields
    const startDate = new Date(document.getElementById("startDate").value);
    const endDate = new Date(document.getElementById("endDate").value);
    const remainingBudget = parseFloat(document.getElementById("remainingBudget").value);
    
    // Calculate Remaining Days
    const oneDay = 24 * 60 * 60 * 1000; // Hours*minutes*seconds*milliseconds
    const remainingDays = Math.round((endDate - startDate) / oneDay) + 1;  // Add 1 to include the start day

    // Calculate Per Day Budget
    const perDayBudget = remainingBudget / remainingDays;

    // Calculate Per Day Budget Flight Ahead
    const perDayBudgetFlightAhead = perDayBudget * 1.20;

    // Display Results
    document.getElementById("resultRemainingDays").textContent = remainingDays;
    document.getElementById("resultPerDayBudget").textContent = perDayBudget.toFixed(2); // Rounded to 2 decimal places
    document.getElementById("resultPerDayBudgetFlightAhead").textContent = perDayBudgetFlightAhead.toFixed(2);
}
