

// let form=document.querySelector('form')

// form.addEventListener('submit',function(event)
// {
//     event.preventDefault()// it prevent the default behaviours
//     console.log('submit ho gaya')
// })



// it prevent the refreshing behaviours of the form 


// accesing the elements of the form 


let form=document.querySelector('form')

form.addEventListener('submit',function(event)

{
    event.preventDefault();
    // console.log(form.elements)
    console.log(form.elements[0].value);
    console.log(form.elements[1].value);
})