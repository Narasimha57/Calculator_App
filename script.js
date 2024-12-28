let mycalculator = document.querySelector('.select');

    function appendValue(value) {
        mycalculator.value += value; 
    }

    function performOperation(operation) {
        if (mycalculator.value !== '') {
            mycalculator.value+=operation; 
        }
    }

    function calculate() {
        if (mycalculator.value !== '') {
            let result = eval(`${mycalculator.value}`);
            mycalculator.value = result; 
        }
    }

    function clearScreen() {
        mycalculator.value = ''; 
    }

    function deleteLast() {
        mycalculator.value = mycalculator.value.slice(0, -1); 
    }