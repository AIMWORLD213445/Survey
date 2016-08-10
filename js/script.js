$(document).ready(function() {
    $("#blanks form") .submit(function(event) {
    var userNameInput = $("input#userName") .val();

    $(".userName") .text(userNameInput);
    event.preventDefault();

    $("#blanks form") .submit(function(event) {
    var favFoodInput = $("input#favFood") .val();

    $(".favFood") .text(favFoodInput);
    event.preventDefault();

    $("#blanks form") .submit(function(event) {
    var favBandInput = $("input#favBand") .val();

    $(".favBand") .text(favBandInput);
    event.preventDefault();

    var season = $("#season").val();

    var favoriteColor = $("color").val();
});
});
});
});
