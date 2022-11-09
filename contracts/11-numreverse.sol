/* crea una funcion numreverse(uint n). Esta funcion devolvera el numero reverso de n.
For ejemplo, si n=123, entonces numreverse(n) debe devolver 321.
La funcion debe ser public. */

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract numreverse {
    function calcular(uint256 n) public pure returns (uint256) {
        uint256 _acum=n%10;
        uint256 number=n/10;
        while(number>0){
            _acum=(_acum*10)+(number%10);
            number=number/10;
        }
      return _acum;
    }
}