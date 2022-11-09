/* 
1. crea una funcion ordenar(array, arrayLength). 
Esta funcion debe tomar dos argumentos, una dinamica uint type array y la longitud del array.
2. ordenar() debe devolver un array con los elementos del array original en orden ascendente.
Por ejemplo, si array = [5,4,3,2,1] entonces ordenar() debe devolver [1,2,3,4,5].
3. La funcion debe ser public. 
*/
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract arrayOrdenado {
    function sort(int256[] memory array, uint256 n)
        public
        pure
        returns (int256[] memory)
    {
        for (uint256 i = 0; i < n - 1; ++n) {
            int256 acum = 0;

            for (uint256 e = 0; e < n - e - 1; ++e) {
                if (array[e] > array[e + 1]) {
                    int256 temp;
                    temp = array[e];
                    array[e] = array[e + 1];
                    array[e + 1] = temp;

                    acum = 1;
                }
            }

            if (acum == 0) {
                break;
            }
        }
        return array;
    }
}