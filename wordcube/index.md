---
layout: default
title: WordCube
header: Maximizing WordCube
---
<link rel="stylesheet" type="text/css" href="wordcube.css">

<div markdown="1">
I present the _hardest_ possible wordcube board... Well, at least, the one with the most words.

The [wordcube game](http://www.stealthcopter.com/wordcube/) (really it's a square) involves finding all possible words that you can spell using the given tiles. The words must be length 4 or higher, and _must use the center tile_.

The backbone of my [scrabble solver](https://github.com/dqlynch/scrabblesolver), the [DAWG](https://en.wikipedia.org/wiki/Suffix_automaton), is a powerful tool for prefix completion and word permutations. Using this, it is relatively trivial to generate all word permutations of every 9-length word, and from there find the pair of (9-length word, contraining letter) with the _most valid permutations_ (according to the rules of wordcube).

This word (it's a secret) has a whopping 592 valid permutations! That is, you can make 592 words of length 4 or greater that all use the center tile (in this case, 'e').

Note that I don't have access to the dictionary/wordlist that the original author of wordcube uses, so there may be some differences. I am using the Enhanced North American Benchmark Lexicon 2k (ENABLE2k) word list, commonly used for scrabble or words with friends. This word list tends to include some uncommon, niche, and obscure technical words, so be warned.

Try it below!

---
</div>

{::nomarkdown}
<div markdown="0">
  <!-- jquery sdn -->
  <script
    src="https://code.jquery.com/jquery-3.3.1.min.js"
    integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
    crossorigin="anonymous"></script>
  <script src="./wordcube.js"></script>

  <!-- Blurb -->

  <!--wordcube table-->
  <!--idfk lol...
    https://stackoverflow.com/questions/20456694/grid-of-responsive-squares/20457076#20457076 -->

  <table id="wordcubetable">
    <tbody>
      <tr>
        <td>
          <div class=tile><div class=ltable> <div class=letter id=l0> I </div></div></div>
        </td>
        <td>
          <div class=tile><div class=ltable> <div class=letter id=l1> S </div></div></div>
        </td>
        <td>
          <div class=tile><div class=ltable> <div class=letter id=l2> A </div></div></div>
        </td>
      </tr>

      <tr>
        <td>
          <div class=tile><div class=ltable> <div class=letter id=l3> L </div></div></div>
        </td>
        <td>
          <div class=ctile><div class=ltable> <div class=letter id=lcenter> E </div></div></div>
        </td>
        <td>
          <div class=tile><div class=ltable> <div class=letter id=l4> N </div></div></div>
        </td>
      </tr>

      <tr>
        <td>
          <div class=tile><div class=ltable> <div class=letter id=l5> R </div></div></div>
        </td>
        <td>
          <div class=tile><div class=ltable> <div class=letter id=l6> T </div></div></div>
        </td>
        <td>
          <div class=tile><div class=ltable> <div class=letter id=l7> P </div></div></div>
        </td>
      </tr>

    </tbody>
  </table>

  <!-- wordcube input-->
  <p>
    <input type="text" name="word_entry" id="word_entry" autocomplete="off" onkeydown="
      if (event.keyCode == 13) {
        $('#submitword').click()
      }
    ">
    <input type="submit" id="submitword" value="submit" onclick="submitword()">
  </p>

  <p>
    words found: <span id="numfound">0</span> out of <span id="totalwords">0</span>
  </p>
  <p id="foundwords"> </p>

  <!-- Solutions-->
  <p><input type="submit" id="reveal" value="Reveal Solutions" onclick="reveal()"></p>
  <p id="solutions"> </p>
</div>
{:/}