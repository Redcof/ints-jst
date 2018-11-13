# ints-jst v3.0.0

The best javascript library for dynamic HTML page generation. 
Mind the use of custom element `<js-t>`.

You are requested to find more issue, and make it more complete.

### Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ints js-t Test</title>
    <script src="ints-jst.2.1.0.js"></script>
</head>
<body>
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


