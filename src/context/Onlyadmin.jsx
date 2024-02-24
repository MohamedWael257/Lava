import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { AuthContext } from './AuthContext';
import { Navigate } from 'react-router-dom';
const Onlyadmin = (props) => {
    const { currentUser } = useContext(AuthContext);
    if (currentUser?.email === "admin@gmail.com") {
        return (
            props.children
        )
    }
    else if (!currentUser) {
        return <Navigate to='/Login' />
    }
}
export const Adminlink = (props) => {
    const { currentUser } = useContext(AuthContext);
    if (currentUser?.email === "admin@gmail.com") {
        return (
            props.children
        )
    }
    else if (!currentUser) {
        return <Navigate to='/Login' />
    }
}
export default Onlyadmin