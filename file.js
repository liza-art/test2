const dialog = document.querySelector('dialog');
const close =  document.getElementById('close');
document.getElementById('show').addEventListener('click', ()=>{
    dialog.showModal();
});

close.addEventListener('click', ()=>{
    dialog.close();
});