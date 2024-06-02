


// Add an event listener to the hamburger menu button
document.querySelector('.bar').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('nav ul').classList.toggle('active');
  });


let header=document.querySelector('.header')
let toggleMenu=document.querySelector('.header')
const toggle =(e)=>{
    toggleMenu.classList.toggle('active')
}


toggleMenu.addEventListener('click',toggle)



//sticky navbar code  

window:addEventListener('scroll',()=>{
    if(window.scrolly>50){
        header.classlist.add('sticky')
    }
    else{
        header.classlist.remove('sticky')
    }
}
)