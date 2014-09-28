/*global angular */
'use strict';

/**
 * The main app module
 * @name app
 * @type {angular.Module}
 */
var app = angular.module('app', ['schemaForm-decimal'])
.controller('DecimalController', function($scope){
  $scope.schema = {
    "type": "object",
    "title": "Story",
    "properties": {
      "title": {
        "title": "Title",
        "type": "string",
        "minLength": 10
      },
      "age": {
        "title": "Age",
        "type": "number"
      },
      "float": {
        "title": "Float",
        "type": "number",
        "format": 'decimal',
        "multipleOf": 0.5
      }
    },
    "required": [
      "title",
      "float"
    ]
  }
  $scope.onSubmit = function(form) {
    $scope.$broadcast('schemaFormValidate')
    console.log(form.$valid);
    console.log($scope.model);
  }
  $scope.form = [
    {
      'key': 'title',
      'placeholder': 'Title'
    },
    {
      'key': 'age',
      'placeholder': 'Age'
    },
    {
      key: 'float'
    },
     {
        type: "submit",
        style: "btn-info",
        title: "OK"
      }
  ]
});
