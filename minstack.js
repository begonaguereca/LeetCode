/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = [];
    this.len = 0;
    this.min = '';
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    this.len++;
    if(this.min === '') {
        this.min = x;
    } else {
        if (this.min > x) {
            this.min = x;
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let val = this.stack.pop();
    this.len--;
    if(val === this.min) {
        let newMin = '';
        this.stack.forEach(val => {
            if(newMin === '') {
                newMin = val;
            } else {
                if(newMin > val) {
                    newMin = val;
                }
            }
        });
      this.min = newMin;
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let val = this.len - 1;
    return this.stack[val];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    console.log('here', this.stack)
    return this.min;
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
