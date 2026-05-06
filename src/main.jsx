import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './store/store.jsx';
import NotficationProvider from './assets/context/notificationContext.jsx';
import './index.css';
import App from './app/App.jsx';

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <NotficationProvider>
         <Provider store={store}>
            <App/>
         </Provider>
      </NotficationProvider>
   </StrictMode>
)