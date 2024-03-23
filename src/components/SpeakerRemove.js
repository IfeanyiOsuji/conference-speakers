import React, { useContext } from "react";
import { SpeakerContext } from "../contexts/SpeakerContext";


const SpeakerRemove = () =>{
    const {speaker, deleteRecord} = useContext(SpeakerContext);
   const onDeleteSpeaker = (e) =>{
    e.preventDefault();
    if(window.confirm('Are you sure you want to delete speaker?')){
    deleteRecord({...speaker});
    }
   }
    return (
        <span className="session w-100">
      <a href='#' className='remSes'>
      <i onClick={onDeleteSpeaker}>x</i>
    </a>
    <span className="padL2">Delete Speaker</span>
   </span>
    )
  
  }

  export default SpeakerRemove;
