$(document).ready(function() {
  $("form.vacation").submit(function(event) {
    var sunny = $("select#sunny").val();
    var rivers = $("select#rivers").val();
    var beaches = $("select#beaches").val();
    var bigCities = $("select#bigCities").val();
    var gambling = $("select#gambling").val();

    // hide everything on refresh
    $(".result-row").hide();
    $(".location").hide();
    $(".textBelow").show();
    // hide text that appears on only one 'yes' answer
    $(".gambling").hide();
    // $(".no").hide();  NOT WORKING

    // All "yes"
    if ((sunny === "yes") && (rivers === "yes") && (beaches === "yes") && (bigCities === "yes") && (gambling === "yes")) {
      $(".hawaii").show();
      $(".sanfran").show();
  // All "no"
    } else if ((sunny === "no") && (rivers === "no") && (beaches === "no") && (bigCities === "no") && (gambling === "no")) {
      $(".no").show();
      $(".syria").show();
      $(".mordor").show();
  // Sunny only "yes"
    } else if ((sunny === "yes") && (rivers === "no") && (beaches === "no") && (bigCities === "no") && (gambling === "no")) {
      $(".hawaii").show();
  // Rivers only "yes"
    } else if ((sunny === "no") && (rivers === "yes") && (beaches === "no") && (bigCities === "no") && (gambling === "no")) {
      $(".colorado").show();
  // Beaches only "yes"
    } else if ((sunny === "no") && (rivers === "no") && (beaches === "yes") && (bigCities === "no") && (gambling === "no")) {
      $(".hawaii").show();
      $(".sanfran").show();
      $(".monteCarlo").show();
  // City only "yes"
    } else if ((sunny === "no") && (rivers === "no") && (beaches === "no") && (bigCities === "yes") && (gambling === "no")) {
      $(".ny").show();
      $(".sanfran").show();
      $(".london").show();
  // Gambling only "yes"
    } else if ((sunny === "no") && (rivers === "no") && (beaches === "no") && (bigCities === "no") && (gambling === "yes")) {
      $(".gambling").show();
      $(".vegas").show();
      $(".macau").show();
      $(".monteCarlo").show();
      $(".london").show();
      $(".atlanticCity").show();
  // Sunny and (gambling) "yes"
    } else if ((sunny === "yes") && (gambling === "yes")) {
      $(".sanfran").show();
      $(".vegas").show();
      $(".atlanticCity").show();
  // Sunny and (rivers, beaches, cities, or gambling) "yes"
    } else if ((sunny === "yes") && ((rivers === "yes") || (beaches === "yes") || (bigCities === "yes") || (gambling === "yes"))) {
      $(".sanfran").show();
      $(".macau").show();
  // Rivers and (beaches, cities, or gambling) "yes"
    } else if ((rivers === "yes") && ((beaches === "yes") || (bigCities === "yes") || (gambling === "yes"))) {
      $(".sanfran").show();
  // Beaches and (cities, or gambling) "yes"
    } else if ((beaches === "yes") && ((bigCities === "yes") || (gambling === "yes"))) {
      $(".sanfran").show();
  // Beaches and (cities, or gambling) "yes"
    } else if ((bigCities === "yes") && (gambling === "yes")) {
      $(".vegas").show();
      $(".macau").show();
      $(".london").show();
    } else {
      $(".sanfran").show();
    }



















  event.preventDefault();
  });

});
