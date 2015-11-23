# Zipocde :house:
> Completar os campos de endereço após preencher o campo de cep, apenas 883 bytes.

![Alt Text](https://github.com/jeffersondanielss/zipcode/raw/gh-pages/images/zipcode.png)


### Markup básico
```sh
<form id="yourForm">
  <input type="text" data-field="zipcode" />
  <input type="text" data-field="address" />
  <input type="text" data-field="city" />
  <input type="text" data-field="state" />
  <input type="text" data-field="district" />
 </form>
```

### Inserir o plugin
```sh
<script src="src/zipcode.js"></script>
<script>
   var newForm = new Zipcode({
    form: 'yourForm'
   });
</script>
```