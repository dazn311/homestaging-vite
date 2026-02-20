/**
 * main
 * */
import {StrictMode} from 'react';
import {RouterProvider} from "react-router/dom";
import {Provider} from 'react-redux';
import {store} from '../store/store.ts';
import {createRoot} from 'react-dom/client';
import {router} from "./Routes.tsx";
import '../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../assets/css/main.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
