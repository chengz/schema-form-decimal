angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/number/decimal.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError(), \'has-success\': hasSuccess(), \'has-feedback\': form.feedback !== false }\">\n  <label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n  <input type=\"number\" class=\"form-control\" \n    step=\"any\"\n    sf-changed=\"form\"\n    placeholder=\"{{form.placeholder}}\"\n    ng-model-options=\"form.ngModelOptions\"\n    ng-model=\"$$value$$\"\n    schema-validate=\"form\" />\n  <span ng-if=\"form.feedback !== false\"\n    class=\"form-control-feedback\"\n    ng-class=\"evalInScope(form.feedback) || {\'glyphicon\': true, \'glyphicon-ok\': hasSuccess(), \'glyphicon-remove\': hasError() }\"></span>\n  <div class=\"help-block\"\n    ng-show=\"(hasError() && errorMessage(schemaError())) || form.description\"\n    ng-bind-html=\"(hasError() && errorMessage(schemaError())) || form.description\"></div>\n</div>\n");}]);
angular.module('schemaForm-decimal', ['schemaForm']).config(
['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
  function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

    var decimal = function(name, schema, options) {
    if ((schema.type == 'number') && schema.format == 'decimal') {
      var f = schemaFormProvider.stdFormObj(name, schema, options);
      f.key  = options.path;
      f.type = 'decimal';
      options.lookup[sfPathProvider.stringify(options.path)] = f;
      return f;
    }
  };

    schemaFormProvider.defaults.number.unshift(decimal);

  //Add to the bootstrap directive
    schemaFormDecoratorsProvider.addMapping('bootstrapDecorator', 'decimal',
    'directives/decorators/bootstrap/number/decimal.html');
    schemaFormDecoratorsProvider.createDirective('decimal',
    'directives/decorators/bootstrap/number/decimal.html');
  }]);
