app.factory('defaultService', function ($http, $q) {
   return {
       data: function(dataINF) {
           // the $http API is based on the deferred/promise APIs exposed by the $q service
           // so it returns a promise for us by default
           return $http({
                         
                            url: 'http://tshepomashabathakga.com/commentBackend/index.php',
                            method: "POST",
                            data: $.param(dataINF),
                            headers: {'Content-Type': 'application/x-www-form-urlencoded'}

                       })
                        .then(function(response) {
	                        console.log("====Inside default Service====");
	                        console.log(response);
                               return response;  

                   }, function(response) {
                       // something went wrong
                       return $q.reject(response);
           });
       }
   };
});
