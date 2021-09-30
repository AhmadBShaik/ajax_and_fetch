function easyHTTPes5() {
    this.http = new XMLHttpRequest();
}

// GET REQUEST

easyHTTPes5.prototype.get = function (url,callback) {
    this.http.open('GET',url,true);
    let self = this
    this.http.onload = function () {
        
        if(self.http.status===200){
            callback(null,self.http.responseText);
        }else{
            callback("Error : "+self.http.status);
        }
    }
    this.http.send();
}

// POST REQUEST

easyHTTPes5.prototype.post = function (url,data,callback) {
    this.http.open('POST',url,true);
    this.http.setRequestHeader('Content-type','application/json');
    let self = this

    this.http.onload = function(){
        callback(null,self.http.responseText)
    }

    this.http.send(JSON.stringify(data));
}

// PUT REQUEST

easyHTTPes5.prototype.put = function (url,data,callback) {
    this.http.open('PUT',url,true);
    this.http.setRequestHeader('Content-type','application/json');
    let self = this

    this.http.onload = function(){
        callback(null,self.http.responseText)
    }

    this.http.send(JSON.stringify(data));
}


// DELETE REQUEST
easyHTTPes5.prototype.delete = function (url,callback) {
    this.http.open('DELETE',url,true);
    let self = this
    this.http.onload = function () {
        
        if(self.http.status===200){
            callback(null,"Deleted successfully");
        }else{
            callback("Error : "+self.http.status);
        }
    }
    this.http.send();
}