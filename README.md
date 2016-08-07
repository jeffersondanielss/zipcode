# Zipocde :house:
> Completar os campos de endereço após preencher o campo de cep usando [postmon](https://github.com/PostmonAPI/postmon), apenas 1KB.

[![Code Climate](https://codeclimate.com/github/jeffersondanielss/zipcode/badges/gpa.svg)](https://codeclimate.com/github/jeffersondanielss/zipcode) [![Test Coverage](https://codeclimate.com/github/jeffersondanielss/zipcode/badges/coverage.svg)](https://codeclimate.com/github/jeffersondanielss/zipcode/coverage)

![Zipcode page ilustration](https://github.com/jeffersondanielss/zipcode/raw/gh-pages/images/zipcode.png)


### Markup básico
```html
<form id="yourForm">
  <input type="text" data-field="zipcode" />
  <input type="text" data-field="address" />
  <input type="text" data-field="city" />
  <input type="text" data-field="state" />
  <input type="text" data-field="district" />
</form>
```

### Inserir o plugin
```html
<script src="src/zipcode.js"></script>
<script>
   var newForm = new Zipcode({
    form: 'yourForm'
   });
</script>
```
