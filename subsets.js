var subsets = function(nums) {
    let final = [[]];

    const inner = (prefix, vals) => {
      for(var i = 0; i <= vals.length-1; i++) {
        let current = prefix.concat(vals[i])
        final.push(current);
        inner(current,vals.slice(i+1))
      }
    }
    inner([], nums);
    return final;
};

let nums = [1,2,3];

subsets(nums)
