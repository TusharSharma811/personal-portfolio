const light_btn = document.getElementById("light-span") ;
const dark_btn = document.getElementById("dark-mode-btn") ;
const container = document.getElementsByClassName("container") 
const list_elem = document.getElementsByClassName("list-elem")
dark_btn.addEventListener('click' , ()=>{
    if(document.getElementsByTagName("body")[0].classList.contains("dark")){
        document.getElementsByTagName("body")[0].classList.toggle("dark") ;
        for (let i = 0; i < container.length; i++) {
            container[i].classList.toggle("dark") ;
         }
         for (let i = 0; i < list_elem.length; i++) {
            list_elem[i].style.color = "black" ;
            list_elem[i].classList.toggle("dark-elem") ;
         }
         document.getElementsByClassName
        light_btn.innerText = "Dark" 
    }
    else{
        document.getElementsByTagName("body")[0].classList.toggle("dark") ;
        for (let i = 0; i < container.length; i++) {
            container[i].classList.toggle("dark") ;
         }
         for (let i = 0; i < list_elem.length; i++) {
            list_elem[i].style.color = "white" ;
            list_elem[i].classList.toggle("dark-elem") ;
            
         }
        light_btn.innerText = "Light" 
    }
    
})
gsap.to(
    "div.info-box h1" ,{
   
        opacity : 1 ,
        delay : 0.4 ,
        duration : 0.8
    }
)
    

gsap.from(
    ".project-cards" , {
        opacity : 0 ,
        x : 300 ,
        duration : 1.2 ,
        stagger : true ,
        scrollTrigger:{
            trigger : ".project-cards" ,
            start : "top 80%" ,
            end : "top 30%" ,
         
            scrub : true
        }
    }
)
gsap.from(
    ".box-3" , {
        opacity : 0 ,
        x : -300 ,
        duration : 1.5 ,
        delay : 0.4 ,
        stagger : true ,
        scrollTrigger:{
            trigger : ".box-3" ,
            start : "top 80%" ,
            end : "top 30%" ,
         
            scrub : true
        }
    }
)