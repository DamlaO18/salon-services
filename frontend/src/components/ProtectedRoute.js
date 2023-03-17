import React from 'react'
import { Route, Navigate } from 'react-router-dom'
import { AuthConsumer } from './AuthContext'

// Redirect users away from these routes if they are NOT logged in
const ProtectedRoute = ({ component: Component, ...rest }) => (
  <AuthConsumer>
    {({ isAuth }) => (
      <Route
        render={props =>
          isAuth ? <Component {...props} /> : <Navigate to="/" />
        }
        {...rest}
      />
    )}
  </AuthConsumer>
)

export default ProtectedRoute