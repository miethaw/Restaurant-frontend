import * as API from "./url";
export const InsertDesignationFetcher = ({ DesignationId,Designation,Remark,Active,CreatedDate }, callback) => {
    console.log("DATA is ===>",Remark,Active,Designation,CreatedDate);
    
    fetch(API.InsertDesignation, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ designationId:DesignationId,designation:Designation,remark:Remark,active:Active,createdDate:CreatedDate }),
      cache: "no-cache"
    })
      .then(response => {
        if (response.status === 200) {
          console.log(response);
          return response.json();
        }
          else{alert("Designation Name already Exist")}
        
      })
      .then(data => {
        console.log(data);
        callback(null, data);
      })
      .catch(err => console.log(err));
      
  };