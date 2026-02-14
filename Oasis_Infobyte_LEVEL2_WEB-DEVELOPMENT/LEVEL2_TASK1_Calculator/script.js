const currDisplay = document.getElementById('curr-display');
const prevDisplay = document.getElementById('prev-display');
const buttons = document.querySelectorAll('.btn-grid button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const action = button.innerText;
        const id = button.id;

        if (id === 'clear-btn') {
            currDisplay.innerText = '0';
            prevDisplay.innerText = '';
        } 
        else if (id === 'del-btn') {
            currDisplay.innerText = currDisplay.innerText.slice(0, -1) || '0';
        } 
        else if (id === 'equals') {
            try {
                let expression = currDisplay.innerText
                    .replace(/x/g, '*')
                    .replace(/÷/g, '/')
                    .replace(/√/g, 'Math.sqrt');
                
                prevDisplay.innerText = currDisplay.innerText;
                currDisplay.innerText = eval(expression);
            } catch {
                currDisplay.innerText = "Error";
            }
        } 
        else {
            if (currDisplay.innerText === '0') {
                currDisplay.innerText = action;
            } else {
                currDisplay.innerText += action;
            }
        }
    });
});