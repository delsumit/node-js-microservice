/**
 * Time : 15 mins
3.You have to add new api inside fileservice, once written you have to write promise.

•	You have pass to  user information as literal object as input to an api – api name you can decide.
•	User information such as id,firstName,lastName,address: street,city,state, isActive
•	You have to write user information in the form of json inside file called “user.json”

 */

const { stat } = require('fs');
const { stringify } = require('querystring');
const FileService = require('./service/file-service');

const service = new FileService();

const userData = {
    id:1,
    firstName:"Sham",
    lastName:"Sundar",
    address: {
                street:'Jaipur Road',
                city : 'Jaipur',
                state : 'Rajasthan'
            },
    isActive: true
}

async function writeUserData(data){
    try{
        const status = await service.writeUserData(JSON.stringify(data))
        console.log(status)
    }catch(err){
        console.log(err)    
    }
    
}

writeUserData(userData)