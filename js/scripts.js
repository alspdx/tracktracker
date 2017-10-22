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

    var input1 = $("input:radio[name=question1]:checked").val();
        input2 = $("input:radio[name=question2]:checked").val();
        input3 = $("input:radio[name=question3]:checked").val();
        input4 = $("input:radio[name=question4]:checked").val();
        input5 = $("input:radio[name=question5]:checked").val();

    if (input1 && input2 && input3 && input4 && input5) {
      $("form#tracktracker").slideUp();

      if (input1 === "designreact") {
        cssDesign += 1;
        cssReact += 1;
      } else if (input1 === "androiddotnet") {
        cSharpDotNet += 1;
        javaAndroid += 1;
      };

      if (input2 === "cssdesign") {
        cssDesign += 1;
      } else if (input2 === "csharpdotnet") {
        cSharpDotNet += 1;
      } else if (input2 === "javaandroid") {
        javaAndroid += 1;
      } else if (input2 === "cssreact") {
        cssReact += 1;
      };

      if (input3 === "cssdesign") {
        cssDesign += 1;
      } else if (input3 === "csharpdotnet") {
        cSharpDotNet += 1;
      } else if (input3 === "javaandroid") {
        javaAndroid += 1;
      } else if (input3 === "cssreact") {
        cssReact += 1;
      };

      if (input4 === "cssdesign") {
        cssDesign += 1;
      } else if (input4 === "csharpdotnet") {
        cSharpDotNet += 1;
      } else if (input4 === "javaandroid") {
        javaAndroid += 1;
      } else if (input4 === "cssreact") {
        cssReact += 1;
      };

      if (input5 === "cssdesign") {
        cssDesign += 1;
      } else if (input5 === "csharpdotnet") {
        cSharpDotNet += 1;
      } else if (input5 === "javaandroid") {
        javaAndroid += 1;
      } else if (input5 === "cssreact") {
        cssReact += 1;
      };

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

    } else {
      alert("Oops! You didn't answer all the questions! Do better next time.");
    };
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
