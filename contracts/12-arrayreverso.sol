/* 
1. Crea una funcion arrayReverso(array, lengthArray). 
Esta funcion tomara dos argumentos - un type uint dinamico array y la longitud del array.
2. arrayReverso() debe devolver un array con los elementos del array original en orden inverso.
Por ej: Si array = [1,2,3,4,5] entonces arrayReverso() debe devolver [5,4,3,2,1].
3. La funcion debe ser public.
*/  
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract ArrayReverso {
    function reverseArray(uint256[] memory arr, uint256 len)
        public
        pure
        returns (uint256[] memory)
    {
        uint256 temp;
        for (uint256 i = 0; i < len / 2; i++) {
            temp = arr[i];
            arr[i] = arr[len - i - 1];
            arr[len - i - 1] = temp;
        }
        return arr;
    }
}