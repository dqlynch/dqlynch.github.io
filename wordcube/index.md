---
layout: default
title: WordCube
header: Extreme WordCube
tagline: Searching rule-constrained word permutations
---
<link rel="stylesheet" type="text/css" href="wordcube.css">

<div markdown="1">
### Maximizing WordCube words
The [wordcube game](http://www.stealthcopter.com/wordcube/) (really it's a square) involves finding all possible words that you can spell using the given tiles. The words must be length 4 or higher, and _must use the center tile_.

So what is the _hardest_ possible wordcube board? Well, it's hard to say, but we can start by finding the one with the most possible words.

The directed acyclic word graph, or [DAWG](https://en.wikipedia.org/wiki/Suffix_automaton), is a powerful tool for prefix completion. Using this, it is relatively trivial to generate all word permutations of every 9-length word, and from there find the pair of `(9-length word, constraining letter)` with the _most valid permutations_ (according to the rules of wordcube).

The code for generating permutations can be found [here](https://github.com/dqlynch/scrabblesolver/blob/master/scrabble_solver/perm_count.py), which is based on a [scrabble-focused extension](https://github.com/dqlynch/scrabblesolver/blob/master/scrabble_solver/scrabble_dawg.py) of the [DAWG-Python](https://github.com/pytries/DAWG-Python) library.

This word (it's a secret) has a whopping 592 valid permutations! That is, it is possible to make 592 words of length 4 or greater that all use the center tile (in this case, 'e').

Note that I don't have access to the dictionary/wordlist that the original author of wordcube uses, so there may be some differences. This wordcube uses the Enhanced North American Benchmark Lexicon 2k (ENABLE2k) word list, commonly used for scrabble or words with friends. This word list tends to include some uncommon, niche, and obscure technical words, so be warned.

Try it below!
</div>
<br>

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

  <table class="cube9">
    <tbody>
      <tr>
        <td><div class=tile><div class=ltable> <div class=letter id=l9max0>  </div></div></div></td>
        <td><div class=tile><div class=ltable> <div class=letter id=l9max1>  </div></div></div></td>
        <td><div class=tile><div class=ltable> <div class=letter id=l9max2>  </div></div></div></td>
      </tr>

      <tr>
        <td><div class=tile><div class=ltable> <div class=letter id=l9max3>  </div></div></div></td>
        <td><div class=ctile><div class=ltable> <div class=letter id=l9maxcenter>  </div></div></div></td>
        <td><div class=tile><div class=ltable> <div class=letter id=l9max4>  </div></div></div></td>
      </tr>

      <tr>
        <td><div class=tile><div class=ltable> <div class=letter id=l9max5>  </div></div></div></td>
        <td><div class=tile><div class=ltable> <div class=letter id=l9max6>  </div></div></div></td>
        <td><div class=tile><div class=ltable> <div class=letter id=l9max7>  </div></div></div></td>
      </tr>

    </tbody>
  </table>

  <!-- wordcube input-->
  <p>
    <input type="text" name="word_entry" id="word_entry9max" autocomplete="off" onkeydown="
      if (event.keyCode == 13) {
        $('#submitword9max').click()
      }
    ">
    <input type="submit" id="submitword9max" value="submit" onclick="submitword('9max')">
  </p>

  <!-- Solutions-->
  <p>
    words found: <span id="numfound9max">0</span> out of <span id="totalwords9max">0</span>
  </p>
  <p id="foundwords9max"> </p>

  <p><input type="submit" id="reveal9max" value="Reveal Solutions" onclick="reveal('9max')"></p>
  <p id="solutions9max"> </p>
</div>
{:/}


<div markdown="1">
---
### Minimizing WordCube words
We can also find the wordcube with the minimum number of permutations. It turns out that the minimum permutations is one: there exists a word whose only permutation, given the constraining letter, is itself.

In fact, there are three such words: `monocoque`, with the constraining letter `q`, `kibbutzim`, with the constraining letter `m`, and the word in the wordcube below.

Notably, the word in the wordcube below is its own only permutation when constrained with either `v`, `i`, or `o`.

</div>
<br>



{::nomarkdown}
<div markdown="0">
  <!--wordcube table-->
  <table class="cube9">
    <tbody>
      <tr>
        <td><div class=tile><div class=ltable> <div class=letter id=l9min0>  </div></div></div></td>
        <td><div class=tile><div class=ltable> <div class=letter id=l9min1>  </div></div></div></td>
        <td><div class=tile><div class=ltable> <div class=letter id=l9min2>  </div></div></div></td>
      </tr>

      <tr>
        <td><div class=tile><div class=ltable> <div class=letter id=l9min3>  </div></div></div></td>
        <td><div class=ctile><div class=ltable> <div class=letter id=l9mincenter>  </div></div></div></td>
        <td><div class=tile><div class=ltable> <div class=letter id=l9min4>  </div></div></div></td>
      </tr>

      <tr>
        <td><div class=tile><div class=ltable> <div class=letter id=l9min5>  </div></div></div></td>
        <td><div class=tile><div class=ltable> <div class=letter id=l9min6>  </div></div></div></td>
        <td><div class=tile><div class=ltable> <div class=letter id=l9min7>  </div></div></div></td>
      </tr>

    </tbody>
  </table>

  <!-- wordcube input-->
  <p>
    <input type="text" name="word_entry" id="word_entry9min" autocomplete="off" onkeydown="
      if (event.keyCode == 13) {
        $('#submitword9min').click()
      }
    ">
    <input type="submit" id="submitword9min" value="submit" onclick="submitword('9min')">
  </p>

  <!-- Solutions-->
  <p>
    words found: <span id="numfound9min">0</span> out of <span id="totalwords9min">0</span>
  </p>
  <p id="foundwords9min"> </p>

  <p><input type="submit" id="reveal9min" value="Reveal Solutions" onclick="reveal('9min')"></p>
  <p id="solutions9min"> </p>
</div>
{:/}



<div markdown="1">
---
### Larger WordCubes
We can find permutations for words of any length. There are two 25-letter words (in the ENABLE2k dictionary), which means we can make a 5x5 wordcube.

Below is the 5x5 wordcube with the most possible permutations. Good luck!
</div>
<br>

{::nomarkdown}
<table class="cube25">
  <tbody>
    <tr>
      <td><div class=tile><div class=ltable> <div class=letter id=l250>  </div></div></div></td>
      <td><div class=tile><div class=ltable> <div class=letter id=l251>  </div></div></div></td>
      <td><div class=tile><div class=ltable> <div class=letter id=l252>  </div></div></div></td>
      <td><div class=tile><div class=ltable> <div class=letter id=l253>  </div></div></div></td>
      <td><div class=tile><div class=ltable> <div class=letter id=l254>  </div></div></div></td>
    </tr>

    <tr>
      <td><div class=tile><div class=ltable> <div class=letter id=l255>  </div></div></div></td>
      <td><div class=tile><div class=ltable> <div class=letter id=l256>  </div></div></div></td>
      <td><div class=tile><div class=ltable> <div class=letter id=l257>  </div></div></div></td>
      <td><div class=tile><div class=ltable> <div class=letter id=l258>  </div></div></div></td>
      <td><div class=tile><div class=ltable> <div class=letter id=l259>  </div></div></div></td>
    </tr>

    <tr>
      <td><div class=tile><div class=ltable> <div class=letter id=l2510>  </div></div></div></td>
      <td><div class=tile><div class=ltable> <div class=letter id=l2511>  </div></div></div></td>
      <td><div class=ctile><div class=ltable> <div class=letter id=l25center>  </div></div></div></td>
      <td><div class=tile><div class=ltable> <div class=letter id=l2512>  </div></div></div></td>
      <td><div class=tile><div class=ltable> <div class=letter id=l2513>  </div></div></div></td>
    </tr>

    <tr>
      <td><div class=tile><div class=ltable> <div class=letter id=l2514>  </div></div></div></td>
      <td><div class=tile><div class=ltable> <div class=letter id=l2515>  </div></div></div></td>
      <td><div class=tile><div class=ltable> <div class=letter id=l2516>  </div></div></div></td>
      <td><div class=tile><div class=ltable> <div class=letter id=l2517>  </div></div></div></td>
      <td><div class=tile><div class=ltable> <div class=letter id=l2518>  </div></div></div></td>
    </tr>

    <tr>
      <td><div class=tile><div class=ltable> <div class=letter id=l2519>  </div></div></div></td>
      <td><div class=tile><div class=ltable> <div class=letter id=l2520>  </div></div></div></td>
      <td><div class=tile><div class=ltable> <div class=letter id=l2521>  </div></div></div></td>
      <td><div class=tile><div class=ltable> <div class=letter id=l2522>  </div></div></div></td>
      <td><div class=tile><div class=ltable> <div class=letter id=l2523>  </div></div></div></td>
    </tr>

  </tbody>
</table>

<!-- wordcube input-->
<p>
  <input type="text" name="word_entry" id="word_entry25" autocomplete="off" onkeydown="
    if (event.keyCode == 13) {
      $('#submitword25').click()
    }
  ">
  <input type="submit" id="submitword25" value="submit" onclick="submitword('25')">
</p>

<!-- Solutions-->
<p>
  words found: <span id="numfound25">0</span> out of <span id="totalwords25">0</span>
</p>
<p id="foundwords25"> </p>

<p><input type="submit" id="reveal25" value="Reveal Solutions" onclick="reveal('25')"></p>
<p id="solutions25"> </p>
{:/}
