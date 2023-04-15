import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import {useParams} from "react-router-dom"
import Data from "../disneyPlusMoviesData.json"
import { compose } from '@reduxjs/toolkit';

export default function Detail() {
  const {id} = useParams();
  const [movie, setMovie] = useState([]);
  // console.log(Data[id - 1])
  

  useEffect(()=>{
    if(Data[id - 1] != undefined){
      setMovie(Data[id - 1]);
    } else {
      // redirect to home page
    }
  })

  return (
    <Container>
      {movie &&
      <>
      <Background>
        <img src={movie.backgroundImg}/>
      </Background>
      
      <ImageTitle>
        <img src={movie.titleImg} />
      </ImageTitle>

      <Controls>

        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButton>

        <TrialerButton>
          <img src="/images/play-icon-WHITE.png" />
          <span>TRAILER</span>
        </TrialerButton>

        <AddButton>
          <span>+</span>
        </AddButton>

        <GroupWatchButton>
          <img src="/images/group-icon.png" />
        </GroupWatchButton>

      </Controls>

      <SubTitle>
          {movie.subTitle}
      </SubTitle>

      <Description>
        {movie.description}
      </Description>
      </>
    }
    </Container>

  )
}

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`

const Background = styled.div`
  position: fixed;
  top : 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    oject-fit: cover;
  }
`

const ImageTitle = styled.div`
  margin-top: 60px;
  height: 30vh;
  min-height: 170px;
  width: 35vw;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`
const Controls = styled.div`
  display: flex;
  align-items: center;
`
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding: 0px 24px;
  margin-right: 22px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  letter-spacing: 1.8px;
  cursor: pointer;

  &:hover {
    background: rgb(198, 198, 198);
  }

`
const TrialerButton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
  text-transform: uppercase;
` 
const AddButton = styled.button`
margin-right: 16px;
  width: 44px;
  height: 44px;
  border: 2px solid white;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  display:flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span {
    font-size: 30px;
    color: white;
  }
`
const GroupWatchButton = styled(AddButton)`
  background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 26px;
`

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  color: rgb(249, 249, 249);
  max-width: 750px;
`