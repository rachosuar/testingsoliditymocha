/*
Concatenar dos cadenas.
Cree la función concatenar ( ).  
Esta función tomará dos argumentos, es decir, la cadena 1 y la cadena 2. Concatenará la cadena 1 y la cadena 2 y devolverá la cadena concatenada.
*/
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract concatenador{

    function concatenar (string memory _str1, string memory _str2) public pure returns(string memory){
        string memory str = " ";
        return string.concat(_str1,str,_str2);
    }
}