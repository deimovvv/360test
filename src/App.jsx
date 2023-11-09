import React, { useEffect, useRef } from 'react';
import ReactPlayer from "react-player";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "react-bootstrap"




const StyledVideoPlayer = styled(ReactPlayer)`
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  /* Agrega cualquier otro estilo que desees */
  position: absolute;
`;



const PlayerWrapper = styled.div`
position: relative;

`

const ContainerTest = styled.div`
width: 100px;
height: 100px;
background-color: #dcc36f;
z-index: 1000;
position: absolute;
right: 800px;
top: 200px;
border-radius: 20px;
cursor: pointer;
`

const LinkDiv = styled.div`
  text-align: center;
  padding-top: 33px;
`





function App() {


  const videoRef = useRef(null);
  const projectVideo = `https://www.youtube.com/watch?v=sPyAQQklc1s`;

  useEffect(() => {
    // Accede al elemento de video utilizando videoRef.current
    const videoElement = videoRef.current;

    // Verifica si el video está pausado y si no lo está, llama al método play()
    if (videoElement && videoElement.paused) {
      videoElement.play();
    }

   
  }, []);

  const videoElement = videoRef.current;

    // Verifica si el video está pausado y si no lo está, llama al método play()
    if (videoElement && videoElement.paused) {
      videoElement.play();
    }

  return (
   
  
  
             
<PlayerWrapper>






<ContainerTest>
<LinkDiv>
<a href='https://realidad360.com.ar/' target='_BLANK' >CLICK </a>
</LinkDiv>

</ContainerTest>


<StyledVideoPlayer
                    className="video"
                    url={projectVideo}
                    controls
                    config={{ file: { forceVideo: true } }}
                    width="100%"
                    height="800px"
                   
                   
                  />


</PlayerWrapper>

  
     
 
   
  );
}

export default App;