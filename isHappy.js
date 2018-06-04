var isHappy = function(n) {
    if(n === 1) return true;
    if(n === 0) return false;

   let final = false,
       cycle = {};

    const inner = (digits) => {
        let vals = (digits + '').split(''),
        sum;

        if(vals.length >=2) {
          //find sum
          vals.forEach(val => {
              if(sum) {
                sum += Math.pow(parseInt(val), 2)
              } else {
                sum = Math.pow(parseInt(val), 2)
              }

          })
        } else {
          sum = Math.pow(digits, 2)
        }
        console.log(vals, sum)

        //check if its in the cycle
        if(cycle[sum]) {
            return;
        } else if(sum === 1) {
            final = true;
            return;
        } else {
            cycle[sum] = true;
            inner(sum)
        }
    }

    inner(n)
    return final;
};
