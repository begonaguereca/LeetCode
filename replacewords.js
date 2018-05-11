/*

In English, we have a concept called root, which can be followed by some other words to form another longer word - let's call this word successor. For example, the root an, followed by other, which can form another word another.

Now, given a dictionary consisting of many roots and a sentence. You need to replace all the successor in the sentence with the root forming it. If a successor has many roots can form it, replace it with the root with the shortest length.

You need to output the sentence after the replacement.

Example 1:
Input: dict = ["cat", "bat", "rat"]
sentence = "the cattle was rattled by the battery"
Output: "the cat was rat by the bat"
Note:
The input will only have lower-case letters.
1 <= dict words number <= 1000
1 <= sentence words number <= 1000
1 <= root length <= 100
1 <= sentence words length <= 1000


*/




var replaceWords = function(dict, sentence) {
 let dictionary = toObject(dict);
 let main = [];

 sentence.split(' ').forEach(word => {
   let final = false,
   fast = 0,
   slow = 0,
   root = '';

   while(fast < word.length) {
     let current = word.slice(slow, fast+1);
    console.log(word, slow, fast, current, dictionary[current]);

     if(dictionary[current]) {
       final = true;
       root = current;
       break;
     }

    fast++;

   }

   if(final) {
     main.push(root);
   } else {
     main.push(word);
   }
 });
 //console.log(main)
 return main.join(' ');
};


function toObject(arr) {
  var rv = {};

  for (var i = 0; i < arr.length; ++i){
    let char = arr[i];
    rv[char] = true;
  }

  return rv;
}

let dict = ["a", "aa", "aaa", "aaaa"],
sentence = "a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa";

replaceWords(dict, sentence);
