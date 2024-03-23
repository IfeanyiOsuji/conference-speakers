import React from "react"
import withdata from "../src/components/withData";

const Speakers = ({speakers}) =>{
    
    return (
        <div>
            {speakers.map(({SpeakerSrc, name}) =>(
                <img src={`/images/${SpeakerSrc}.jpg`} alt={name} key={SpeakerSrc}/> 
            ))}
        </div>
    )
}

export default withdata(2)(Speakers);