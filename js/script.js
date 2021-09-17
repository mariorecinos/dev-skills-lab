$('#addSkill').click(function() {
  let $input = $('#inputskill').val(); //document.querySelector referenced in jquery instead
  $('thead').append(`<tr id="newText"><td><button id="rmbtn">X</button>${$input}</td></tr>`); // appends new text and button
  $('input').val(''); // replaces the input entered with an empty string
});


  $('thead').on("click", "button", function() {
    $(this).closest('tr').fadeOut(1000, function() {
      $(this.remove())
    })
  });
