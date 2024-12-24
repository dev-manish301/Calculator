let btns = document.querySelectorAll("button");

let result = ""
for (const btn of btns) {
    btn.addEventListener("click",()=>{
        calculation(btn)
    });
};


const calculation = (btn) =>{
    let input = document.querySelector("input");
    if(btn.innerText == "AC"){
        result = ""
        input.value = result;
    }else if(btn.innerText == "←"){
        result = result.substring(0,result.length-1);
        input.value = result;
    }else if(btn.innerText == "="){
        result = eval(result);
        input.value = result;
    }
    else{
        result = result + btn.innerText;
        input.value = result;
    }
};


