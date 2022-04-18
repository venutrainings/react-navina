let divEle = document.createElement("div")
document.body.appendChild(divEle)


let getBtn = document.createElement("button");
getBtn.textContent="GETDATA"
getBtn.classList.add("btn")
divEle.appendChild(getBtn);


let postBtn = document.createElement("button");
postBtn.textContent="POSTDATA"
divEle.appendChild(postBtn);

let delBtn = document.createElement("button");
delBtn.textContent="DELETEDATA"
divEle.appendChild(delBtnBtn);

let updateBtn = document.createElement("button");
updateBtn.textContent="POSTDATA"
divEle.appendChild(updateBtn);


const xhr=new XMLHttpRequest();
const sendHttpRequest = (method,url,data) => {

    const promise=new Promise((resolve,reject) => {


        
        xhr.open(method,url);
        xhr.responseType='json';

        if(data){
            xhr.setRequestHeader('Content-Type','application/json');

        }
        
        xhr.onload = () =>{
           if(xhr.status >=400){
               reject(xhr.response);
           }

        xhr.onerror = () => {
            reject("Something went wrong")
        };

    }
    xhr.send(JSON.stringify(data));

    });
   return promise; 
}



const getData = () => {

    sendHttpRequest('GET','https://gorest.co.in/public/v2/users').then(responseData => {
        const data=xhr.response;
        console.log(data);
    })
};

const sendData = () => {

    sendHttpRequest('POST','https://gorest.co.in/public/v2/users',{
        "name":"uuuuthuu",
        "email":"uuuuthu@predovic.name",
        "gender":"female",
        "status":"active", 
    }).then(responseData => {
        console.log("data added" + responseData);
    }).catch(err => {
        console.log(err);
    })
};

function deleteData(){
  
 
    var xhr=new XMLHttpRequest();
    xhr.open('DELETE','https://gorest.co.in/public/v2/users/4716',true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.setRequestHeader('Authorization','Bearer 976f9d976a54effb7542419bf7fd698fd6e349ea8b283c7f2e19819bf87e1a36');
    xhr.onload=function(){
        if(xhr.readyState == 4 && xhr.status == '200'){
            var result=xhr.responseText;
            var results=JSON.parse(result);
            console.log(results);
        }
    }
    xhr.onerror=function(){
        console.log(error)
    }
    xhr.send( );
    //xhr.send('')
}

function updateData(){
    var data={}
    data.name="PUSAM123";
    data.gender="male";
    data.email="302@gmail.com";
    data.status="active";
     var json=JSON.stringify(data);
       
    var xhr=new XMLHttpRequest();
    xhr.open('PUT','https://gorest.co.in/public/v2/users/4716',true);
    xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
    xhr.setRequestHeader('Authorization','Bearer 976f9d976a54effb7542419bf7fd698fd6e349ea8b283c7f2e19819bf87e1a36');
    xhr.onload=function(){
        if(xhr.readyState == 4 && xhr.status == '200'){
            var result=xhr.responseText;
            var results=JSON.parse(result);
            console.log(results);
        }
    }
    xhr.onerror=function(){
        console.log(error)
    }
    xhr.send(json);
    // xhr.send("suryagrace&Female&grace302@gmail.com&active");
}


getBtn.addEventListener('click', getData);
postBtn.addEventListener('click', sendData);
delBtn.addEventListener('click', deleteData);
updateBtn.addEventListener('click', updateData);


