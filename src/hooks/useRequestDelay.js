import { useEffect, useState } from "react";



const REQUEST_STATUS = {
    LOADING : 'loading',
    SUCCESS : 'success',
    FAILURE : 'failure'
}


const useRequestDelay = (seconds =1000, initialdata = []) =>{

    const [data, setData] = useState([]);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [errorMessage, setErrorMessage] = useState('');
  
  
    const delay = (ms) => new Promise(resolve => setInterval(resolve,ms));
  
  
    useEffect(()=>{
      async function getDelay(){
        try{
        await delay(seconds);
        setRequestStatus(REQUEST_STATUS.SUCCESS)
        setData(initialdata)
        }
        catch(e){
          setRequestStatus(REQUEST_STATUS.FAILURE)
          setErrorMessage(e.errorMessage);
        }
      }
      getDelay();
    }, [])

   
    function updateRecord(recordToUpdate, doneCallBack){
      const originalRecord = [...data];

    const speakersNewRec = data.map(rec=>
          rec.id === recordToUpdate.id? recordToUpdate : rec);

    delayFunc(speakersNewRec, seconds, doneCallBack, originalRecord);

    };

  const insertRecord = (recordToInsert, doneCallBack)=>{
      const originalRecord = [...data];

    const recordExist = originalRecord.find(record => record.id === recordToInsert.id);
    const speakersNewRec = recordExist !== true ? [recordToInsert, ...data] : originalRecord;

    delayFunc(speakersNewRec, seconds, doneCallBack, originalRecord);

    };


  const deleteRecord = (recordToDelete, doneCallBack) => {
      const originalRecord = [...data];

    const speakersNewRec = data.filter(record => record.id != recordToDelete.id)

    delayFunc(speakersNewRec, seconds, doneCallBack, originalRecord);

    };



    async function  delayFunc(speakersNewRec, seconds, doneCallBack, originalRecord){ 
      try{
        setData(speakersNewRec);
       await delay(seconds) 
        if(doneCallBack){
                doneCallBack();
        }
      }catch(error){
        await delay(seconds)
        if(doneCallBack){
          doneCallBack();
        };
        setData(originalRecord);
          
        
      };
      }

    

    return {data, requestStatus, errorMessage, updateRecord, insertRecord, deleteRecord};

}
export {REQUEST_STATUS, useRequestDelay};