var designReact = 0;
var androidDotNet = 0;
var cssDesign = 0;
var cssReact = 0;
var cSharpDotNet = 0;
var javaAndroid = 0;


$(document).ready(function() {
  $("form#userinfo").submit(function(event) {
    event.preventDefault();
    var schoolCity = "Portland"
    var firstName = $("input#first-name").val();
    var lastName = $("input#last-name").val();
    var address = $("input#address").val();
    var apartment = $("input#apartment").val();
    var city = $("input#city").val();
    var state = $("select#state").val();
    var zipCode = $("input#zipcode").val();

    if (firstName && lastName && address && apartment && city && state && zipCode) {
      $("form#userinfo").hide();
      $("form#tracktracker").show();
      $("span#user-name").text(firstName);
      if (city.toUpperCase() !== "PORTLAND") {
        $("div#portland-housing").show();
      };
    } else {
      alert("Oops! You didn't complete the form! Try harder next time.")
    };
  });
  $("form#tracktracker").submit(function(event) {
    var input1 = $("input:radio[name=question1]:checked").val();
    var input2 = $("input:radio[name=question2]:checked").val();
    var input3 = $("input:radio[name=question3]:checked").val();
    var input4 = $("input:radio[name=question4]:checked").val();
    var input5 = $("input:radio[name=question5]:checked").val();
  });
});
