var search = function(nums, target, start, end, point) {
    if(start === undefined) {
      start = 0
      nums.sort((a,b)=> {return a - b;})
      };
    if(end === undefined) {end = nums.length-1};
    if(point === undefined) {point = (end-start)/2}
    console.log(nums, target, start, end, point)

    if(nums[point] === target) {
        return point;
    //even number
    } else {
    point = Math.floor(point);

    if(nums[point] < target) {
        start = point;
        point = (end-start)/2;
        search(nums, target, start, end, point);
    } else {
       end = point;
       point = (end-start)/2;
       search(nums, target, start, end, point);
    }
  }
};

search([4,5,6,7,0,1,2], 2)
