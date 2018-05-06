
var btnMax = document.getElementById("btn-max");
var maxNum = document.getElementById("maxNum");

btnMax.addEventListener('click',function() {
    
    var array = [45,75,200,256,1,27];
    maxNum.value = Math.max.apply(true,array);
    // console.log(maxNum);

});