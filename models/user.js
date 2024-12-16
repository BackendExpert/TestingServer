
const Database = require('coconutdb/src/database'); 
    
class userModel {
    constructor() {
       this.collectionName = 'user';
    }
    
    async create(document) {
       return await Database.create(this.collectionName, document);
    }
    
    async findAll() {
       return await Database.findAll(this.collectionName);
    }
    
    async findById(id) {
       return await Database.findById(this.collectionName, id);
    }
    
    async updateById(id, updates) {
       return await Database.updateById(this.collectionName, id, updates);
    }
    
    async deleteById(id) {
       return await Database.deleteById(this.collectionName, id);
    }
}
    
    module.exports = new userModel();
    