import React, { useContext} from 'react'
import Speaker from './Speaker'

//import {useRequestDelay, REQUEST_STATUS} from '../hooks/useRequestDelay'
//import { data } from '../../SpeakerData'

import { SpeakerFilterContext } from '../contexts/SpeakerFilterContext'
import SpeakerAdd from './SpeakerAdd'
import { useRequestRest, REQUEST_STATUS } from '../hooks/useRequestRest'
import { AuthContext } from '../contexts/AuthContext'



const SpeakerList = () => {
  
  //const {data:SpeakerData, requestStatus, errorMessage, updateRecord, insertRecord, deleteRecord} = useRequestDelay(2000, data);
  const {data, requestStatus, errorMessage, updateRecord, insertRecord, deleteRecord} = useRequestRest();
  const {searchQuery, eventYear} = useContext(SpeakerFilterContext)
 

  if(requestStatus === REQUEST_STATUS.FAILURE){
    return (
      <div className='text-danger'>
        ERROR : <b>loading Speaker Data Failed {errorMessage}</b>
      </div>
    )
  }
  
  return (
    
    <div className='container speaker-list'>
     <SpeakerAdd eventYear={eventYear} insertRecord={insertRecord}/>
    <div className='row'>
      {data.filter((speaker)=>{
          return speaker.first.toLowerCase().includes(searchQuery.toLowerCase()) || speaker.last.toLowerCase().includes(searchQuery.toLowerCase())
      }).filter(speaker =>speaker.sessions.find(session => session.eventYear === eventYear)).map(speaker =>{
        
        return(
          <Speaker key={speaker.id}  speaker={speaker} 
            updateRecord={updateRecord}
            insertRecord ={insertRecord}
            deleteRecord = {deleteRecord}/>)
      })
     
      }
   
    </div>
   
  </div>
  
  )
}

export default SpeakerList