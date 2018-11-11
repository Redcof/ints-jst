# ints-jst v2.1.0
The best. A javascript templating engine for HTML pages. A custom element has been used `<js-t>`.

### Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ints js-t Test</title>
    <!--<script src="jquery-3.3.1.min.js"></script>-->
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
        run(document.querySelectorAll('.test-1')[0]);
        run(document.querySelectorAll('.test-2')[0]);
    }
</script>
</html>
```
### Output

- 0
- 1
- 2
- 3
- 4
<br/>world


