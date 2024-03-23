import React, { useContext } from "react";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";
import { SpeakerContext } from "../contexts/SpeakerContext";

function Sessions(){
  const {eventYear} = useContext(SpeakerFilterContext);
  const {speaker:{sessions}} = useContext(SpeakerContext)
  return (
    <div className='sessionBox card h-250'>
      {sessions.filter(session => session.eventYear === eventYear)
      .map(session => (<Session {...session} key={session.id}/>))}
      
      </div>
  )
}

const Session = ({title, room}) =>{
    
    return(
     
      <span className='session w-100'>
          
          {title} <strong>Room: {room.name}</strong>

      </span>
    
    )
  }
  export default Sessions;