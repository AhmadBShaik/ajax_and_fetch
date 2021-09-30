class easyHTTP{

    // HTTP GET request
    async get(url){
        const response = await fetch(url);
        const responseData = await response.json();
        return responseData;
    }

    // HTTP GET request
    async post(url,data){
          
        const response = await fetch(url,{
                method:"POST",
                headers:{
                    'Content-type':"application/json"
                },
                body:JSON.stringify(data)
            })
        
        const responseData = await response.json();
        return responseData;
        
    }

    // HTTP PUT request
    async put(url,data){
        const response = await fetch(url,{
                method:"PUT",
                headers:{
                    'Content-type':"application/json"
                },
                body:JSON.stringify(data)
            })
        const responseData = await response.json();
        return responseData
    }


     // HTTP DELETE request

     async delete(url){
        const response = await fetch(url,{
                method:"DELETE",
                headers:{
                    'Content-type':"application/json"
                },
            })
        const responseData = await "User Deleted";
        return responseData;
    }

}