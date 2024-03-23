import React from "react";

export const SpeakerContext = React.createContext();

const SpeakerProvider = ({children,speaker, updateRecord, insertRecord, deleteRecord}) =>{

    return (
        <SpeakerContext.Provider value={{speaker, updateRecord, insertRecord, deleteRecord}}>
            {children}
        </SpeakerContext.Provider>
    )

}
export default SpeakerProvider;