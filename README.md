# ints-jst v3.1.0

#### Add the power of programming to HTML.

The best javascript framework and templeting engine for dynamic HTML page generation. 

Mind the use of custom element `<js-t>` and `{{expression}}`inside element attribute.
You are requested to find more issue, and make it more complete. Suggest improvements and ideas!
# Why this library?
Check this link and decide why 
https://codecondo.com/15-javascript-template-engines/

### Use
`compile()` the whole body at once or `compile()` a specific part of the page by specifing the `DOMElement` referance as `argument` and then call `run()`. This a one time operation.

```javascript
<script>
   compile();
   run();
</script>
```
```javascript
<script>
   var element = document.getElementById('my-div');
   compile(element);
   run();
   
   var element2 = document.getElementById('article-2');
   compile(element2);
   run();
</script>
```
 


### Example
A complete example with API usages.
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Ints js-t Test</title>
    <script src="ints-jst.js"></script>
    <style>
        /** <js-t> table CSS support  */
        .table {
            display: table;
            width: 100%;
        }

        .thead {
            display: table-row-group;
        }

        .th {
            display: table-cell;
            font-weight: bold;
        }

        .tbody {
            display: table-row-group;
        }

        .tr {
            display: table-row;
        }

        .td {
            display: table-cell;
        }
    </style>
    <style>
        * {
            font-family: sans-serif;
        }
        code{
            font-family: monospace;
        }
        h2{
            padding: 15px 0 20px 0;
            display: block;
        }
    </style>
    <script>
        var column = ["ID", "First Name", "Last Name", "Address", "Phone"];
        var rows = [
            ["Soumen", "Sardar", "South 24 Pgs., WB", "234456"],
            ["Taniya", "Paul", "Howrah., WB", "9889"],
            ["Mac", "Bee", "Hopler, UK", "34223"],
            ["Lorem", "Ipsum", "Autiop, USA", "234456"],
        ];

    </script>
</head>
<body>
<h2>Table Example with <code>for()</code>loop:</h2>
<div class="table" id="table-1">
    <div class="tr">
        <js-t> for(var ctr = 0; ctr < column.length; ctr++){</js-t>
        <div class="th">
            <js-t> print(column[ctr]);</js-t>
        </div>
        <js-t> }</js-t>
    </div>

    <js-t> for(var ktr = 0; ktr < rows.length;ktr++) {</js-t>
    <div class="tr">
        <div class="td" data-id="{{(ktr + 1)}}" data-ctr="{{(ktr)}}" style="font-size: 30px; color: blueviolet">
            <js-t>print(ktr + 1);</js-t>
            .
        </div>
        <js-t> for(var jtr = 0; jtr < rows[ktr].length; jtr++){</js-t>
        <div class="td">
            <js-t> print(rows[ktr][jtr]);</js-t>
        </div>
        <js-t> }</js-t>
    </div>
    <js-t>}</js-t>
</div>
<h2>List Example with <code>for()</code>loop:</h2>
<div class="test-1">
    <ul>
        <js-t>
            for(var x = 0; x < 5; x++) {
        </js-t>
        <li>
            <js-t>
                print(x);
            </js-t>
        </li>
        <js-t>
            }
        </js-t>
    </ul>
</div>
<h2><code>if()</code> Statement: </h2>
<div class="test-2">
    <js-t>
        var a = 9;
    </js-t>

    <js-t>
        if(a === 3) {
    </js-t>
    hello
    <js-t>
        } else {
    </js-t>
    world
    <js-t>
        }
    </js-t>
</div>

</body>
<script>
    window.onload = function () {
        compile(document.querySelectorAll('.test-1')[0]);
        run();
        compile(document.querySelectorAll('#table-1')[0]);
        run();
        compile(document.querySelectorAll('.test-2')[0]);
        run();
    }
</script>
</html>
```

### Source Output
```html
<html lang="en" class="gr__localhost"><head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Ints js-t Test</title>
    <script src="ints-jst.js"></script>
    <style>
        /** <js-t> table CSS support  */
        .table {
            display: table;
            width: 100%;
        }

        .thead {
            display: table-row-group;
        }

        .th {
            display: table-cell;
            font-weight: bold;
        }

        .tbody {
            display: table-row-group;
        }

        .tr {
            display: table-row;
        }

        .td {
            display: table-cell;
        }
    </style>
    <style>
        * {
            font-family: sans-serif;
        }
        code{
            font-family: monospace;
        }
        h2{
            padding: 15px 0 20px 0;
            display: block;
        }
    </style>
    <script>
        var column = ["ID", "First Name", "Last Name", "Address", "Phone"];
        var rows = [
            ["Soumen", "Sardar", "South 24 Pgs., WB", "234456"],
            ["Taniya", "Paul", "Howrah., WB", "9889"],
            ["Mac", "Bee", "Hopler, UK", "34223"],
            ["Lorem", "Ipsum", "Autiop, USA", "234456"],
        ];

    </script>
</head>
<body>
<h2>Table Example with <code>for()</code>loop:</h2>
<div class="table" id="table-1">
    <div class="table" id="table-1"> 
        <div class="tr">
            <div class="th">ID</div>
            <div class="th">First Name</div>
            <div class="th">Last Name</div>
            <div class="th">Address</div>
            <div class="th">Phone</div>
        </div>
        <div class="tr"> 
            <div class="td" data-id="1" data-ctr="0" style="font-size: 30px; color: blueviolet">1. </div>
            <div class="td">Soumen</div>
            <div class="td">Sardar</div>
            <div class="td">South 24 Pgs., WB</div>
            <div class="td">234456</div>
        </div>
        <div class="tr"> 
            <div class="td" data-id="2" data-ctr="1" style="font-size: 30px; color: blueviolet">2. </div>
            <div class="td">Taniya</div>
            <div class="td">Paul</div>
            <div class="td">Howrah., WB</div>
            <div class="td">9889</div>
        </div>
        <div class="tr"> 
            <div class="td" data-id="3" data-ctr="2" style="font-size: 30px; color: blueviolet">3. </div>
            <div class="td">Mac</div>
            <div class="td">Bee</div>
            <div class="td">Hopler, UK</div>
            <div class="td">34223</div>
        </div>
        <div class="tr"> 
            <div class="td" data-id="4" data-ctr="3" style="font-size: 30px; color: blueviolet">4. </div>
            <div class="td">Lorem</div>
            <div class="td">Ipsum</div>
            <div class="td">Autiop, USA</div>
            <div class="td">234456</div>
        </div>
    </div>
</div>
<h2>List Example with <code>for()</code>loop:</h2>
<div class="test-1">
    <ul>
        <li>0</li>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
</div>
    </div>
<h2><code>if()</code> Statement: </h2>
<div class="test-2">
    <div class="test-2">world</div>
</div>
<script>
    window.onload = function () {
        compile(document.querySelectorAll('.test-1')[0]);
        run();
        compile(document.querySelectorAll('#table-1')[0]);
        run();
        compile(document.querySelectorAll('.test-2')[0]);
        run();
    }
</script>
</body></html>
```

### Browser Output
![Image of output](https://github.com/Redcof/ints-jst/blob/master/o310.png)

### Syntax
`Javascript` Symbols & API

### GLOBALS
- `___jst_element___`
- `___NAME___`
- `__VERSION___`
- `___STG___`
- `___CTG___`
- `___TGT___`
- `___EXE___`

### API
- `run()`
- `print(...String)`
- `jst_log(...Any)`
- `compile([DOMElement])` default is `body`


