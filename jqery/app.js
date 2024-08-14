
                                      // SELECTIONG ELEMENTS
// tag
// console.log( $('h1'))


// by class name

// console.log($('.sam'))


//by id

// console.log($('#rish'))      // the first occured id will be selected


 
                               //MANIPULATING CSS

                               //.CSS IN JQUERY

//  $('h1').css('color','blue')
//  $('h1').css('background','pink')       


// multiple properties together

// $('h1').css({
//     color:'red',

//     backgroundColor : 'plum'
// })


// acess and modify text we can use .text which work same as text content in dom
// console.log($('p').text()) // work as a   textContent in dom 


// console.log($('p').html('<em>Rishabh Shukla</em>'))// ye em tag aur bhi baki sare .html se kam kar jaege but not 
//but not with .text('as everthing written inside this is a text only')

// console.log($('p').text('<em>Rishabh Shukla</em>')) // text Content---->work as innerHtml in dom 


// console.log($('p').html())


// manipulating attributes

// console.log($('a').attr('href')) // it act as getter


// $('a').attr('href','http://bing.com') /// it act as both setter as well as getter



///////////////////////////////////////   SELECTING A PARTICULAR ELEMENT OUT OF ALL ELEMENTS


// $('h1:nth-of-type(4)').css('border','2px solid black')
// $('h1:first()').css('border','2px solid black')
// $('h1:last()').css('border','2px solid black')


//$('h1').last().css('border','5px solid red')// alternative way


// $('h1').first().css('border','5px solid red')// alternative way



//////////////////////////////////////////////   GETTING VALUES OF INPUTS


// console.log($('input').val())// we can get the value 



// we can manipulate the value by writing a text inside the .val() so it act as both getter and setter function 





// manipulating class attributes



///////////////////////////////////////////// ADD CLASS

// $('h1').first().addClass('first')
// $('h1').first().addClass('first second sam')  // multiple add bhi kar sakte h 
 
/////////////////////////////////////////////REMOVE CLASS
// $('h1').first().removeClass('second')
// $('h1').first().removeClass('second first')// multiole remove bhi kar sakte h 


///////////////////////////////////TOGGLE CLASS
// $('h1').first().toggleClass('second')

// $('h1').first().toggleClass('second first') // mutilple toggle can be done at sam place only


//////////////////////////////////    Has Class

// $('h1').first().hasClass('first')



/////////////////////////////         Events


// $('button').click(function(){
//     console.log("daba diya")
// })



//**************New Concept (this) but  it is different from the js part  it it of j query */


// $('li').click(function()
// {
//     $(this).css('color','red')     // make sure never use arrow function 
// })



// input

// $('input').keyup(function()
// {
//     console.log($(this).val())
// })



//  addEventListener --------------------------------------->on




// $('button').on('click',function(){

//     console.log('hi')

// })


// $('input').keypress(function(e){

//     if(e.which===13)
//     {
//         console.log($(this).val())
//     }

    
// })


//*****************************************************EFFECTS****************************************************



// $('#fadeout').click(function()
// {
//     $('#container').fadeOut()
// })

// $('#fadein').click(function()
// {
//     $('#container').fadeIn()
// })

// $('#fadetoggle').click(function()
// {
//     $('#container').fadeToggle()
// })





















 




