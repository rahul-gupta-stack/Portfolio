// fake database
// const propertyList = [];

//Core Modules
const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathUtil.js');

const propertyDataPath = path.join(rootDir, 'data', 'property.json');

module.exports = class PropertyModel {
  constructor(pname, price, location, nearby, image) {
    this.pname = pname;
    this.price = price;
    this.location = location;
    this.nearby = nearby;
    this.image = image;
  }

  save() {
    this.id = Math.random().toString(36).substring(2, 9); // Generate a random ID

    PropertyModel.fetchAll((propertyList) => {
      propertyList.push(this);
      
      fs.writeFile(propertyDataPath, JSON.stringify(propertyList), (err) => {
        if (err) {
          console.error('Error saving property data:', err);
        }
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(propertyDataPath, (err, data) => {      
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static findById(propertyId, callback) {
    PropertyModel.fetchAll((propertyList) => {
      const foundProperty = propertyList.find(p => p.id === propertyId);
      callback(foundProperty);
    });
  }
};