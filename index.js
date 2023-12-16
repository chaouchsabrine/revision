function iterateAndLogWithFor(n) {
    for (var i=0;i<n;i++){
        if(n%2==0){
            console.log(i +'is even')
        }

        else    console.log(i+'is odd')

    }
}
  //exercice1.2
  
    

  function iterateAndLogWithwhile(n) {
    var i=0
    while (i<n) {
        if (i%2===0){
            console.log(i+'is even')
        }
        else{
        console.log(i+'is odd')
        }
        i++
    }
}

function  reverseIterateAndLogRecursively(n){
    if(n<0){
        return 
        
    }
 if (n%2===0){
            console.log(n+'is even')
        }
        else{
        console.log(n+'is odd')
        }
       return reverseIterateAndLogRecursively(n-1)
}
function iterateAndLogWithFor2(n) {
    for (var i=n;i>=0;i--){
        if(n%2==0){
            console.log(i +'is even')
        }

        else    console.log(i+'is odd')

    }
}
