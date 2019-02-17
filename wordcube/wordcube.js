let cube = null;


// Populate total words field
$( document ).ready(function() {
  // Load cube data
  $.getJSON( "./cube_9.json", function( data ) {
    cube = data;  // letters, req_letter, num_perms, perms
    $('#totalwords').html(cube['num_perms']);
    console.log('here');
  });

});

function submitword() {
  // Get word
  let word = $('#word_entry').val();
  //console.log(word);

  // Check word
  while(cube == null);  // wait u heathens
  if (cube.perms.includes(word)) {
    console.log('valid word: ' + word);
    cube.perms.splice($.inArray(word, cube.perms), 1);

    // Increment number found
    let num_found = parseInt($('#numfound').html()) + 1;
    console.log(num_found);
    $('#numfound').html(num_found);

    // Add word to found list
    let found_words = $('#foundwords').html();
    if (found_words) {
      $('#foundwords').html(found_words + ', ' + word);
    }
    else {
      $('#foundwords').html(word);
    }
  }

  // Clear text entry
  $('#word_entry').val('');
}
