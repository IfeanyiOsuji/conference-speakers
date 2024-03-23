import React, { memo, useContext } from "react";
import SpeakerImage from "./SpeakerImage";
import SpeakerInfo from "./SpeakerInfo";
import Sessions from "./Session";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";
import SpeakerProvider from "../contexts/SpeakerContext";
import SpeakerRemove from "./SpeakerRemove";
import ErrorBoundary from "./ErrorBoundry";

const SpeakerNoErrorBoundry = memo(({speaker, updateRecord, insertRecord, deleteRecord, showErrorCard}) =>{
    
  const {showSessions} = useContext(SpeakerFilterContext)
  console.log('Calling Speaker')

  if(showErrorCard){
    return (
      <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12'>
      <div className='card card-height p-4 mt-4'>
          <img src="/images/dummy-speaker-image.jpg"/>
        <div> <strong>Error showing speaker</strong></div>
      </div>
    </div>
    )
  }
    
    return(

      <SpeakerProvider speaker={speaker} updateRecord={updateRecord} insertRecord={insertRecord} deleteRecord={deleteRecord}>
      <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12'>
      <div className='card card-height p-4 mt-4'>

        <SpeakerImage />
        <SpeakerInfo />
        
      </div>{
        showSessions === true?
         <Sessions/> : null
      }   
      <SpeakerRemove />
    </div>
    </SpeakerProvider>)

  }, areEqualSpeaker);

  function areEqualSpeaker (prevProps, nextProps){
    return prevProps.speaker.favorite === nextProps.speaker.favorite;
  };

  const Speaker = (props) =>{
    return (
      <ErrorBoundary errorUI = {<SpeakerNoErrorBoundry showErrorCard={true}/>}>
        <SpeakerNoErrorBoundry {...props}/>
        </ErrorBoundary>

      
    )
  }

  export default Speaker