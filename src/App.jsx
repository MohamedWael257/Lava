import React, { useContext, useEffect } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import HomePage from './pages/homepage/HomePage'
import Footer from './components/footer/Footer'
import LoginPage from './pages/accountpage/LoginPage'
import SignupPage from './pages/accountpage/SignupPage'
import StorePage from './pages/storepage/StorePage'
import Productdetails from './components/store/productsdetail/Productdetails'
import OrdersPage from './pages/orderspage/OrdersPage'
import CartPage from './pages/cartpage/CartPage'
import CheckoutPage from './pages/checkoutpage/CheckoutPage'
import AboutPage from './pages/aboutpage/AboutPage'
import TeamPage from './pages/teampage/TeamPage'
import ProfilePage from './pages/profilepage/ProfilePage'
import ChatPage from './pages/chatpage/ChatPage'
import SecurityPage from './pages/securitypage/SecurityPage'
import BookingPage from './pages/bookingpage/BookingPage'
// import Loader from './components/loader/Loader'
import Admin from './components/admin/Admin';
import Loader from './components/loader/Loader'
import { AuthContext } from './context/AuthContext'
import icon from './assets/logo.png'
import loader from './assets/loader1.mp4'
import Onlyadmin from './context/Onlyadmin'
import { useDispatch } from 'react-redux'
import { getProducts } from './redux/slice/productslice'
import { getorders } from './redux/slice/orderslice'
import { sendEmailVerification, signOut, updateProfile } from 'firebase/auth'
import { auth } from './firebase/config'
import { ToastContainer, toast } from 'react-toastify'
import Orderdetails from './components/orders/Orderdetails'
import NotFound from './pages/NotFound/NotFound'
import Bookingdetails from './components/booking/bookingdetails/Bookingdetails'
import Bookingconfirm from './components/booking/bookingconfirm/Bookingconfirm'
import { getbooking } from './redux/slice/bookingslice'
import { getservices } from './redux/slice/serviceslice'

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
    dispatch(getorders());
    dispatch(getbooking());
    dispatch(getservices())
  }, [dispatch])
  const { currentUser, loading } = useContext(AuthContext);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  // console.log(currentUser);
  // useEffect(() => {
  //   if (currentUser && currentUser?.emailVerified !== true) {
  //     signOut(auth)
  //     sendEmailVerification(auth.currentUser);
  //     toast.info("you must Verified your email")
  //   }
  // }, [currentUser])

  return (
    <>
      {loading ? <Loader />
        : <>
          <ToastContainer />
          <Navbar />
          <Routes>
            <Route path="/Lava" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
            <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/store' element={<ProtectedRoute><StorePage /></ProtectedRoute>} />
            <Route path='/productdetails/:id' element={<ProtectedRoute><Productdetails /></ProtectedRoute>} />
            <Route path='/orders' element={<ProtectedRoute><OrdersPage /></ProtectedRoute>} />
            <Route path='/orderdetails/:id' element={<ProtectedRoute><Orderdetails /></ProtectedRoute>} />
            <Route path='/cart' element={<ProtectedRoute><CartPage /></ProtectedRoute>} />
            <Route path='/booking' element={<ProtectedRoute><BookingPage /></ProtectedRoute>} />
            <Route path='/bookingdetails/:id' element={<ProtectedRoute><Bookingdetails /></ProtectedRoute>} />
            <Route path='/bookingconfirm' element={<ProtectedRoute><Bookingconfirm /></ProtectedRoute>} />
            <Route path='/profile/*' element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
            <Route path='/checkout' element={<ProtectedRoute><CheckoutPage /></ProtectedRoute>} />
            <Route path='/profile/*' element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
            <Route path='/chat' element={<ProtectedRoute><ChatPage /></ProtectedRoute>} />
            <Route path='/security' element={<ProtectedRoute><SecurityPage /></ProtectedRoute>} />
            <Route path='/About' element={<ProtectedRoute><AboutPage /></ProtectedRoute>} />
            <Route path='/Team' element={<ProtectedRoute><TeamPage /></ProtectedRoute>} />
            <Route path='/admin/*' element={<Onlyadmin><Admin /></Onlyadmin>} />
            <Route path='/Lava' element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
            <Route path='/*' element={<ProtectedRoute><NotFound /></ProtectedRoute>} />
          </Routes>
          <Footer />
        </>
      }
    </>
  )
}

export default App