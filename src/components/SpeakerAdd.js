import React, { useContext } from "react";
import withAuth from "./withAuth";
import { AuthContext } from "../contexts/AuthContext";


const SpeakerAdd = ({eventYear, insertRecord, loggedinUser}) =>{
    
      if(!loggedinUser || loggedinUser.length === 0) return null;
    const onAddSpeaker = (e) =>{
      e.preventDefault();
      const firstlast = window.prompt('Enter first and last name:', '');
      const firstLastArray = firstlast.split(' ');
      insertRecord({
        id  : `${Math.round(Math.random(1, 100))}`.concat('000'),
        first : firstLastArray[0],
        last : firstLastArray[1],
        sessions : [
          {id : `${Math.round(Math.random(1, 100))}`.concat('000'),
          title : `New session for ${firstlast}`,
          room :{
            name : 'Main Ball room'
          },
          eventYear,
        }
        ]
      })
  
    }
   
     return (
      <a href='#' className='addSes'>
        <i onClick={onAddSpeaker}>+</i>
      </a>
    );
  }

  export default withAuth(SpeakerAdd);