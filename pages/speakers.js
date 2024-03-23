import React from "react"


const Speakers = () =>{
    
    const SpeakersrenderedProps = (props) =>{
        const speakers = [
            {SpeakerSrc: 'speaker-1124', name: 'Douglas Crockford'},
            {SpeakerSrc: 'speaker-1530', name: 'Tamara Baker'},
           { SpeakerSrc: 'speaker-10803', name: 'Eugene Chuvyrov'}
        ];
        return props.children({speakers:speakers,});
    }
    
    return (
        <SpeakersrenderedProps>{ ({speakers}) =>
        <div>
            {speakers.map(({SpeakerSrc, name}) =>(
                <img src={`/images/${SpeakerSrc}.jpg`} alt={name} key={SpeakerSrc}/> 
                
            ))}
        </div>
}
        </SpeakersrenderedProps>
    )
}

export default Speakers;