/*zin jsvaScript, "QuerySelector" is a method that allows you to 
select elements from the html document using css-style selectors it's a part of the document object Model (DOM)
API,which provides methods and properties for intracting width html documents*/

 /*menu .addEventListener('click',function(){.....});

     this line adds an event listener to the "menu" element.
     it listens for a 'click' event and when the event occurs,it executes 
     the function defined inside */

/* menu.classList.toggle('is-active')  
this line toggles the class "is-active" on the menu element*/

/*menulinks.classlist.toggle('active');
this line toggles the class"active"on the menulinks element*/

     const menulinks=document.querySelector('.navbar_menu');        
     const menu=document.querySelector('#mobile_menu');
    menu.addEventListener('click',function(){
       // menulinks.classList.toggle('active');
        menulinks.classList.toggle('navbar');
         
        menu.classList.toggle('is')
    });
    