let screen=document.getElementById('text');
let buttons=document.querySelectorAll('.button', '.op');
let temp='';
for(item of buttons)
{  item.addEventListener('click',(e)=>{
     buttonText = e.target.innerText;
     
     if(buttonText== '=')
     {  
        screen.value=eval(temp);
     }
     else if(buttonText=='C' )
     {
        screen.value='';
        temp='';
     }
     else{
        temp+=buttonText;
        screen.value=temp;
     }
})  
    
}