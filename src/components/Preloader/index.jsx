import React, {useEffect, useRef} from 'react';
import {StyledPreloaderContainer,
   StyledPreloader} from '../styles/Preloader.styled.jsx';
import PreloaderGif from '../../assets/img/preloader.gif';

export default function Preloader() {
   const preloaderRef = useRef(null);
   const preloaderImageRef = useRef(null);

   useEffect(() => {
      preloaderRef.current.style.transition = 'opacity 6750ms ease-in-out';
      preloaderRef.current.style.opacity = '0';
      preloaderImageRef.current.style.transition = 'opacity 6750ms ease-in-out';
      preloaderImageRef.current.style.opacity = '0';
   })


   return (
      <StyledPreloaderContainer ref={preloaderRef}>
         <StyledPreloader src={PreloaderGif} ref={preloaderImageRef} />
      </StyledPreloaderContainer>

   );
}