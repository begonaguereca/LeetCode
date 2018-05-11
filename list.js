var MovingAverage = function(size) {
   this.vals = [];
   this.denominator = size;
};


MovingAverage.prototype.next = function(val) {
  this.vals.push(val);
   let denom;

    let sum = this.vals.reduce((a,b) => {
       return a + b;
    });

    if (this.denominator > this.vals.length) {
      denom = this.vals.length;
    }  else {
      denom = this.denominator;
    }
  console.log(sum, denom, sum/denom)
  return sum/ denom;
};


m = new MovingAverage(3);
m.next(1); //1
m.next(10); //11
m.next(3); //14
m.next(5); //19



// m.next(1) = 1
// m.next(10) = (1 + 10) / 2
// m.next(3) = (1 + 10 + 3) / 3
// m.next(5) = (10 + 3 + 5) / 3
