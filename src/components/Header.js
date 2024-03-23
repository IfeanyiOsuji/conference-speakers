import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext';
import AuthProvider, { AuthContext } from '../contexts/AuthContext';
import withAuth from './withAuth';






const Header = ({loggedinUser, setLoggedinUser}) => {
    const {theme} = useContext(ThemeContext);

    const LoggedinUser = ({loggedinUser, setLoggedinUser}) =>{
        return (
            <div>
                <span> Logged in as {loggedinUser}</span>
                <button className='btn btn-secondary'
                onClick={()=>{setLoggedinUser("")}}
                >Logout</button>
            </div>
        )
    }

    const NotLoggedinUser = ({loggedinUser, setLoggedinUser}) =>{
        return (
            <button className='btn btn-primary'
            onClick={(e)=>{
                e.preventDefault();
                const username = window.prompt("enter Login name", "");
                setLoggedinUser(username)
            }}
            >Login</button>
            
        )
    }
    
  return (
   
    <div className='padT4 padB4'>
        <div className='container mobile-container'>
        <div className='d-flex justify-content-between'>
            <div>
                <img alt='SVCC Home page' 
                src='/images/SVCClogo.png'/>
            </div>
            <div className='light'>
                <h4 className='header-title'>Silicon Valley Code Camp</h4>
            </div>
            <div className={theme =='light'? '':'text-info'}>
               {
                loggedinUser && loggedinUser.length > 0 ? 
                <LoggedinUser loggedinUser={loggedinUser} setLoggedinUser ={setLoggedinUser}/>:
                <NotLoggedinUser loggedinUser={loggedinUser} setLoggedinUser ={setLoggedinUser}/>
               }
            </div>
        </div>
        </div>
    </div>
   
  )
}

export default withAuth(Header)