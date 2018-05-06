// ejercicio 1a

var btnMax = document.getElementById("btn-max"),
maxNum = document.getElementById("maxNum");

btnMax.addEventListener('click',function() {
    
    var array = [45,75,200,256,1,27];
    maxNum.value = Math.max.apply(true,array);
    // console.log(maxNum);

});

// ejercicio 1b

var btnMin = document.getElementById("btn-min"),
minNum = document.getElementById("minNum");

btnMin.addEventListener('click',function() {

    var array = [45,75,200,256,1,27];
    minNum.value = Math.min(...array);

});