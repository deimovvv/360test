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



<Container>
<div className='ratio ratio-16x9'>

<iframe src="https://www.youtube.com/embed/sPyAQQklc1s?si=ihed-LnLYFEe7xDc"
    
    title='Youtube video player'
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; vr'
    allowFullScreen
    >
</iframe>
</div>

</Container>


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