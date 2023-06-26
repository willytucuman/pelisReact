import { useState ,useEffect} from 'react'
import { Routes,Route } from 'react-router-dom'
import Layout from '../pages/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Default from "../pages/Default"
import Pelis from '../pages/pelis'
import Populares from '../pages/Populares'
import Estrenos from '../pages/Estrenos'
import Registro from "../pages/Registro"
import styled from"@emotion/styled";
import axios from 'axios'
const Contenedor = styled.div`
    color: #fff;
    font-family:"Lato",sans-serif;
    display:flex;
    grid-template-areas:"nav";
    align-items:center;
    gap:1rem;
    margin-top:30px;
`
function App() {
  // const [peliculas,setPeliculas] = useState([])
  //   const [titulo,setTitulo] = useState([])

  // useEffect(async()=>{
    
  //       const respuesta = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=95449bef66635434cc1611f22c1f24d3&language=es-MX");
  //       const datos = await respuesta.data;
  //       const resultados = datos.results;
  //       resultados.forEach(element => {
  //           setPeliculas(`https://image.tmdb.org/t/p/w500/${element.poster_path}`)
  //           setTitulo(`${element.title}`)
  //       });
  // },[peliculas,titulo])

  return (
    <>
    <Contenedor>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='about' element={<About/>}/>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='pelis' element={<Pelis/>}/> */}
          <Route path='estrenos' element={<Estrenos/>}/>
          <Route path='populares' element={<Populares/>}/>
          {/* <Route path='pelis' element={<Pelis/>}/> */}
          <Route path='registro' element={<Registro/>}/>

          <Route path='*' element={<Default/>}/>
        </Route>
      </Routes>
      </Contenedor>
    </>
  )
}

export default App
