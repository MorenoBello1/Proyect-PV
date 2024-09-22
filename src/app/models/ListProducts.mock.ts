import { Product } from "./Product.model";

//lista de productos en array, inicializada.
export const ListProducts : Product [] = [
    {id:1, name:'Camisa', description:'Color blanca -',price:20,stock:5,imageUrl:"camisaOverizeBlanca.jpg",category:{idC:1,nameC:'Oversize',createdAtC:new Date(), updatedAtC: new Date()},createdAt: new Date(),updatedAt: new Date()},
    {id:2, name:'Camisa', description:'Color roja',price:10,stock:12,imageUrl:"camisaBasicRoja.jpg",category:{idC:2,nameC:'BASIC',createdAtC:new Date(), updatedAtC: new Date()},createdAt: new Date(),updatedAt: new Date()},
    {id:3, name:'Pantalon', description:'Color negro',price:10,stock:12,imageUrl:"camisaBasicRoja.jpg",category:{idC:2,nameC:'OVERSIZE',createdAtC:new Date(), updatedAtC: new Date()},createdAt: new Date(),updatedAt: new Date()},
    {id:4, name:'Camisa', description:'Color blanca',price:20,stock:5,imageUrl:"camisaOverizeBlanca.jpg",category:{idC:1,nameC:'Oversize',createdAtC:new Date(), updatedAtC: new Date()},createdAt: new Date(),updatedAt: new Date()},
    {id:5, name:'Camisa', description:'Color blanca',price:20,stock:5,imageUrl:"camisaOverizeBlanca.jpg",category:{idC:1,nameC:'Oversize',createdAtC:new Date(), updatedAtC: new Date()},createdAt: new Date(),updatedAt: new Date()},
    {id:6, name:'Camisa', description:'Color blanca',price:20,stock:5,imageUrl:"camisaOverizeBlanca.jpg",category:{idC:1,nameC:'Oversize',createdAtC:new Date(), updatedAtC: new Date()},createdAt: new Date(),updatedAt: new Date()}

]
