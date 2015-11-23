(function(document){

  Zipcode = function(options) {

    var _this = this
      , scope = document.getElementById(options.form)
      , child = scope.children;

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
    }

    Zipcode.prototype.insertData = function(jsonAddress) {
      [].forEach.call(child, function(e){
        var curr = e.getAttribute('data-field');
        _this.filterFields( curr, e, jsonAddress );
      });
    }

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