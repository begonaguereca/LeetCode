var firstUniqChar = function(s) {
    let non_rep = [],
        dict = {},
        arr = s.split(''),
        index = -1,
        current = 0;

    //Add values to dictionary
    arr.forEach(val => {
        if(dict[val]) {
            dict[val]++;
        } else {
            dict[val] = 1;
        }
    });

    //Iterate find the smallest index
    while(index === -1 && current < arr.length) {
      let val = arr[current]
        console.log(current, index, dict[val])
        if(dict[val] === 1) {
            index = current;
            break;
        }
        current++;
    }
    return index;
};
