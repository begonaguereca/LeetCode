/*
Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.




*/


var findWords = function(words) {
  let row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  row2 = ['a','s', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  row3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
  final = [];

  words.forEach(word => {
    let row1Bol = true, row2Bol = true, row3Bol = true;

    word.toLowerCase().split('').forEach(char => {
      console.log(word, char, row1.indexOf(char), row2.indexOf(char), row3.indexOf(char))
      if(row1.indexOf(char) === -1) {row1Bol = false}

      if(row2.indexOf(char) === -1) {row2Bol = false}

      if(row3.indexOf(char) === -1) {row3Bol = false}
    });
    console.log(row1Bol, row2Bol, row3Bol)
    if(row1Bol || row2Bol || row3Bol) {final.push(word)}
  });

  return final;
};

let input = ["qaz","wsx","edc","rfv","tgb","yhn","ujm","ik","pklo","ppppppp"]

findWords(input);
