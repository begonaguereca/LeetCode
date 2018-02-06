/*
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

For example,
Given [[0, 30],[5, 10],[15, 20]],
return 2.

*/

var minMeetingRooms = function(intervals) {
  var rooms = 0;

  for (var i = 0; i < intervals.length - 2; i++) {
    for (var j = 0; j < intervals.length - 1; j++) {
      if(!(intervals[i][0] < intervals[j][0] && intervals[i][0] < intervals[j][0]) || !(intervals[i][0] > intervals[j][0] && intervals[i][0] > intervals[j][0])) {

        rooms++;
      }
      if (j === intervals.length - 1) {
        intervals.splice(i, 1);
      }
    }
  }
  return rooms;
};

var testInput = [[0, 30],[5, 10],[15, 20], [10,29]];

minMeetingRooms(testInput);


/*


Example Input: [[0, 30],[5, 10],[15, 20]]
Example Output:2



Strategy:

- Iterate through each tuple and compare them to the other tuples
- if current tuple interfeers with another tuple then
- increment the rooms
- slice off tuple

[[0, 30],[5, 10],[15, 20]]

[0, 30] ---- 0 < 5 ? YES   30 < 10? NO ------- BOOK ROOM (1)
[0, 30] ---- 0 < 15 ? YES  30 < 10? NO ------ BOOK ROOM (2)

[[5, 10],[15, 20]]

[5, 10] ---- 5 < 15 ? YES  10 < 20 YES  ------ no room (2)

return 2


Time Complexity: o(n^2)


*/
