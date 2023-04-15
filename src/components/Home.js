import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Viewers from './Viewers'
import Movies from './Movies'
import Data from '../disneyPlusMoviesData.json'
import {useDispatch} from 'react-redux'
import {setMovies} from '../features/counter/movie/movieSlice'

// const [movies, setMovies] = useState([]);

// async function fetchMovies() {
//   const response = await fetch('../disneyPlusMoviesData.json');
//   setMovies(await response.json());
//   console.log(response);
// }

// useEffect(()=>{
//   fetchMovies();
// }); 



  

export default function Home() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(setMovies(Data));
  })
 

  return (
    <Container>
        <ImgSlider />
        <Viewers />
        <Movies />
    </Container>
  )
}

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px) 60px;
    position: relative;
    overflow-x: hidden;
    
    &:before {
        background: url("/images/home-background.png") center center / cover 
        no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`
