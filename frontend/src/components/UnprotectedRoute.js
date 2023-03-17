import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { AuthConsumer } from './AuthContext'
import { useAuth } from 'react-use-auth'


// Redirect users away from these routes if they are already logged in
// const UnprotectedRoute = ({ component: Component, ...rest }) => (
//   <AuthConsumer>
//     {({ isAuth }) => (
//       <Route
//         render={props =>
//           !isAuth ? <Component {...props} /> : <Navigate to="/" />
//         }
//         {...rest}
//       />
//     )}
//   </AuthConsumer>
// )

const UnprotectedRoute = ({ children }) => {
    const authed = useAuth().isAuthenticated;

    return authed ? children : <Navigate to="/" />
}

export default UnprotectedRoute