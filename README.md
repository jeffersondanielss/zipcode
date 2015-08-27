# Zipocde :house:

### Basic markup form
```sh
<form id="#yourForm">
  <input type="text" data-field="zipcode" />
  <input type="text" data-field="address" />
  <input type="text" data-field="city" />
  <input type="text" data-field="state" />
  <input type="text" data-field="district" />
 </form>
```
### jQuery zipcode
```sh
<script src="dist/zipcode-jquery.min.js"></script>
<script>
   $('#yourForm').zipcode();
</script>
```

### Without jQuery
```sh
<script src="dist/zipcode.js"></script>
<script>
   var z = new Zipcode({
    form: '#yourForm'
   });
</script>
```