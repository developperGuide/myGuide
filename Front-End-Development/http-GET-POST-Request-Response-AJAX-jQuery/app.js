// Make document ready
$(document).ready(function() {
  //get div by id
  $data = $("#lists");

  //get fields by id
  $fname = $("#fname");
  $lname = $("#lname");

  // append to div  -- DRY
  function addUser(value) {
    $data.append(
      "Fname: " + value.first_name + " | Lname: " + value.last_name + "<br/>"
    );
  }

  // -------------------------------------- GET ---------------------------------------------------------------
  $.ajax({
    //Object of options
    type: "GET", // as default it is GET even if you do not add the type
    url: "https://reqres.in/api/users?page=2",
    success: function(data) {
      var getList = data.data;
      // console.log(getList);
      $.each(getList, function(key, value) {
        addUser(value);
      });
    },
    error: function() {
      console.log("Status: FAIL");
    }
  });

  // -------------------------------------- POST ------------------------------------------------

  //on button click we want to make a post
  $("#adduser").on("click", function() {
    // Assign value to object to send to BE
    var user = {
      first_name: $fname.val(),
      last_name: $lname.val()
    };

    $.ajax({
      type: "POST",
      url: "https://reqres.in/api/users",
      data: user, // store object here
      success: function(newUser) {
        // console.log(newUser);
        addUser(newUser);
      },
      error: function() {
        console.log("error");
      }
    });
  });
});
