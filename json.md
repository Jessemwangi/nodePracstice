# JSON (JavaScript Object Notation)

## Documentation

https://www.json.org
## File Expension
.json
## values
- string
- number
- array
- object
- true
- false
- null

### examples

### string
must be doublequoted
empty string :
""
```json
"this is a string"
"here is a \"quote\" in the 'middle'"
"hearts sysmbol is \u2665"
```
### Number
- no leading +
- only one leading 0
- decimal delimiter is .

there are allowed
```json
0, 0.5,345.567,1200,1.5E10,2e-2,2E+2,-1,-11.5,-0.567
```
there are not allowed
```json
000.34,+20,00030
```

### Array
array begins[ends with]