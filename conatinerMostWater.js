/*
Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.

*/

// var maxArea = function(height) {
//     var maxArea = 0;
//     var length = height.length;
//     var head = 0, tail = length-1;
//     while (tail - head > 0){
//       console.log(tail, head)
//         var area = Math.min(height[head],height[tail]) * (tail - head);
//         console.log('juh', area)
//         maxArea = Math.max(maxArea, area);
//         if (height[head] > height[tail]){
//             tail--;
//         }else{
//             head++;
//         }

//     }
//     return maxArea;
// };


var maxArea = function(height) {
   let maxContainer = 0;

   for(var i = 0; i < height.length - 1;i++) {
     let smaller = height[i] < height[i+1]? height[i]: height[i+1];
     console.log(height[i], height[i+1], smaller)
     smaller = smaller * (Math.abs(i+1 - i))
     console.log(smaller)

     if(smaller > maxContainer) {
       maxContainer = smaller;
     }
   };
   return maxContainer;
};


maxArea([1,2,1]);


/*
2  x
1x x x
 0 1 2
/////////////

1x x
 0 1
