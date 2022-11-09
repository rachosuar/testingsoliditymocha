
/* 
1. Crea una funcion expresion(x,n). 
 expresion() debe devolver la suma de la serie  1 + x + x^2+ x^3+ .. + x^n
Por ejemplo, si x=2 y n=3, entonces expresion() debe devolver 15 (1+2+4+8=15). 
Si x = 5 y n = 1, entonces expresion() debe devolver 6.
*/

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract resoulcionExpresion{
    function calculate (uint256 x, uint256 n) public pure returns (uint256) {
        uint256 acum = 1;

        for(uint i=1;i<n+1;i++){
            acum+=(x**i);
        }
        return acum;

    }
}