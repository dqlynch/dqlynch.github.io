The [wordcube game](http://www.stealthcopter.com/wordcube/) involves finding all possible words that you can spell using the given tiles. The words must be length 4 or higher, and _must use the center tile_. 

The backbone of my [scrabble solver](https://github.com/dqlynch/scrabblesolver), the [DAWG](https://en.wikipedia.org/wiki/Suffix_automaton), is a powerful tool for prefix completion and word permutations. Using this, it was relatively trivial to generate all word permutations of every 9-length word, and from there find the 9-length word with the _most_ valid (according to the rules of wordcube) permutations.

This word (it's a secret) has a whopping 592 valid permutations! That is, you can make 592 words of length 4 or greater that all use the center tile (in this case, 'e'). 

Note that I don't have access to the dictionary/wordlist that the original author or wordcube uses, so there may be variations. I am using the Enhanced North American Benchmark Lexicon 2k (ENABLE2k) word list, commonly used for scrabble or words with friends. This word list tends to include some uncommon, niche, and obscure technical words, so be warned.

Try to solve it here!

https://dqlynch.github.io/wordcube/
