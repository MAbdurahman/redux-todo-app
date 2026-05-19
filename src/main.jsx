import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from './store/store.jsx';
import NotificationProvider from './assets/context/notificationContext.jsx';
import './styles/GlobalStyles.css';
import App from './app/App.jsx';

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <NotificationProvider>
         <Provider store={store}>
            <App/>
         </Provider>
      </NotificationProvider>
   </StrictMode>
)