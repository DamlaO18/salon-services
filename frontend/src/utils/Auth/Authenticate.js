import axios from 'axios'

const Authenticate = async () => {
  let auth = { isAuth: true, email: '' }
  await axios.get('http://localhost:3000/api/v1/auth/me', { withCredentials: true })
  .then( resp => {
    auth = { isAuth: resp.data.logged_in, email: resp.data.email }
    return auth
  })
  .catch( err => console.log(err) )

  return auth
}

export default Authenticate