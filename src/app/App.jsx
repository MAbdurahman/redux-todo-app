
import React, {useEffect, useState, Fragment} from 'react';
import PageTitle from '../components/PageTitle/index.jsx';
import Header from '../layout/Header/index.jsx';
import MainContent from '../layout/MainContent/index.jsx';
import Preloader from '../components/Preloader/index.jsx';

export default function App() {
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const timerId = setTimeout(() => {
         setIsLoading(false);
      }, 5000);
      return () => clearTimeout(timerId);

   }, []);

   return (
      <Fragment>
         {
            isLoading ? (<Preloader />) :
               (<div className='container app fade-in'>
                  <PageTitle>ToDo App</PageTitle>
                  <section className='appWrapper'>
                     <Header/>
                     <MainContent/>
                  </section>
               </div>)
         }
      </Fragment>
   );
}