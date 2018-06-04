var generate = function(numRows) {
    let final = [[1]];

    const inner = (len, arr) => {
      console.log(len, arr.length, arr, arr.length === len)

        if(len <= numRows) {
          let newArr = [1,1]

          for(var i = 0; i < arr.length-1; i++) {
              let curr = arr[i] + arr[i+1];
              newArr.splice(i+1, 0, curr);
          }
          final.push(newArr)
          inner(len+1, newArr)
        }

    }

    inner(2,[]);
    return final;
};

generate(1);
