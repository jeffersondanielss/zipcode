(function(document){

  this.Zipcode = function(options) {

    var _this = this;

    var defaults = {
      form: '#form'
    }

    // Create options by extending defaults with the passed in arugments
    if (arguments[0] && typeof arguments[0] === "object") {
      this.options = extendDefaults(defaults, arguments[0]);
    }

    var scope = document.querySelector(this.options.form),
        zipcode = scope.querySelector('[data-field="zipcode"]'),
        address = scope.querySelector('[data-field="address"]'),
        city = scope.querySelector('[data-field="city"]'),
        state = scope.querySelector('[data-field="state"]'),
        district = scope.querySelector('[data-field="district"]');

    Zipcode.prototype.outputData = function(jsonAddress) {
      address.value =  jsonAddress.logradouro;
      city.value =  jsonAddress.cidade;
      state.value =  jsonAddress.estado;
      district.value =  jsonAddress.bairro;
    }

    Zipcode.prototype.getData = function(cep) {
      var request = new XMLHttpRequest();
      request.open('GET', 'http://api.postmon.com.br/v1/cep/' + cep, true);

      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          var data = JSON.parse(request.responseText);
          _this.outputData(data);
        }
      };

      request.onerror = function() {
        throw new TypeError('Expected a valid zipcode');
      };

      request.send();
    }

    Zipcode.prototype.blurField = function() {
      zipcode.addEventListener('blur', function() {
        var value = zipcode.value;
        _this.getData(value);
      }, true);
    }

    this.blurField();

  }

  // Utility method to extend defaults with user options
  function extendDefaults(source, properties) {
    var property;
    for (property in properties) {
      if (properties.hasOwnProperty(property)) {
        source[property] = properties[property];
      }
    }
    return source;
  }

})(document);

