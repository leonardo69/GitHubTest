(function f() {
    window.onload = function() {
        let clickButton = document.getElementById('click');
        clickButton.onclick = function(event) {
            console.log('atata');
            let firstNumber = document.getElementById('f1').value;
            let secondNumber = document.getElementById('f2').value;
            document.getElementById('result').innerText = +firstNumber + +secondNumber;
        }
    }
})();
