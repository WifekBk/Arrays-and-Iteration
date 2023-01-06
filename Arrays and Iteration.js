//Basic Requirments
// 1
function arrayFor(array) {
    for (i=0; i<array.length; i++){
        console.log(array[i]);
    }
  }  
  //2
  function arrayWhile(array) {
    var i=0
      while(i<array.length){
        console.log(array[i]);
          i++
    }
  }  
  //3
  function sum(array) {
    var sum=0
     for(i=0; i<array.length; i++){
        sum+=array[i];
    }
     return sum
 }  
 //4
 function sumEveryOther(array) {
    var x =0;
     for (i=0; i<array.length; i++){
         x= x+ array[i];
         i++
     }
     return x
 } 
 //5
 function sumStartAt(array, index) {
    var y=0;
     for (i=index; i<array.length; i++){
         y+=array[i];
     
     }
     return y
 }  
 //6
 function sumUntil(array, index) {
    var res=0;
     for(i=0; i<=index; i++){
         res+= array[i];
     }
     return res;
  }  
  //7
  function subtractReverse(array) {
    var res= array[array.length-1];
     for (i=array.length-2; i>=0; i--){
         res-= array[i];
     }
     return res
 }  
 //8
 function product(array) {
    var res=1;
     for(i=0; i<array.length; i++){
         res*=array[i];
     }
     return res 
 }  
