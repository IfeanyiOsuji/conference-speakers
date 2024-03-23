import React, { useContext} from "react";
import { SpeakerContext } from "../contexts/SpeakerContext";
import SpeakerFavourite from "./SpeakerFavourite";
import SpeakerRemove from "./SpeakerRemove";




const SpeakerInfo = () =>{
  const {speaker:{first, last, bio, company, twitterHandle}} = useContext(SpeakerContext)
    return (
      <div className='speaker-info'>
       
      <div className='d-flex justify-content-between mb-3'>
        <h3 className='text-truncate w-20'>{`${first} ${last}`} </h3>
        
      </div>
      
      <SpeakerFavourite /> 
      <div><p className="card-description">{bio.substr(0, 70)}</p>
      <div className="social d-flex flex-row mt-4">
        <div className="company">
            <h5>
                Company
            </h5>
            <h6>{company}</h6>
        </div>
        <div className="twitter">
            <h5>Twitter</h5>
            <h6>{twitterHandle}</h6>
        </div>
      </div>
      </div>
    </div>
    );
}

export default SpeakerInfo;