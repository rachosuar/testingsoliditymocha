/* 
1. Crea una funcion par(array, arraylength).
par() debe tomar dos tipos de argumentos - uno es un uint type array y el otro length del array.
2. la funcion par() debe multiplicar cada elemento del array por dos. 
Por ejemplo: Si array = [1,2,3,4,5] entonces par() debe devolver [2,4,6,8,10].
3. La funcion debe ser public.
*/

pragma solidity ^0.8.17;

contract arrayPar {
    function doubleArray(uint256[] memory arr, uint256 n)
        public
        pure
        returns (uint256[] memory)
    {
        uint256[] memory newArr;
        for (uint256 i = 0; i < n / 2; i++) {
           newArr[i]=arr[i]*2;
        }
        return newArr;
    }
}