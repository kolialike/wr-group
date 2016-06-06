jQuery(function($){

  var body = $("body");
    //menu
  var menuBurger = $(".menu-burger");
  menuBurger.on('click', function(event) {
  	event.preventDefault();
  	body.toggleClass('mobile-menu-open');
  });
  var mobileMenu = $(".mobile-menu");
  mobileMenu.on('click', function(event) {
  	event.preventDefault();
  	body.removeClass("mobile-menu-open");
  });
  var mobileMenuItem = $(".mobile-menu-item");
  mobileMenuItem.on('click', function(event) {
  	event.stopPropagation();
  });
});
