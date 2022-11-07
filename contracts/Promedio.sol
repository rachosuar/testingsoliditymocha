/* 
Crea una funcion promedio(int a, int b, int c)
Donde a>0, b>0, c>0.
Devolve el promedio de a, b y c. La funcion debe ser public. */
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Promedio {
    function calcular(uint a, uint b, uint c) public pure returns (uint) {
        uint resultado = (a+b+c)/3;
        return resultado;
    }
}