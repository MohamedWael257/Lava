import React, { useContext } from 'react'
import Signup from '../../components/auth/Signup'
import { AuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

const SignupPage = () => {
    const { currentUser, loading } = useContext(AuthContext);
    const ProtectedRoute = ({ children }) => {
        if (currentUser) {
            return < Navigate to='/' />
        }
        return children;
    };
    return (
        <ProtectedRoute>
            <Signup />
        </ProtectedRoute>

    )
}

export default SignupPage