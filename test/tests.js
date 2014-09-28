/* jshint expr: true */
chai.should();

describe('Schema form', function() {

  describe('directive', function() {
    beforeEach(module('templates'));
    beforeEach(module('schemaForm'));
    beforeEach(module('schemaForm-decimal'));
    beforeEach(
      //We don't need no sanitation. We don't need no though control.
      module(function($sceProvider) {
        $sceProvider.enabled(false);
      })
    );

    it('should return correct form type for format "datepicker"',function(){
      inject(function($compile,$rootScope, schemaForm){
        var string_schema = {
          type: "object",
          properties: {
            file: {
              type: "number",
            }
          }
        };

        var decimal_schema = {
          type: "object",
          properties: {
            file: {
              type: "number",
              format: "decimal"
            }
          }
        };

        schemaForm.defaults(string_schema).form[0].type.should.be.eq("number");
        schemaForm.defaults(decimal_schema).form[0].type.should.be.eq("decimal");
      });
    });
  });
});
