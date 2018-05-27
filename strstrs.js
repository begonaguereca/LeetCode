var strStr = function(haystack, needle) {
    if((haystack === needle) || needle === '') {return 0};

    let arr_needle = needle.split(''),
        arr_hay = haystack.split(''),
        indexStart = -1;

    for(var i = 0; i <= arr_hay.length-1; i++){
      console.log(arr_hay[i], indexStart, arr_needle)
        if(arr_needle.length !== 0) {
            if(arr_hay[i] === arr_needle[0] && indexStart === -1) {
                arr_needle.shift();
                indexStart = i;
            } else if (arr_hay[i] === arr_needle[0] && indexStart !== -1) {
                arr_needle.shift();
            } else if (arr_hay[i] !== arr_needle[0] && indexStart !== -1) {
              console.log('here', i)
                i = indexStart;
                indexStart = -1;
                arr_needle = needle.split('');
            }
        }
    };
    return arr_needle.length > 0? -1: indexStart;
};


strStr("mississippi", "pi")
