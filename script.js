let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');
let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let btnText = e.target.innerHTML;
        
        if (btnText === "=") {
            try {
                string = eval(string);
            } catch (error) {
                string = 'Error';
            }
            input.value = string;
        } else if (btnText === 'AC') {
            string = '';
            input.value = string;
        } else if (btnText === 'C') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += btnText;
            input.value = string;
        }
    });
});
