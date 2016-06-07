jQuery(function($){

  // tabs
  var tabs = $(".tabs").find("a");
  var tabsContent = $(".tabs-content").find(".tabs-container");
  tabs.on('click', function(event) {
    event.preventDefault();
    $(this).addClass('active').siblings().removeClass('active');
    var index = tabs.index($(this));
    tabsContent.eq(index).addClass('active').siblings().removeClass('active');    
  });

  // order-service+
  var orderServiceButtom = $(".order-service-buttom");
  var body = $("body");
  orderServiceButtom.on('click', function(event) {
    event.preventDefault();
    body.addClass('order-service-active');
  });
  var orderService = $(".order-service");
  var orderServiceContainer = $(".order-service-container");
  orderService.on('click', function(event) {
    console.log(event);
    if (event.target.className == "order-service") {
      body.removeClass('order-service-active');
    };
  });
  var orderServiceClose = $(".order-service-close");
  orderServiceClose.on('click', function(event) {
    event.preventDefault();
      body.removeClass('order-service-active');
  });

  // drawn-up
  var callBackButtom = $(".call-back-buttom");
  callBackButtom.on('click', function(event) {
    event.preventDefault();
    body.addClass('drawn-up-active');
  });
  var cancel = $(".cancel");
  cancel.on('click', function(event) {
    event.preventDefault();
    body.removeClass('drawn-up-active');
  });
  var drawnUp = $(".drawn-up");
  drawnUp.on('click', function(event) {
    event.preventDefault();
    body.removeClass('drawn-up-active');    
  });
  var drawnUpContainer = $(".drawn-up-container");
  drawnUpContainer.on('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
  });

});
