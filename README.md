# Retos - Team Mobile

## Objetivo

1. Dado el siguiente Arreglo de números enteros:

**Arreglo = [45, 75, 200, 256, 1, 27]**

* Obtener el número mayor del arreglo.
* Obtener el número menor del arreglo.
* Obtener el segundo número mayor del arreglo.


2. Dado el siguiente Arreglo de cadenas:

**ArregloDeCadenas =  [“erik”, ”leonardo”, ”andres”, “gerardo”, ”jan”, “renzo”]**

* Obtener el nombre más largo y escribirlo colocando en mayúscula la primera letra.
* Ordenar el arreglo alfabéticamente en forma ascendente(a-z), SIN USAR los métodos nativos (sort, map, filter, each) y mostrar el resultado en un listado.

## Solucion

* Para obtener el mayor número,inicializamos una variable y al ir iterando el arreglo comparamos que sea mayor a nuestro valor inicial.

* Para el menor tenemos como valor inicial el mayor número, vamos iterando y comparando hasta conseguir el menor de todos.

* Para el segundo mayor, inicializamos otra variable pero esta vez al iterar buscamos el número mayor pero que a su vez sea menor que el primer mayor que encontramos en el punto 1.

* Para el nombre mas largo realizamos doble iteracion, primero para recorrer los vectores que contiene,y el segundo para recorrer cada nombre,obteniendo la longitud de estos nombre comparamos hasta encontrar el de mayor longitud.

* Para ordenar el arreglo alfabéticamente se toma un primer elemento del arreglo el cual está ordenado ya que es unico. Despues si hay **j** elementos ordenados de forma ascendente, tomamos el elemento **j+1** y lo comparamos con todos los elementos que ya están ordenados,al encontrar uno menor los mayores se habran desplazado a la derech,se inserta dicho elemento (j+1) desplazando al resto.

Realizado por [Marina Rodriguez](https://github.com/MarinaRH)
