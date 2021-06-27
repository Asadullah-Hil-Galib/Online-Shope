// -------NAVBAR SCRIPT FOR ALL PAGES-------
var menuItems = document.getElementById('menuItems')
menuItems.style.maxHeight = '0px'

function headMenuToggle() {
    if(menuItems.style.maxHeight == '0px')
    {
      menuItems.style.maxHeight = '200px'
    } else {
        menuItems.style.maxHeight = '0px'
    }
}



/*  -- JS FOR TOGGLE FORM IN ACCOUNT PAGE --  */
   var loginForm = document.getElementById('LoginForm');
   var regForm = document.getElementById('RegForm');
   var indicator = document.getElementById('indicator');

   function register() {
       regForm.style.transform = 'translateX(0px)';
       loginForm.style.transform = 'translateX(0px)';
       indicator.style.transform = 'translateX(100px)';
   };
   function login() {
       regForm.style.transform = 'translateX(300px)';
       loginForm.style.transform = 'translateX(300px)'
       indicator.style.transform = 'translateX(0)'
   };