var btnMax = document.getElementById("btn"),
maxNum = document.getElementById("maxNum"),
minNum = document.getElementById("minNum"),
secondNum = document.getElementById("secondNum"),
array = [45,75,200,256,1,27];

btnMax.addEventListener('click',function() {
// ejercicio 1a
    var mayor = 0;
    for(i = 0; i < array.length; i++){
        if (array[i] > mayor)
        {
            mayor = array[i];
        }
    }
    maxNum.value = mayor;

// ejercicio 1b
    var menor = mayor;
    for(i = 0; i < array.length; i++){
        if (array[i] < menor)
        {
            menor = array[i];
        }
    }
    minNum.value = menor;
    
// ejercicio 1c
    var second=0;
    for(i = 0; i < array.length; i++){
        if (array[i] > second & array[i] < mayor)
        {
            second = array[i];
        }
    }
    secondNum.value = second;
});