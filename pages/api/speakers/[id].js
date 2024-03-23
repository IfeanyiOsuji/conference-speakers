import fs from 'fs'
import path from 'path';
import { data } from '../../../SpeakerData';

const {promisify} = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile)

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

const jsonFile = path.resolve('./', 'db.json');

export default async function handler(req, res){
   // res.status(200).send(JSON.stringify(data, null, 2));

   console.log('in handler function ');

   const method = req?.method;
   const id = parseInt(req?.query.id);
   const recordFromBody = req?.body;
    console.log('method', method);
   switch(method){
    case 'POST':
        await postMethod();
        break;
    case 'DELETE':
        await deleteMethod();
        break;
    case 'PUT':
        await updateMethod();
        break;
    default:
        res.status(501).send(`Method ${method} not implemented`);
        console.log(`Method ${method} not implemented`)
   }

   // const jsonFile = path.resolve('./', 'db.json');
    try{
        const readFileData = await readFile(jsonFile);
        await delay(1000);
        const speakers = JSON.parse(readFileData).speakers;
        if(!speakers){
            res.status(404).send('Error: Request failed with staus code 404') 
        }
        else{
            res.setHeader('content-type', 'Application/json');
            //res.setHeader('content-type', 'text/plain');
            res.status(200).send(JSON.stringify(speakers, null, 2));
            console.log('GET /api/speakers/get status:200')
        }
    }
    catch(e){
        console.log('/api/speakers/get ', e);
        res.status(404).send('File not found on server')
    }

    async function updateMethod(){
        console.log('in update methode')
        try{
            const readFileData = await readFile(jsonFile);
            await delay(1000);
            const speakers = JSON.parse(readFileData).speakers;
            if(!speakers){
                res.status(404).send('Error: Request failed with staus code 404') 
            }
            else{
                const newRecord = speakers.map(rec => rec.id == id ? recordFromBody : rec);
                writeFile(jsonFile, JSON.stringify({speakers:newRecord}, null, 2))
                res.setHeader('content-type', 'Application/json');
                //res.setHeader('content-type', 'text/plain');
                res.status(200).send(JSON.stringify(recordFromBody, null, 2));
                console.log(`PUT /api/speakers/put/${id} status:200`)
            }
        }
        catch(e){
            
            res.status(500).send(`PUT /api/speakers/put/${id} status: 500 unexpected error`)
            console.log(`PUT /api/speakers/put/${id} status: 500`, e);
        }

    }


    async function postMethod(){
        try{
            const readFileData = await readFile(jsonFile);
            await delay(1000);
            const speakers = JSON.parse(readFileData).speakers;
            console.log('speakers', speakers)
            if(!speakers){
                res.status(404).send('Error: Request failed with staus code 404') 
            }
            else{
                const idNew = speakers.reduce((accumulator, currentValue)=>{
                    const idCurrent = currentValue.id;
                    return idCurrent > accumulator ? idCurrent : accumulator;
                    
                }, 0)+1;
                const newRec = {...recordFromBody, id:idNew.toString()};
                const newSpeakersArray = [newRec, ...speakers]
                writeFile(jsonFile, JSON.stringify({speakers:newSpeakersArray}, null, 2))

                res.setHeader('content-type', 'Application/json');
                //res.setHeader('content-type', 'text/plain');
                res.status(200).send(JSON.stringify(recordFromBody, null, 2));
                console.log(`POST /api/speakers/${idNew} status:200`)
            }
        }
        catch(e){
            
            res.status(500).send(`POST /api/speakers/${id} status: 500 unexpected error`)
            console.log(`POST /api/speakers/speakers/${id} status: 500`, e);
        }

    }

    async function deleteMethod(){
        try{
            const readFileData = await readFile(jsonFile);
            await delay(1000);
            const speakers = JSON.parse(readFileData).speakers;
            if(!speakers){
                res.status(404).send('Error: Request failed with staus code 404') 
            }
            else{
                const newRecord = speakers.filter(rec => rec.id != id);
                writeFile(jsonFile, JSON.stringify({speakers:newRecord}, null, 2))
                //res.setHeader('content-type', 'Application/json');
                res.setHeader('content-type', 'text/plain');
                res.status(200).send(JSON.stringify(speakers.find(rec=> rec.id == id), null, 2));
                console.log(`DELETE /api/speakers/${id} status:200`)
            }
        }
        catch(e){
            
            res.status(500).send(`DELETE /api/speakers/${id} status: 500 unexpected error`)
            console.log(`DELETE /api/speakers/${id} status: 500`, e);
        }

    }
}



