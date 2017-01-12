var x = 0
var y = 0


function userinput(z, q, p){
    for (var i=0; i<p; i++){
        if ((i % z === 0) || (i % q === 0))
          y += i
      }
    console.log(x + y);
  }
userinput(3, 5, 1000);