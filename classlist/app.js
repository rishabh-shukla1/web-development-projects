

let sam=document.querySelector('article')

sam.classList.add('sam')

sam.classList.add('samarth','neha','maniket')

sam.classList.add('changumangu') // that is why class list is better because we not need to remember previous classes for it inorder to add new//
sam.classList.remove('neha') // 2-remove


// toggle classlist

sam.classList.toggle('toggle')// true

sam.classList.toggle('toggle')//false


//contains classlist


console.log(sam.classList.contains('neha'));// false
console.log(sam.classList.contains('sam'))//true