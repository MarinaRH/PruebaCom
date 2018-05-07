var btn = document.getElementById("btn"),
btn2 = document.getElementById("btn2"),
maxNum = document.getElementById("maxNum"),
minNum = document.getElementById("minNum"),
secondNum = document.getElementById("secondNum"),
nameLarge = document.getElementById("large"),
array = [45,75,200,256,1,27],
arreglo = ['erik','leonardo','andres','gerardo','jan','renzo'];

btn.addEventListener('click',function() {
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

// ejercicio2

btn2.addEventListener('click',function() {
    
    var large = 0;
    
    for(i = 0; i < arreglo.length; i++){

    for(j = 0; j < arreglo[i].length; j++){
        
        if (arreglo[i].length > large)
        {
            large = arreglo[i].length;
            var name = arreglo[i];
        }
    }

    }
    nameLarge.value= name;
});