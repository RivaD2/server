'use strict';

class Mongo{
  constructor(model) {
    this.model = model;
  }

  create(object) {
    const data = new this.model(object);
    return data.save();
  }

  get(obj){
    if(obj.all === "all"){
      return this.model.find({"userID": obj.id})
    }
    else if(obj){
      return this.model.findOne(obj)
    }
    else {
      console.log('i am the else')
      return this.model.find({})
    }
  }

  update(object, id){
    return this.model.findByIdAndUpdate(id, object, {new: true})
  }

  delete(id){
    return this.model.findByIdAndDelete(id);
  }
}

module.exports = Mongo;