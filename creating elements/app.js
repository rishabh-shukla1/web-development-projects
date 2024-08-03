

let create=document.createElement('div')

let foolandevi=document.createElement('div')

let arti=document.getElementById('arti')


create.innerHTML='hello guys'
foolandevi.innerHTML='foolandevi'

//appendchild

// arti.appendChild(create)// we can add only one element at a time


// append
// arti.append(create,foolandevi); //we can add more than one element at ones


//prepend -:add at the starting 

// arti.prepend(foolandevi,create)



// arti.appendChild('my name is rishabh')// text  is not alloowed in case of appendchild

arti.append(create,'my name is rishabh')// here text is allowed
arti.prepend('my name is rishabh')// here text is allowed


