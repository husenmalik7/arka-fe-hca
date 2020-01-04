const getJwt = () =>{
    const userData= {
      token: localStorage.getItem('token'),
      id_user: localStorage.getItem('id_user'),
      email: localStorage.getItem('email'),
      role: localStorage.getItem('role')
    }
    return userData
  }

export default getJwt