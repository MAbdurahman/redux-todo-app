import styled from 'styled-components';


export const StyledPreloaderContainer = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   width: 100vw;
   height: 100vh;
   z-index: 10000;
   overflow: hidden;
   background: white;
   display: -webkit-box;
   display: flex;
   -webkit-box-align: center;
   align-items: center;
   -webkit-box-pack: center;
   justify-content: center;
   scrollbar-width: none;
   -ms-overflow-style: none;

`;

export const StyledPreloader = styled.img`
   width: 66.6666%;
   align-self: center;
   @media screen and (min-width: 1030px) {
      width: 25%;
   
`