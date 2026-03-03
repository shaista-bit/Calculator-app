//.......................calculater app....................
//.....steps
// selecting elements
//addEventListener on every btn & get its value and store it into a variable(string)...now that variable.value will store into input (display) variable
let display = document.getElementById('input');
let buttons = document.querySelectorAll('button');
let operator = document.querySelectorAll('.operator');


// converting node list of buttons to an arry
let btnArry = Array.from(buttons);
z
let string = '';
//apply forEach loop on 'buttons arry' to get every single btn & apply addEventListener on that every btn
btnArry.forEach(btn => {
    btn.addEventListener('click', (e) => {// e is event object 
        /* e.target.textContent
        string = string.substring(0,string.length-1)
        display.value = string;*/ // apply this code on btn using if else 
        if (e.target.textContent == 'DEL') {// 'e.target' is the elem that is clicked & also get its textContent... after it,  we stored that textContent  into a string variable ...(jis bhe button pr click keya jayy ga uske text string veriable main store ho jayy ge  )
            string = string.substring(0, string.length - 1)//by clicking on 'DEL' btn ...=> substring()method delete dialed numbers one by one
            display.value = string;
        } else if (e.target.textContent == 'AC') {
            string = ''// it will make the input field blank
            display.value = string;
        }
        else if (e.target.textContent == '=') {
            string = eval(string) //eval() inbuilt function in math,...it convert string to number, calculate ang give the output
            display.value = string;
        } else {
            string += e.target.textContent
            display.value = string;// now that string will display into input field 
        }z
    })
});

