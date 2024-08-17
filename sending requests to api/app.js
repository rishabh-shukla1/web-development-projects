
let ul=document.querySelector('ul')



// 1st method


let req=new XMLHttpRequest();


//CONNECTION BANA H BASICALLY
req.open('GET','https://inshorts.deta.dev/news?category=politics')


//BHEJNI H APNI REQUEST AUR DEMAND 


req.send();

// jab sahi se data mile or sara kam sahi se ho jae

req.onload=function(){
//  console.log('sam')

let samachar=JSON.parse(this.response)

console.log(samachar)

  for(item of samachar.data)
  {
    let li=document.createElement('li')
    li.innerHTML=`
    <img src=${item.imageUrl} height="100px">
    <span>${item.title}</span>
    `

    ul.appendChild(li)

  }

}

// agar koi error mil jae
req.onerror=function(){
    console.log(this)

}