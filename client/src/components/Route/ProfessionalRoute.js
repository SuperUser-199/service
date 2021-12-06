import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import Loader from '../layout/Loader/Loader';

const ProfessionalRoute = ({ component : Component }) => {
    const { loading, user } = useSelector(state => state.user);
    return (
        <>
            {
                loading ? <Loader /> : (
                    <>
                        {
                            user == null || user.role !== 'professional' ? <Navigate to='/login'/> : (
                                <Component />
                            )
                        }
                    </>
                )
            }
        </>
    )
}

export default ProfessionalRoute;
