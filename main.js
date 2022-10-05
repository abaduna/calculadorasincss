const display = document.querySelector("#display")
const btns = document.querySelectorAll("button")

btns.forEach((item)=>{
    item.onclick=()=>{
        if (item.id == clear) {
            display.innerText == 0
        }else if (item.id == backspace){
            let  string = display.innerText.toString();
            display.innerText= "string.substr(0,string.length - 1 )"
        }else if (display.innerText !="" && item.id == "=" ){
           display.innerText = eval(display.innerText)
           
        }else if (display.innerText !="" && item.id == "="   ){
            display.innerText = "Null"
            setTimeout(()=>display.innerText="",3000)
         }else{
            display.innerText += item.id
         }
        

    }
})