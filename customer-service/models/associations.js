import Customer from "./customer";
import CustomerProfile from "./customerProfile";
import CustomerType from "./customerType";

export default function createModelsAndAssocitations() {
    CustomerType.hasMany(Customer, {foreignKey: 'customerTypeId'});
    Customer.belongsTo(CustomerType, {foreignKey: 'customerTypeId'});
    CustomerProfile.hasOne(Customer, {foreignKey: 'customerId'});
    Customer.belongsTo(CustomerProfile, {foreignKey: 'customerId'});
}