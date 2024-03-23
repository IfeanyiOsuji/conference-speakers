import React from "react";
import { useSpeakersFilter } from "../hooks/useSpeakersFilter";

export const SpeakerFilterContext = React.createContext();

const SpeakerFilterProvider = ({children, startingShowSesion=false, startingEventYear}) =>{

    const {showSessions, setShowSessions, eventYear, setEventYear, searchQuery, setSearchQuery, EVENT_YEARS} = useSpeakersFilter(startingShowSesion, startingEventYear);
    return(
        <SpeakerFilterContext.Provider value={{showSessions, setShowSessions,
        eventYear, setEventYear,
        searchQuery, setSearchQuery,
        EVENT_YEARS}}>
                {children}
        </SpeakerFilterContext.Provider>
    )

}
export  default SpeakerFilterProvider