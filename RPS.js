const RPS = () => {
  let final = [];
  let plays = ['R', 'P', 'S'];

  const inner = (array) => {
    console.log('one')
    if(array.length === 3) {
      final.push(array)
    } else {
      for(var i = 0; i < plays.length; i++) {
        if(array.indexOf(array[i]) === -1) {
          inner(array.concat(plays[i]));
        }
      }
    }
  }
  inner([])
  return final;
}

RPS()
