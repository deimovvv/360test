import React, { useEffect, useRef } from 'react';
import ReactPlayer from "react-player";
import styled from "styled-components";



const StyledVideoPlayer = styled(ReactPlayer)`
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  /* Agrega cualquier otro estilo que desees */
  position: absolute;
`;

const Container = styled.div`
width: 100%;
height: 100%;

`

const PlayerWrapper = styled.div`
position: relative;

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
<StyledVideoPlayer
                    className="video"
                    url={projectVideo}
                    controls
                    
                    width="100%"
                    height="800px"
                   
                   
                  />

</PlayerWrapper>

   
  );
}

export default App;