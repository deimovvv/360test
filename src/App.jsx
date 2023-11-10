import React, { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const PlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`;



const ContainerTest = styled.div`
  width: 100px;
  height: 100px;
  background-color: #dcc36f;
  border-radius: 20px;
  cursor: pointer;
  margin: 10px;
  position: absolute;
`;

const LinkDiv = styled.div`
  text-align: center;
  padding-top: 10px;
`;



function App() {
  const videoRef = useRef(null);
  const projectVideo = 'https://www.youtube.com/watch?v=sPyAQQklc1s';

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement && videoElement.paused) {
      videoElement.play();
    }
  }, []);

  return (
    <PlayerWrapper>
      <ContainerTest>
        <LinkDiv>
          <a href='https://realidad360.com.ar/' target='_blank'>
            CLICK
          </a>
        </LinkDiv>
      </ContainerTest>

      <ReactPlayer
        url={projectVideo}
        controls
        config={{ file: { forceVideo: true } }}
        width='100%'
      />

     
    </PlayerWrapper>
  );
}

export default App;
