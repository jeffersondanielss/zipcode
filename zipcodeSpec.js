describe("Zipcode", function() {
  var form
    , newForm
    , code
    , address
    , city
    , state
    , district;

  beforeEach(function() {
    form = $('<form id="yourForm"/>')
      .append('<input type="text" class="default-input" data-field="zipcode" placeholder="cep" />')
      .append('<input type="text" class="default-input" data-field="address" placeholder="endereço" />')
      .append('<input type="text" class="default-input" data-field="city" placeholder="cidade" />')
      .append('<input type="text" class="default-input" data-field="state" placeholder="estado" />')
      .append('<input type="text" class="default-input" data-field="district" placeholder="bairro" />')
      .append('<input type="submit" value"Enviar" class="send">');

    code = form.find('[data-field="zipcode"]');
    address = form.find('[data-field="address"]');
    city = form.find('[data-field="city"]');
    state = form.find('[data-field="state"]');
    district = form.find('[data-field="district"]');

  });

  it("Verificando o ID", function() {
    expect(form).toHaveId('yourForm');
  });

  it("Campos preenchidos", function() {
    code.val('03456000');
    expect(code).toHaveValue('03456000');
  });

});
