const CUSTOMER_SERVICE = require('./services/customer-service')

const service = new CUSTOMER_SERVICE();


async function startApp(){
    let customersV1 = service.findAllV1(()=>service.customers);
    console.log(customersV1)

    service.findAllV2().then(customers => console.log(customers));

    var customers = await service.findAllV2();
    console.log(customers)

}

startApp();