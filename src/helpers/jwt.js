const getJwt = () =>{
    const userData= {
      token: localStorage.getItem('token'),
      id_user: localStorage.getItem('id_user'),
      email: localStorage.getItem('email'),
      role: localStorage.getItem('role'),
      id_engineer: localStorage.getItem('id_engineer'),
      id_company: localStorage.getItem('id_company')
    }
    return userData
  }

export default getJwt