function Places (location, landmark, time, notes) {
  this.inputLocation = location;
  this.inputLandmark = landmark;
  this.inputTime = time;
  this.inputNotes = notes;
};

Places.prototype.fullList = function () {
  return this.inputLocation + " || " + this.inputLandmark + " || " + this.inputTime + " || " + this.inputNotes;
};





$(function(){
  $("form#new-place").submit(function(event){
    event.preventDefault();
    var inputLocation = $("input#new-place").val();
    var inputLandmark = $("input#landmark").val();
    var inputTime = $("input#time").val();
    var inputNotes = $("input#notes").val();

    var newPlace = new Places(inputLocation, inputLandmark, inputTime, inputNotes);
    console.log(newPlace);

    $("#listLocation").append("<li><span class='location'>" + newPlace.inputLocation + "</span></li>");

    $(".location").last().click(function() {
      $("#show-location").show();
      $(".locations").text(newPlace.inputLocation);
      $(".landmark").text(newPlace.inputLandmark);
      $(".year").text(newPlace.inputTime);
      $(".notes").text(newPlace.inputNotes);
  });
  $(".location").val("");
  $(".landmark").val("");
  $(".year").val("");
  $(".notes").val("");

  });


});
