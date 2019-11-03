$(document).ready(function() {
  //Event Binding

  // 1. click
  // 2. mouseover
  // 3. change ...

  // Methods
  /*
   1. slideToggle()
   2. fadeIn(2000)
   3. fadeOut()
   4. hide()
   5. show() ...
   6. html()
   7. find()

*/

  //Click event
  $("#btn1").on("click", function() {
    // $("#para1").slideToggle(2000);

    $("#para1")
      .fadeOut(2000)
      .fadeIn(3000);

    // $("#para1").hide(2000);
  });
    
    
    
});
