import { useEffect, useState } from "react";
import axios from 'axios';



const REQUEST_STATUS = {
    LOADING : 'loading',
    SUCCESS : 'success',
    FAILURE : 'failure'
}

const resturl = "api/speakers";


const useRequestRest = () =>{

    const [data, setData] = useState([]);
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [errorMessage, setErrorMessage] = useState('');
  
  
    const delay = (ms) => new Promise(resolve => setInterval(resolve,ms));
  
  
    useEffect(()=>{
      async function getDelay(){
        try{
        const result = await axios.get(resturl);
        setRequestStatus(REQUEST_STATUS.SUCCESS);
        console.log(result.data)
        setData(result.data);
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

    delayFunc(speakersNewRec, recordToUpdate, doneCallBack, originalRecord, 'PUT');

    };

  const insertRecord = (recordToInsert, doneCallBack)=>{
      const originalRecord = [...data];

    const recordExist = originalRecord.find(record => record.id === recordToInsert.id);
    const speakersNewRec = recordExist !== true ? [recordToInsert, ...data] : originalRecord;

    delayFunc(speakersNewRec, recordToInsert, doneCallBack, originalRecord, 'POST');

    };


  const deleteRecord = (recordToDelete, doneCallBack) => {
      const originalRecord = [...data];

    const speakersNewRec = data.filter(record => record.id != recordToDelete.id)

    delayFunc(speakersNewRec, recordToDelete, doneCallBack, originalRecord, 'DELETE');

    };



    async function  delayFunc(speakersNewRec, record, doneCallBack, originalRecord, method){ 
      try{
        setData(speakersNewRec)
        switch(method){
            case 'PUT':
                const {id} = record;   
                await axios.put(`${resturl}/${id}`, record);
                break;
            case 'POST':
                await axios.post(`${resturl}/9999`, record);
                break;
            case 'DELETE':
                await axios.delete(`${resturl}/${id}`, record);
            default: '';       
        }
       
        if(doneCallBack){
                doneCallBack();
        }
      }catch(error){
        if(doneCallBack){
          doneCallBack();
        };
        setData(originalRecord);
          
        
      };
      }

    

    return {data, requestStatus, errorMessage, updateRecord, insertRecord, deleteRecord};

}
export {REQUEST_STATUS, useRequestRest};