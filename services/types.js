const Types = require("../models/Types");

const getTypes = async () => {
  const allTypes = await Types.find();
  return allTypes;
};

const createTypes = async (data) => {
  const createdType = await Types.create(data);
  return createdType;
};

const modifyTypes = async (id, data) => {
    const type = await Types.findOne({_id: id});
    if(!type || !data) {
         return {
            msg : "el id o el nuevo valor no han sido enviados", 
            path: 'service'
        }
    }
    return await Types.findByIdAndUpdate(id, data);
};

const deleteTypes = async (id) => {
    const data = await Types.deleteOne({_id: id})
    return data
  
};

module.exports = { getTypes, createTypes, modifyTypes, deleteTypes };
