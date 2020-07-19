const userKeys = ["id", "name", "nickname", "token"];

export function getUserFromLocalStorage(){
  
  let user = null;

  userKeys.forEach(prop => {
    const value = localStorage.getItem("@uriojooj/" + prop);
    if (value){
      if (!user) user = {};
      user[prop] = value;
    }
  });

  return user;

}

export function setUserOnLocalStorage(user){
  
  if (user == null){ // Remove all locally saved user info
    localStorage.clear();
    return;
  }

  userKeys.forEach(prop => {
    localStorage.setItem("@uriojooj/" + prop, user[prop]);
  });

}