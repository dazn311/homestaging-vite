/**
 * main
 * */
import {StrictMode} from 'react';
import {RouterProvider} from "react-router/dom";
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {store} from '@/store';
import {router} from "@/app/routes.tsx";
import '@/assets/vendor/bootstrap/css/bootstrap.min.css';
import '@/assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '@/assets/css/main.css';
import '@/app/index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
