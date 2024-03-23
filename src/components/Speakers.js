
import React, { useContext, useState } from 'react'
import SpeakersToolBar from './SpeakersToolBar'
import SpeakerList from './SpeakerList'
import { ThemeContext } from '../contexts/ThemeContext';
import SpeakerFilterProvider, { SpeakerFilterContext } from '../contexts/SpeakerFilterContext';


const Speakers = () => {
    
  return (
    <SpeakerFilterProvider>
     <SpeakersToolBar />
     <SpeakerList />
    </SpeakerFilterProvider>
   
  )
}

export default Speakers