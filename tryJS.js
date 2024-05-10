const line = document.querySelector('h1');
let text = "Hello and Yourwelcome!";
let end = false;
let index = 1;

setInterval(() => {
    const showText = text.slice(0,index);
    if(!end){
        index++;
    }else{
        index--;
    }
    if(text.length <= index){
        end = true;
    }else if(index < 1){
        end = true;
    }
    line.innerHTML = showText;
},500)