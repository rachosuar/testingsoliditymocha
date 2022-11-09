/* crea una estructura => struct Libro {
    -  titulo
    - autor
    - uint256 paginas
    - bookid
    }
1. Crea dos funciones : 
a) setLibro(title(string), author(string), pages(uint256), bookid(id)
para setear estos parametros.
b) getLibro() para obtener los datos del libro, autor, titulo paginas e id.
2. La funcion debe ser publica.
*/

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract estructuraLibros{
    struct estructuralibro {
        string title;
        string author;
        uint256 pages;
        uint256 id;
    }

    estructuralibro _libro;

    function setBook (string memory _title,string memory _author,uint256 _pages , uint256 _id) public {
        
        _libro.title = _title;
        _libro.author=_author;
        _libro.pages=_pages;
        _libro.id=_id;
    }


    function getBook() public view returns ( estructuralibro memory) {
       return  _libro;
      
    }
}
