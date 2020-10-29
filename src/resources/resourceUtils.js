const findResourcePaginated = async (resource,query,pageNumber = null,limit = 5,sort = null) => {
  let res = {};
  res = resource.find(query);
  if(pageNumber){
    res = res
      .skip((pageNumber-1) * limit)
      .limit(limit);
  }
  if(sort) res = res.sort(sort);
  return await res.exec();
}

module.exports = {
  findResourcePaginated
}