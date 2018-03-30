
app.directive('todoDirective', [
  "serverUrl",
  "$http",
  "$state",
  function directive( serverUrl, $http ,$state ) {
    return {
      restrict: "A",
      scope: true,
      link: function link( scope, element, attributeSet )
      {
      	console.log( "todoDirective Runinng !" );

        scope.formData = {};

        // when landing on the page, get all todos and show them
        $http.get('/api/todos')
            .success(function(data) {
                scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });

        // when submitting the add form, send the text to the node API
        scope.createTodo = function() {
          if( scope.formData.text ){
            console.log(scope.formData);
            $http.post('/api/todos', scope.formData)
                .success(function(data) {
                    scope.formData = {}; // clear the form so our user is ready to enter another
                    scope.todos = data;
                    console.log(data);
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
          }
        };

        // delete a todo after checking it
        scope.deleteTodo = function(id) {
            $http.delete('/api/todos/' + id)
                .success(function(data) {
                    scope.todos = data;
                    console.log(data);
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        };
      }
    }
  }
]);