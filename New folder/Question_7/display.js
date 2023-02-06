function check() {
    document.getElementById('pay-now').addEventListener('click', () => {
        document.getElementById('date').style.visibility = 'visible';
    });

    document.getElementById('pay-later').addEventListener('click', () => {
        document.getElementById('date').style.visibility = 'hidden';
    });
}