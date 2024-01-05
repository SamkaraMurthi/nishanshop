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
    totalCost.textContent = "Your Total is : " + totalOrder + "PLN";
});

// Add an event listener to the "Make a Reservation" button
document.getElementById('btn-div3').addEventListener('click', function() {
    // Retrieve values from local storage
    var selectedIndexTarrot = localStorage.getItem('tarrot-select');
    var selectedIndexConst = localStorage.getItem('const-select');
    var tarrotTotal = selectedIndexTarrot * 30;
    var constTotal = selectedIndexConst * 20;
    let totalOrder = tarrotTotal + constTotal;

    // Construct the email body
    let emailBody = "Tarrot Reading with " + selectedIndexTarrot + " Session" + "\n" + "Consultation with " + selectedIndexConst + " Session\n The total is " + totalOrder + "PLN";

    // Call the sendEmail function
    sendEmail(emailBody);
});

// Function to send the email
function sendEmail(emailBody){
    let name = document.getElementById('fullname').value;
    let phone = document.getElementById('phonenumber').value;
    let selectedDate = document.getElementById('datepick').value;
    let dateString = String(selectedDate);
    let msg = name + "\n" + phone + "\n" + "Ordered :";
    let msgFooter = "Please Reply this Email to Confirm the Availability of the Date I have Picked\n Thank you \n" + name;
    const to = 'nicomusicwriter@gmail.com';
    const subject = 'Reservation Order';
    const content = msg + "\n" + emailBody + "\nDate Picked : " + dateString + "\n " +  msgFooter;

    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(content)}`;

    if(name === ""){
        alert("you have to fill your fullname");
    } else if(dateString === ""){
        alert("Please Pick a date of reservation");
    } else if(phone === ""){
        alert("you have to fill your phone number");
    }
    else{
        window.location.href = mailtoLink;
    }
}
