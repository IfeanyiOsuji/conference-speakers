import { useState } from "react";


export const useSpeakersFilter = (startingShowSesion, startingEventYear='2019')=>{
    const [showSessions, setShowSessions] = useState(startingShowSesion);
    const [eventYear, setEventYear] = useState(startingEventYear);
    const [searchQuery, setSearchQuery] = useState('');

    const EVENT_YEARS = [
        "2008",
        '2009',
        '2010',
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
        '2016',
        '2017',
        '2018',
        '2019'
    ]

    return {showSessions, setShowSessions, eventYear, setEventYear, searchQuery, setSearchQuery, EVENT_YEARS};

}