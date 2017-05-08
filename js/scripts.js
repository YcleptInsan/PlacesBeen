$(function(){
  $("form#new-place").submit(function(event){
    event.preventDefault();
    var inputLocation = $("input#new-place").val();
    var inputLandmark = $("input#landmark").val();
    var inputTime = $("input#time").val();
    var inputNotes = $("input#notes").val();
  });
});
