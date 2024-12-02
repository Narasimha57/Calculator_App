let screen = document.querySelector('.screen');

    function appendValue(value) {
        screen.value += value; 
    }

    function performOperation(operation) {
        if (screen.value !== '') {
            screen.value+=operation; 
        }
    }

    function calculate() {
        if (screen.value !== '') {
            let result = eval(`${screen.value}`);
            screen.value = result; 
        }
    }

    function clearScreen() {
        screen.value = ''; 
    }

    function deleteLast() {
        screen.value = screen.value.slice(0, -1); 
    }