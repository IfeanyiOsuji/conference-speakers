

import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

const withAuth = (Component) => {
    return (props)=>{
        const {loggedinUser, setLoggedinUser} = useContext(AuthContext)
  return (
    <Component loggedinUser={loggedinUser} setLoggedinUser={setLoggedinUser} {...props}></Component>
  )
    }
}

export default withAuth