import Customer from "../models/customer";
import CustomerProfile from "../models/customerProfile";
import CustomerType from "../models/customerType";

export default async function initDB() {
    await CustomerType.bulkCreate([
        {name: "admin"},
        {name: "customer"},
    ]);
    await Customer.bulkCreate([
        {
            username: "ah",
            email: "tuncel.ahmet.berke@gmail.com",
            phone: "5530085020",
            password: "123",
            customerTypeId: 1
        }
    ]);
    await CustomerProfile.bulkCreate([
        {
            firstname: "Ahmet Berke",
            lastname: "Tuncel",
            customerId: 1        
        }
    ]);
}