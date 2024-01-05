function Reserve() {
    let tarrotChoose = document.getElementById('tarrot-select').value;
    let constChoose = document.getElementById('const-select').value;
    let intTarrotChoose = parseInt(tarrotChoose, 10);
    let intConstChoose = parseInt(constChoose, 10);
    let tarrotTotal = intTarrotChoose * 30;
    let constTotal = intConstChoose * 20;

    if (intTarrotChoose === 0 && intConstChoose === 0) {
        alert("You can't order 0 items for both Tarot and Constellation");
    } else {
        // Store the values in local storage
        localStorage.setItem('tarrot-select', intTarrotChoose);
        localStorage.setItem('const-select', intConstChoose);

        // Redirect to chart.html
        window.location.href = 'chart.html';
    }
}