import React, { useRef, useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';




const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  
`;

const StyledReactPlayer = styled(ReactPlayer)`
  width: 100% !important; /* Anula cualquier ancho establecido por ReactPlayer */
  height: 100% !important; /* Anula cualquier altura establecida por ReactPlayer */
`;



const ContainerTest = styled.div`
  width: 100px;
  height: 50px;
  background-color: #dcc36f;
  border-radius: 20px;
  cursor: pointer;
  margin: 100px;
  position: absolute;
`;

const LinkDiv = styled.div`
  text-align: center;
  padding-top: 10px;
`;



function App() {
  const videoRef = useRef(null);
  const projectVideo = 'https://www.youtube.com/watch?v=LEz0bBIDvbo';
  const [playing, setPlaying] = useState(false);



  const handleClick = () => {
    setPlaying(!playing);
  };

  return (
    <PlayerWrapper>
      <a href='https://realidad360.com.ar/' target='_blank'>
      <ContainerTest>
        <LinkDiv>
          
            CLICK
         
        </LinkDiv>
      </ContainerTest>
      </a>

    
<ReactPlayer
url={projectVideo}
controls={true}
playing={playing}
config={{ file: { forceVideo: true } }}
width='100%'
height="100vh"
allowFullScreen
onClick={handleClick}
playsInline
/>

     



     
    </PlayerWrapper>
  );
}

export default App;
