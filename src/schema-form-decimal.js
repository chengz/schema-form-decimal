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
