import React, { useContext, useState } from "react";
import { SpeakerContext } from "../contexts/SpeakerContext";


const SpeakerFavourite = () =>{
    const [inTransition, setIntransition] = useState(false);
    const {speaker, updateRecord} = useContext(SpeakerContext);
    const doneCallBack = ()=>{
      setIntransition(false);
    }
  return (
    <div className="action padB1">
      <span onClick={()=>{
        setIntransition(true);
        updateRecord(
          {...speaker, favorite:!speaker.favorite},
        doneCallBack);
        }}>
        <i className={
          speaker.favorite === true ?
          'fa fa-star orange' : 'fa fa-star-o orange'
        } />{" "}
        Favorite{" "}
        {inTransition ? (<span className="fas fa-circle-notch fa-spin"></span>): null}
      </span>
  
    </div>
  )
  }
  export default SpeakerFavourite;