const Types = require("../models/Types");

const getTypes = async (organizationId, page, limit) => {
  const options = {
    page: parseInt(page, 10),
    limit: parseInt(limit, 10),
    sort: { createdAt: -1 }
  };
  try {
    const allTypes = await Types.paginate({organizationId}, options);
    if(allTypes.length === 0) {
      return {
          status: false,
          message: "Sin tipos de servicios creados"
      }
  }
    return allTypes;
    
  } catch (error) {
    return {
      status: false,
      message: "No existen tipos de servicios asociados a la organizacion",
  }
  }
};

const createTypes = async (data, organizationId) => {
  const createdType = await Types.create({...data, organizationId: organizationId});
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
