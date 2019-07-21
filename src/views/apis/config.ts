export default {
getUrl(name:any,url:any):any{
  const target:string=`http://localhost:8001/api${url}`;
  console.log(name)
  return target
}
}