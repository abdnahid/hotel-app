import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <ToastContainer position='bottom-right' />
      <Footer />
    </>
  );
};

export default Layout;
