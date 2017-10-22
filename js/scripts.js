$(document).ready(function() {

  var cssDesign = 0;
  var cssReact = 0;
  var cSharpDotNet = 0;
  var javaAndroid = 0;
  var city;

  $("form#userinfo").submit(function(event) {
    event.preventDefault();
    var firstName = $("input#first-name").val();
    var lastName = $("input#last-name").val();
    var address = $("input#address").val();
    var apartment = $("input#apartment").val();
    var state = $("select#state").val();
    var zipCode = $("input#zipcode").val();
    city = $("input#city").val();

    if (firstName && lastName && address && city && state && zipCode) {
      $("form#userinfo").hide();
      $("form#tracktracker").show();
      $("span.user-name").text(firstName);
    } else {
      alert("Oops! You didn't complete the form! Try harder next time.")
    };
  });

  $("form#tracktracker").submit(function(event) {
    event.preventDefault();
    var input1 = $("input:radio[name=question1]:checked").val();
    var input2 = $("input:radio[name=question2]:checked").val();
    var input3 = $("input:radio[name=question3]:checked").val();
    var input4 = $("input:radio[name=question4]:checked").val();
    var input5 = $("input:radio[name=question5]:checked").val();

    if (input1 && input2 && input3 && input4 && input5) {
      $("form#tracktracker").hide();

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
        $("div#cssdesign").show();
      } else if (cSharpDotNet >= 3) {
        $("div#csharpdotnet").show();
      } else if (javaAndroid >= 3) {
        $("div#javaandroid").show();
      } else if (cssReact >= 3) {
        $("div#cssreact").show();
      } else {
        $("div#pickany").show();
      };

      if (city.toUpperCase() !== "PORTLAND") {
        $("div#portland-housing").show();
      };

    } else {
      alert("Oops! You didn't answer all the questions! Do better next time.");
    };
  });
});
