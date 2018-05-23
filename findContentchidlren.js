var findContentChildren = function(g, s) {
    let fast = 0,
        slow = 0,
        count = 0;

    while(slow < g.length) {
        let child = g[slow];
        let cookie = s[fast];
        //console.log(child, cookie);

        if(child <= cookie) {
          //console.log('here', child, cookie)
            count++;
            s.splice(fast, 1);
            fast = 0;
            slow++;
        } else if (fast === s.length) {
            fast = 0;
            slow++;
        } else {
            fast++;
        }
    }

    return count;
};

let g = [1,2,3]
s = [1,1];

findContentChildren(g, s)
