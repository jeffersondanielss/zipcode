(function(document){
  Zipcode = function(options) {

    var _this = this
      , allForms = document.forms
      , formExist = 0
      , childs;

    Zipcode.prototype.teste = (function() {
      return true;
    }

    Zipcode.prototype.getForm = (function() {
      Array.prototype.forEach.call(allForms, function(forms){
        if(forms.id === options.form) {
          childs = forms.elements;
          formExist++;
        }
      });

      if( !formExist ) {
        console.log( '[Zipcode]: Doesn\'t exists any form with class: ' + options.form );
      }
    })();

    Zipcode.prototype.filterFields = function( field, current, jsonAddress ) {
      switch( field ) {
        case 'address':
          current.value = jsonAddress.logradouro;
          break;

        case 'city':
          current.value = jsonAddress.cidade;
          break;

        case 'state':
          current.value = jsonAddress.estado;
          break;

        case 'district':
          current.value = jsonAddress.bairro;
          break;
      }
    };

    Zipcode.prototype.insertData = function(jsonAddress) {
      Array.prototype.forEach.call(childs, function(input) {
        var currAttribute = input.getAttribute('data-field');
        _this.filterFields( currAttribute, input, jsonAddress );
      });
    };

    Zipcode.prototype.getData = function(cep) {
      var request = new XMLHttpRequest();
      request.open('GET', 'http://api.postmon.com.br/v1/cep/' + cep, true);

      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          var data = JSON.parse(request.responseText);
          _this.insertData(data);
        }
      };

      request.onerror = function() {
        throw new TypeError('Expected a valid zipcode');
      };

      request.send();
    }

    Zipcode.prototype.init = (function() {
      var zipcode = document.querySelector('[data-field="zipcode"]');

      zipcode.addEventListener('blur', function() {
        var value = zipcode.value;
        _this.getData(value);
      }, true);
    })();

  }

})(document);