(function($){

  "use strict";

  $.fn.zipcode = function(defaults) {

    var settings = {
      'form': $('#form'),
    };

    var options = $.extend( {}, settings, defaults );


    return this.each( function(){

      var scope = $(this);


      var zipcode = {

        field: {
          'zipcode': scope.find('[data-field="zipcode"]'),
          'address': scope.find('[data-field="address"]'),
          'city': scope.find('[data-field="city"]'),
          'state': scope.find('[data-field="state"]'),
          'district': scope.find('[data-field="district"]')
        },

        outputData: function(jsonAddress) {
          this.field.address.val(jsonAddress.logradouro);
          this.field.district.val(jsonAddress.bairro);
          this.field.state.val(jsonAddress.estado);
          this.field.city.val(jsonAddress.cidade);
        },

        blurField: function() {
          console.log(this.field.zipcode.val());
          this.field.zipcode.blur(function(){
            var cep = $(this).val();
            getData(cep);
          });
        }

      }

      function getData(cep) {
        $.ajax({
          url: "http://api.postmon.com.br/v1/cep/" + cep,
          assync: false,
          dataType: "json",

          beforeSend: function(jqXHR) {
          },

          success: function(data) {
            zipcode.outputData(data);
          },

          error: function (jqXHR, textStatus, errorThrown) {
          },

          complete: function(jqXHR){
          },
        });
      }

      zipcode.blurField();

    });

  };

})(jQuery);
