import React, { useContext, useState } from "react"
import { SpeakerContext } from "../contexts/SpeakerContext";


const ImageWithFallBack = ({src, ...props})=>{
  const [error, setError] = useState(false)
  const [imgaeSrc, setImageSrc] = useState(src);

  const onError = () =>{
    if(!error){
      //setImageSrc('/images/speaker-99999.jpg')
      setImageSrc('/images/dummy-speaker-image.jpg')
      setError(true)
    }
  }
    return (
     
      <img src={imgaeSrc} {...props} onError = {onError}/>
    )
}

const SpeakerImage = () =>{
    const {speaker:{id, first, last}} = useContext(SpeakerContext);
    return (
      <div className='speaker-img d-lex flex-row justify-content-center align-items-center h-300'>
      <ImageWithFallBack className='contain-fit'
      src={`/images/speaker-${id}.jpg`} width='300' alt={`${first} ${last}`}/>
    </div>
    )
  }

  export default SpeakerImage;