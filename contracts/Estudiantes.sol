/*
Crear una estructura -> struct Estudiante { string nombre; uint256[3] notas; }
Crear dos funciones:
a) set(nombre del estudiante, notas en matematica, nota en historia,nota en ingles) - Para establecer el nombre y las notas de un estudiante en el array notas. 
b) get(), para obtener el nombre, las notas en matemáticas, las notas en ciencias y las notas en inglés del estudiante. Nota - La función será pública.
*/
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Estudiantes{
event notasSeteadas(string name,uint mat, uint hist, uint ingl,uint cien);
    
    struct Estudiante {
        string  nombre;
        uint[4] notas;
    }
  
     Estudiante nuevoEstudiante;
    
    function setNotas (string memory _name, uint _mat,uint _hist,uint _ingl, uint _cien) public {
        nuevoEstudiante.nombre=_name;
        nuevoEstudiante.notas[0]=_mat;
        nuevoEstudiante.notas[1]=_hist;
        nuevoEstudiante.notas[2]=_ingl;
        nuevoEstudiante.notas[3]=_cien;
    emit notasSeteadas(_name, _mat,_hist,_ingl,_cien);

    }


    function getNotas()  view public returns(uint[4] memory) {
        return nuevoEstudiante.notas;
    }
}
    