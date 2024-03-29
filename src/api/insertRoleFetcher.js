import * as API from "./url";

export const InsertRoleFetcher = ({ RoleId,RoleName,Remark,Active,CreatedDate }, callback) => {
    console.log("DATA is ===>",Remark,Active,RoleName,CreatedDate);
    
    fetch(API.InsertRole, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ roleId:RoleId,roleName:RoleName,remark:Remark,active:Active,createdDate:CreatedDate }),
      cache: "no-cache"
    })
      .then(response => {
        if (response.status === 200) {
          console.log(response);
          return response.json();
        }
          else{alert("Role Name already Exist")}
        
      })
      .then(data => {
        console.log(data);
        callback(null, data);
      })
      .catch(err => console.log(err));
  };