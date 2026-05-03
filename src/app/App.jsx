
import Header from '../layout/Header/index.jsx';
import PageTitle from '../components/PageTitle/index.jsx';

export default function App() {

   return (
      <div className='container'>
         <PageTitle>ToDo App</PageTitle>
         <section className='appWrapper'>
            <Header/>

         </section>
      </div>

   );
}