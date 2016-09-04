# analysis-ui

Front-end angular app for rails JSON API [analysis-api](https://github.com/Vitaliy-Maznyi/analysis-api)

## How to run

Run `gulp serve`. App will be available on [http://localhost:9000/](http://localhost:9000/)

### If you want to run back-end server locally, you'll have to change url in controllers(make sure you've run server on port 3000):

1. app/app.js

  ```javascript
    .config(function($authProvider) {
      $authProvider.configure({
        apiUrl: 'http://localhost:3000/api'
      });
    }) 
  ```
2. app/scripts/controllers/analyze.js

  ```javascript
    $http({
            method: 'POST',
            url: 'http://localhost:3000/api/analyzes/analyze',
            data: { data: $scope.dataset }
          })
  ```
3. app/scripts/controllers/correlate.js

 ```javascript
    $http({
            method: 'POST',
            url: 'http://localhost:3000/api/analyzes/correlate',
            data: { dataset_1: $scope.dataset_1, dataset_2: $scope.dataset_2 }
          })
  ```
