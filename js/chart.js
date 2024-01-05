let emailBody = "";
document.addEventListener('DOMContentLoaded', function () {
    // Retrieve values from local storage
    var selectedIndexTarrot = localStorage.getItem('tarrot-select');
    var selectedIndexConst = localStorage.getItem('const-select');

    // Display the selected values in the appropriate elements
    var tarrotDisplay = document.getElementById('tarrot-display');
    tarrotDisplay.textContent = selectedIndexTarrot;

    var constDisplay = document.getElementById('const-display');
    constDisplay.textContent = selectedIndexConst;

    // Calculate and display total values
    var tarrotTotal = selectedIndexTarrot * 30;
    var constTotal = selectedIndexConst * 20;
    let totalOrder = tarrotTotal + constTotal;

    var totalTarotElement = document.getElementById('total-tarrot');
    totalTarotElement.textContent = tarrotTotal + "PLN";

    var constTotalElement = document.getElementById('total-const');
    constTotalElement.textContent = constTotal + "PLN";

    let totalCost = document.getElementById('total-cost');
    totalCost.textContent = "Your Total is : " + totalOrder + "PLN"

    let emailBody = "Hello You have order of Tarrot reading"

    sendEmail(emailBody);
    
});

function sendEmail(){
    const to = 'recipient@example.com';
      const subject = 'Reservation Order';
      const content = emailBody;

      const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(content)}`;
    }