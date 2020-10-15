const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname,'/assets/info.txt');
const writeFilePath = './assets/info-copy.txt';
const writeFilePathforUserData = path.join(__dirname,'../assets/User.json');

const options = {
    encoding: 'utf-8'
};

const jsonoptions = {
    encoding: 'text/json'
}

class FileService {
    constructor() { }
    readFileV1(handler) {
        fs.readFile(filePath, options, (err, data) => {
            if (err) throw err;
            handler(data);
        });
    }
    readFileV2() {

        return new Promise((resolve, reject) => {
            fs.readFile(filePath, options, (err, data) => {
                if (err) 
                    reject(err)
                else
                    resolve(data);
            });
        })

    }
    writeFile(data) {
        return new Promise((resolve, reject) => {
            fs.writeFile(writeFilePath, data, options, err => {
                if (err) {
                    reject(err);
                }
                resolve('file has been written')
            });
        });
    }

    writeUserData(data){
        return new Promise((resolve,reject)=>{
            fs.writeFile(writeFilePathforUserData,data,err=>{
                if(err) reject(err);
                else resolve('Data written to file');
            })
        });
    }

}
module.exports = FileService;
