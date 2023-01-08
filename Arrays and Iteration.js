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

 //9
 function average(array) {
var res=0;
var sum=0;
for (i=0; i<array.length; i++){
    sum+= array[i]
}
    return res= sum/array.length
}  

//10
function square(array) {
  for (i=0; i<array.length; i++){
      array[i]*=array[i]
  } 
    return array
}  

//11
function isArray(array) {
   if (typeof array === "object"){
       return true 
   }
    return false
}  

//More Practice
//1
function min(array) {
   var mini=array[0];
    for (i=1; i<array.length; i++){
        if (array[i]<mini){
            mini=array[i]
        }
        
    }
    return mini
}  

//2
function max(array) {
   var maxi=array[0];
    for (i=1; i<array.length; i++){
        if (array[i]>maxi){
            maxi=array[i]
        }
        
    }
    return maxi
}  

//3
function shortestString(array) {
   var mini=array[0].length;
    for (i=1; i<array.length; i++){
        if (array[i].length<mini){
            mini=array[i].length
        }
        
    }
    return mini
}  

//4
function longestString(array) {
   var maxi=array[0].length;
    for (i=1; i<array.length; i++){
        if (array[i].length>maxi){
            maxi=array[i].length
        }
        
    }
    return maxi
}  

//5
function shortStr(ar) {
    var mini=ar[0].length;
     var x =ar[0]
     for (i=1; i<ar.length; i++){
         if (ar[i].length<mini){
             mini=ar[i].length
             x = ar[i]
         }
         
     }
     return x
 }  
 function longStr(arr) {
     var maxi=arr[0].length;
      var y= '';
      for (i=1; i<arr.length; i++){
          if (arr[i].length>maxi){
              maxi=arr[i].length
              y = arr[i]
          }
          
      }
      return y;
  }
  function shortestLongest(array) {
     var T=[];
       T[0]= shortStr(array);
       T[1]= longStr(array);
       return T;
   }  

   //6
   