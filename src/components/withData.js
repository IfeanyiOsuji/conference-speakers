import React from "react"


const withdata = (maximumSpeakers) =>{
    return (Component)=>{
    const speakers = [
        {SpeakerSrc: 'speaker-1124', name: 'Douglas Crockford'},
        {SpeakerSrc: 'speaker-1530', name: 'Tamara Baker'},
       { SpeakerSrc: 'speaker-10803', name: 'Eugene Chuvyrov'}
    ]
    const limitspeakers = speakers.slice(0, maximumSpeakers);
    return () =>(
        <Component speakers={limitspeakers} maximumSpeakers={maximumSpeakers}></Component>
    )
    }
}

export default withdata;