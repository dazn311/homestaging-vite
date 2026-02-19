import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/css/main.css';
import './index.css';
import {RouterProvider} from "react-router/dom";
import {router} from "./Routes.tsx";
import {store} from './store';
import {Provider} from 'react-redux';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
