let display = document.getElementById("display");

let buttons = document.querySelectorAll("button");

buttons.forEach(button => {

button.onclick = () => {

    let value = button.innerText;

    if(value=="C"){
        display.innerText="0";
    }

    else if(value=="="){
        try{
            display.innerText = eval(display.innerText);
        }
        catch{
            display.innerText="Error";
        }
    }

    else{
        if(display.innerText=="0")
            display.innerText=value;
        else
            display.innerText += value;
    }

}

});
