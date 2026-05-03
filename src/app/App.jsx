
import PageTitle from '../components/PageTitle/index.jsx';
import Header from '../layout/Header/index.jsx';
import MainContent from '../layout/MainContent/index.jsx';

export default function App() {

   return (
      <div className='container'>
         <PageTitle>ToDo App</PageTitle>
         <section className='appWrapper'>
            <Header/>
            <MainContent/>
         </section>
      </div>

   );
}