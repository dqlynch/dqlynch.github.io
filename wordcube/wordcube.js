let cube = null;

// TODO for randomizing cube order
// function shuffleArray(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

// Populate total words field
$( document ).ready(function() {
  // Load cube data
  $.getJSON( "./cube_9.json", function( data ) {
    cube = data;  // letters, req_letter, num_perms, perms
    $('#totalwords').html(cube['num_perms']);
    console.log('here');

    // TODO Populate cube programatically
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
