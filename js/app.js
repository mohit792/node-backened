console.log('client side script');

const myForm = document.querySelector('form')
const search = document.querySelector('input')

myForm.addEventListener('submit' , (e)=>{
    console.log(search.value);
    e.preventDefault();
    console.log('testing');

})