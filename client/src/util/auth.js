export function defineAuthType(type){
  const params = new URLSearchParams(window.location.search);

  if (params.has("type"))
    params.delete("type");
  params.append("type", type);
  
  window.location.search = params.toString();
}