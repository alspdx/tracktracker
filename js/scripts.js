$(document).ready(function() {

  var city;

  $("form#userinfo").submit(function(event) {
    event.preventDefault();
    var firstName = $("input#first-name").val();
        lastName = $("input#last-name").val();
        address = $("input#address").val();
        apartment = $("input#apartment").val();
        state = $("select#state").val();
        zipCode = $("input#zipcode").val();

    city = $("input#city").val();

    if (firstName && lastName && address && city && state && zipCode) {
      $("form#userinfo").slideUp();
      $("form#tracktracker").slideDown();
      $("span.user-name").text(firstName);
    } else {
      alert("Oops! You didn't complete the form! Try harder next time.")
    };
  });

  $("form#tracktracker").submit(function(event) {
    event.preventDefault();

    var cssDesign = 0;
        cssReact = 0;
        cSharpDotNet = 0;
        javaAndroid = 0;
        input1 = $("input:radio[name=question1]:checked").val();
        input2 = $("input:radio[name=question2]:checked").val();
        input3 = $("input:radio[name=question3]:checked").val();
        input4 = $("input:radio[name=question4]:checked").val();
        input5 = $("input:radio[name=question5]:checked").val();

    if (input1 && input2 && input3 && input4 && input5) {
      $("form#tracktracker").slideUp();
    } else {
      alert("Oops! You didn't answer all the questions! Do better next time.");
    };

    var userChoices = [input1, input2, input3, input4, input5];

    userChoices.forEach(function(userChoice) {
      if (userChoice === "designreact") {
        cssDesign += 1;
        cssReact += 1;
      } else if (userChoice === "androiddotnet") {
        cSharpDotNet += 1;
        javaAndroid +=1;
      } else if (userChoice === "cssdesign") {
        cssDesign += 1;
      } else if (userChoice === "csharpdotnet") {
        cSharpDotNet += 1;
      } else if (userChoice === "javaandroid") {
        javaAndroid += 1;
      } else if (userChoice === "cssreact") {
        cssReact += 1;
      };
    });

    if (cssDesign >= 3) {
      $("div#cssdesign").fadeIn();
    } else if (cSharpDotNet >= 3) {
      $("div#csharpdotnet").fadeIn();
    } else if (javaAndroid >= 3) {
      $("div#javaandroid").fadeIn();
    } else if (cssReact >= 3) {
      $("div#cssreact").fadeIn();
    } else {
      $("div#pickany").fadeIn();
    };

    if (city.toUpperCase() !== "PORTLAND") {
      $("div#portland-housing").slideDown();
    };

    $("button#form-reset").fadeIn();

  });

  $("button#form-reset").click(function() {
    $("form#tracktracker").slideDown();
    $("div#cssdesign").fadeOut();
    $("div#csharpdotnet").fadeOut();
    $("div#javaandroid").fadeOut();
    $("div#cssreact").fadeOut();
    $("div#pickany").fadeOut();
    $(this).fadeOut();
  });
});
