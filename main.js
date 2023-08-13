const body = document.querySelector('body'),
 input1 = document.querySelector('.green-input'),
 input2 = document.querySelector('.red-input')
   const btn1 = document.querySelector('.btn1') ;
   const changebackground = () => {
      const hexval = Math.floor(Math.random() * 0xffffff ). toString(16);
      document.body.style.background = `#${hexval}`;



   }

   btn1.addEventListener ('click' , changebackground ) ;

  //background: linear-gradient(to right , green , red);
 function setbackgroundtobody(){

    body.style.background = `linear-gradient(to right , ${input1.value} , ${input2.value})`

 }
 input1.addEventListener( 'input' , setbackgroundtobody ) 
 input2.addEventListener( 'input' , setbackgroundtobody )
 

//  function changbackgroundcolor(){

//    document.body.style.backgroundColor = 'rgb(' + math.round(math.rondom () * 255 ) + ',' + 'rgb(' + math.round(math.rondom () * 255 ) 
//    + ',' + 'rgb(' + math.round(math.rondom () * 255 ) +')';

//  }