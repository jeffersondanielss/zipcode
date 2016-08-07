jasmine.getFixtures().fixturesPath = './';

describe("Zipcode", function() {
  var form
    , newForm
    , code
    , address
    , city
    , state
    , district;

  beforeEach(function() {
    expect(readFixtures).toBeDefined();
    expect(setFixtures).toBeDefined();
    expect(loadFixtures).toBeDefined();
  });

  it("Campos preenchidos", function() {

    appendLoadFixtures('form.html');
    var zp = readFixtures('form.html')
      , form = $(zp)
      , code = document.getElementById('zipcode')
      , address = document.getElementById('address');

    newForm = new Zipcode({ form: 'yourForm' });

    form.find('#zipcode').focus();
    code.value = '03456000'
    form.find('#zipcode').blur();

    setTimeout(function(){
      console.log(code.value);
      console.log(address.value);
    }, 1000);

    // address = form.find('[data-field="address"]');
    // city = form.find('[data-field="city"]');
    // state = form.find('[data-field="state"]');
    // district = form.find('[data-field="district"]');


    expect( address.value ).toBe('Avenida Francisco José Resende');
  });

});
