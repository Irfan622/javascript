let add=document.getElementById('add');


add.addEventListener('click', (e)=>{
    e.preventDefault();
    let nam=document.getElementById('form0').value;
    let ph=document.getElementById('form1').value;
    let city=document.getElementById('form2').value;
   let table_body=document.getElementById('tbody');
   let new_row=document.createElement('tr');
   new_row.innerHTML+=
     `<tr class="bdr">
         <td class="bdr">${nam}</td>
         <td class="bdr">${ph}</td>
         <td class="bdr">${city}</td>
         <td class="bdr"><button class="delete_row_btn">delete</button></td></tr>`;
   table_body.appendChild(new_row);
    delete_row();
    nam=document.getElementById('form0').value='';
    ph=document.getElementById('form1').value='';
    city=document.getElementById('form2').value='';
       

}
);

function delete_row(){
let del=document.getElementsByClassName('delete_row_btn');
Array.from(del).forEach((item)=> {
item.addEventListener('click',(e)=>{
  item.closest('tr').remove();
});
});
}

let toggle_font=document.querySelector('#toggle');
toggle_font.addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector("body")
    .classList.toggle("secondFont");
    
}
);
let toggle_border=document.querySelector('#tgl_bdr');
toggle_border.addEventListener('click', (e)=>{
    e.preventDefault();
    document.querySelector("table")
    .classList.toggle("bdr");
    
}
);