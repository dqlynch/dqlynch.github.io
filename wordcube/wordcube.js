let cube = {};

// Populate total words field
$( document ).ready(function() {
  // Load cube data
  $.getJSON( "./cube_9max.json", function( data ) {
    let key = '9max';
    cube[key] = data;  // letters, req_letter, num_perms, perms
    populate_cube(key);
  });

  // Load cube25 data
  $.getJSON( "./cube_25.json", function( data ) {
    let key = '25'
    cube[key] = data;
    populate_cube(key);
  });
});

function populate_cube(key) {
  let lkey = '#l' + key;
  $('#totalwords'+key).html(cube[key]['num_perms']);

  // Shuffle letters
  let shuffled = cube[key].letters.replace(cube[key].req_letter, '');
  shuffled = shuffled.split('').sort(function(){return 0.5-Math.random()}).join('');

  // Populate table with letters
  for (let i = 0; i < cube[key].letters.length - 1; ++i) {
    let id = lkey + i.toString();
    $(id).html(shuffled[i].toUpperCase());
  }
  $(lkey+'center').html(cube[key].req_letter.toUpperCase());
}


function submitword(key) {
  // Get word
  let word = $('#word_entry'+key).val().toLowerCase();
  console.log(word);

  // Check word
  while (!(key in cube));  // wait u heathens
  if (cube[key].perms.includes(word)) {
    console.log('valid word: ' + word);
    cube[key].perms.splice($.inArray(word, cube[key].perms), 1);

    // Increment number found
    let num_found = parseInt($('#numfound'+key).html()) + 1;
    $('#numfound'+key).html(num_found);

    // Add word to found list
    let found_words = $.trim($('#foundwords'+key).html());
    if (word.length == cube[key].letters.length) {
      word = '<em>' + word + '</em>';
    }
    if (found_words.length != 0) {
      $('#foundwords'+key).html(found_words + ', ' + word);
    }
    else {
      $('#foundwords'+key).html(word);
    }
  }

  // Clear text entry
  $('#word_entry'+key).val('');
}


function reveal(key) {
  while (!(key in cube));

  let sols = '';
  for (perm of cube[key].perms) {
    if (perm.length == cube[key].letters.length) {
      perm = '<em>' + perm + '</em>';
    }
    if (sols == '') {
      sols += perm;
    }
    else {
      sols += ', ' + perm;
    }
  }
  $('#solutions'+key).html(sols);

  // Switch button to hide button
  $('#reveal'+key).val('Hide Solutions');
  $('#reveal'+key).attr("onclick", "hide('"+key+"')");
}

function hide(key) {
  $('#solutions'+key).html('');

  // Switch to reveal button
  $('#reveal'+key).val('Reveal Solutions');
  $('#reveal'+key).attr("onclick", "reveal('"+key+"')");
}
