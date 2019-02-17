let cube = null;

// TODO for randomizing cube order
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Populate total words field
$( document ).ready(function() {
  // Load cube data
  $.getJSON( "./cube_9.json", function( data ) {
    cube = data;  // letters, req_letter, num_perms, perms
    $('#totalwords').html(cube['num_perms']);

    // Shuffle letters
    let shuffled = cube.letters.replace(cube.req_letter, '');
    shuffled = shuffled.split('').sort(function(){return 0.5-Math.random()}).join('');

    // Populate table with letters
    for (let i = 0; i < 8; ++i) {
      let id = '#l' + i.toString();
      $(id).html(shuffled[i].toUpperCase());
    }
    $('#lcenter').html(cube.req_letter.toUpperCase());

  });
});

function submitword() {
  // Get word
  let word = $('#word_entry').val();
  //console.log(word);

  // Check word
  while (cube == null);  // wait u heathens
  if (cube.perms.includes(word)) {
    console.log('valid word: ' + word);
    cube.perms.splice($.inArray(word, cube.perms), 1);

    // Increment number found
    let num_found = parseInt($('#numfound').html()) + 1;
    $('#numfound').html(num_found);

    // Add word to found list
    let found_words = $.trim($('#foundwords').html());
    console.log(found_words);
    if (found_words.length != 0) {
      $('#foundwords').html(found_words + ', ' + word);
    }
    else {
      $('#foundwords').html(word);
    }
  }

  // Clear text entry
  $('#word_entry').val('');
}

function reveal() {
  while (cube == null);

  let sols = '';
  for (perm of cube.perms) {
    if (sols == '') {
      sols += perm;
    }
    else {
      sols += ', ' + perm;
    }
  }
  $('#solutions').html(sols);

  // Switch button to hide button
  $('#reveal').val('Hide Solutions');
  $('#reveal').attr("onclick", "hide()");
}

function hide() {
  $('#solutions').html('');

  // Switch to reveal button
  $('#reveal').val('Reveal Solutions');
  $('#reveal').attr("onclick", "reveal()");
}
