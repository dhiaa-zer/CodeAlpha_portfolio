
document.addEventListener('DOMContentLoaded',function(){
   
   let menu= document.querySelector('.links');
   const mybtn = document.getElementById('menu-btn');
   let image = document.querySelector('#menu-btn img') ;
   let state=0;
   let contact=document.getElementById('Contact') ;
   let myLinks=document.querySelectorAll('.links a');
   let activelink=document.querySelector('.active') ;
   const sections = document.querySelectorAll('section');
   const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
  };
  let barspan=document.querySelectorAll('.bar span') ;

  
  function changeIcon(){
     if(state==0){
       image.src="icons/close-x.svg" ;
      state=1;
     }
     else{
      image.src="icons/burger-menu-svgrepo-com.svg" ;
      state=0;
     }
  }

  function display_menu(){
     if(state==1){
       menu.style.display='flex';
     }
     else{
      menu.style.display='none'
     }
     
   }
   
   function checksize(){
      if(window.innerWidth>1050){
         menu.style.display='flex';
      }
      else{
         menu.style.display='none';
      }
   }
 
    function changeLink(link){
       

      activelink.classList.remove('active') ;
      link.classList.add('active');
      activelink=link;
      
    }


    function observerCallback(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                const correspondingLink = document.querySelector(`a[href="#${id}"]`);
                
                if(id==='skills'){
                  
                  barspan.forEach((bar)=>{
                    bar.style.animationPlayState ='running' ;
                  }) ;
                }
                

                if (correspondingLink) {
                    changeLink(correspondingLink);
                }
            }
        });
    }






    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => {
        observer.observe(section);
    });



   

   myLinks.forEach((link)=>{
      link.addEventListener('click' , ()=>{
      changeLink(link);
  });
   })


   contact.addEventListener('click' , (e)=>{
      e.preventDefault();

      document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
      changeLink(contact.querySelector('a'));
   });

   window.addEventListener('resize',()=>{
      checksize();
   })

  mybtn.addEventListener('click',()=>{
     changeIcon();
     display_menu();
  });
  
   
  checksize();
});
