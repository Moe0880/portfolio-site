function sumAll(){ 
var nums = document.getElementById('nums').value
var sum = document.getElementById('sum')
var total = 0
var numArray = nums.split(',')

var i = 0
while (i< numArray.length){
  total += parseInt(numArray[i])
  i++
}
sum.innerHTML =total
}


//for (var i = 0; i < numArray.length; i++){
  //total += parseInt(numArray[i])
//}
 //sum.innerHTML =total
//}
