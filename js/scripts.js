$(document).ready(function() {
  $("form#userinfo").submit(function(event) {
    event.preventDefault();
    var firstName = $("input#first-name").val();
    var lastName = $("input#last-name").val();
    var address = $("input#address").val();
    var apartment = $("input#apartment").val();
    var city = $("input#city").val();
    var state = $("select#state").val();
    var zipCode = $("input#zipcode").val();
    // alert(firstName);
    // alert(lastName); // FOR TESTING PURPOSES
    // alert(address);
    // alert(apartment);
    // alert(city);
    // alert(state);
    // alert(zipCode);
    if (firstName && lastName && address && apartment && city && state && zipCode) {
      $("form#userinfo").hide();
      $("form#tracktracker").show();



    } else {
      alert("Please")
    };
  });
});
