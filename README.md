# ints-jst v3.1.0

The best javascript library for dynamic HTML page generation. 
Mind the use of custom element `<js-t>`.

You are requested to find more issue, and make it more complete.

### Example
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
### Output
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


