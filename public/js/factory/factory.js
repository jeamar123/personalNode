app
.factory('serverUrl',[
    function factory(){
      return {
        url:  "http://localhost:8000/",
        // url:  "http://kargadoor.com/",
        header: {
          headers: {
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Credentials' : 'true',
            'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT, DELETE, PATCH',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Key, Authorization,Content-Type, X-Auth-Token'
          }
        }
      }
    }
]);