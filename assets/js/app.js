
var icon=document.querySelector('.cart_icon')
var cartOder=document.querySelector('.cart_icon')
var header = document.querySelector(".header");

var oderImg=document.querySelector(".oder_image")

i=2;
let cart=[]

function add(){
    document.querySelector('.number').textContent=i++;
}

function minus(){
    if(document.querySelector('.number').textContent==1){
        return document.querySelector('.number').textContent=1;
    }
    document.querySelector('.number').textContent=--i;
    
   
}

function addToCart(){
    let art=document.querySelector(".article").textContent
    let amount=document.querySelector('.number').textContent
    cart.push(art, amount)
    alert( `Товар ${art} в количестве ${amount} шт. добавлен в корзину`)
    icon.style.display="block"
    cartOder.addEventListener("mouseover", function( event ) {
        alert( `Заказано по ${art} - ${amount} шт.`)
    })
  
}

window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    if (scrolled >= 600) {
        header.style.display="none"
    }else if (scrolled >= 100){
        header.style.opacity="0.3"
    }
    else if (scrolled >= 10){
        header.style.opacity="0.6"
    } else {
        header.style.opacity="1"
        header.style.display="block"
    }
});


    let div = document.querySelectorAll('.oder_image--small')
    let mainImage=document.querySelector('.oder_image--main')
    
    Array.from(document.querySelectorAll('.oder_image--small')).forEach((item) => {
        item.addEventListener('click', (e)=>{
        
          var attribute=e.target.getAttribute('src')
          mainImage.setAttribute('src', attribute)
                
        });
      });

      function validMail() {
        let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
        let myMail = document.querySelector('.mail').value;
        let valid = re.test(myMail);
        if (!valid){
            alert('Адрес электронной почты введен неправильно!')
        }
        /*document.querySelector('message').innerHTML = output;*/
        /*return valid;*/
    }
