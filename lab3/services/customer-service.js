/*Time : 20 min
2.Create  Customer app using async callback,promise , async await, commonj
 1.create CustomerService class, having biz api
      1.1. findAllV1
               Should accept callback function , use timer to send data to caller 
    1.2. findAllV2
               Should return promise – Use constructor pattern
2.Caller Application – myapp.js
     You have to import CustomerService
   Write startApp function
  From startApp call findAllV1- pass function as parameter and get the customer result  
  From starApp, call findAllV2 – Use then ables to grab result
  From startApp, call findAllv2 – use async and wait key word , refactor previous code.
*/
const CUSTOMERS = require('../mock-data/customer')

class CustomerService{

    customers = []; 

    constructor(){
        this.customers = CUSTOMERS;
    }

    findAllV1(getCustomers){
        return getCustomers();
    }

    findAllV2(){
        return new Promise((resolve,reject)=>{
            if(this.customers.length > 0)
                setTimeout(resolve,2000,this.customers);
            else
                setTimeout(reject,2000,{"message":'Data not found...'});
        })
    }
    
}
module.exports = CustomerService;