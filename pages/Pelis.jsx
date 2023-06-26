import { useEffect ,useState} from 'react';
import styled from '@emotion/styled';
const Contenedor = styled.div`
    color: #fff;
    font-family:"Lato",sans-serif;
    display:flex;
    align-items:center;
    gap:1rem;
    margin-top:30px;
`
const Titulo = styled.p`
    color:red;
    font-family:"Lato",sans-serif;
    text-align:center;
`
const Imagen =styled.img`
    display:block;
    width:120px;

`


const Pelis = async({peliculas,titulo})=>{
  
   <Contenedor>
    <Titulo>
        {titulo}
    </Titulo>
    <Imagen src={peliculas}/>
   </Contenedor>   
   
}


   


export default Pelis
