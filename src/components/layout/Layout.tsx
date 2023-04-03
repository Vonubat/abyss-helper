import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import ModalClearHistory from '../modal/ModalClearHistory';

import Header from './Header';

export const Layout = (): JSX.Element => {
  return (
    <>
      <Header />
      <Outlet />
      <ModalClearHistory />
      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover
      />
    </>
  );
};
