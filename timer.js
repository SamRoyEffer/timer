const timer = () => {
  const beeper = (seconds) => {
    if(isNaN(seconds) || seconds <= 0){

    } else{
    console.log('Beep');
    }
  }
  const number = process.argv.slice(2);
  for (let num of number) {
    num = Number(num)
    setTimeout(() => {
      beeper(num)
    }, num * 1000)
  }
};
timer()