import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Wrapper from './Wrapper.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(    
     <Wrapper>
          <App />
          <ToastContainer position="top-center" />
     </Wrapper>
);
