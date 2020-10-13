/****Time : 15 mins
Functions:
Function as parameter 
1.Create Login api
 Rules:
1.	login method must take two  two args
2.	The first arg is one function  and its variable name is “resolve”
3.	The Second args is another function “reject
4.	Write a biz logic to validate  username and password; you can hardcode username and password values. 
5.	If validation is success, send “Login success” else “Login failed”.
6.	Use arrow functions 
***/

let username = "admin";
let password = "admin1";

const login = (resolve,reject)=>{
    if(username===password)       
        resolve();
    else
        reject();
};

login(()=>console.log('Login success'),()=>console.log('Login failed..'));





