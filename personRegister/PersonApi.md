# Person Api

## persons.json

``` json
[{
    "firstname":"Matt",
    "lastname":"peter",
    "age":"34",
    "tel":"0009948595"
},
{
    "firstname":"Jesse",
    "lastname":"River",
    "age":"4",
    "tel":"08408585"
},
{
    "firstname":"Tom",
    "lastname":"Merry",
    "age":"23",
    "tel":"12345677"
}]
```
## Datalayer for person

## function  ** search(key value)

function return an array of person objects. search creterion is passed to the function as a parameter. if a parameter is missing all person will be returned.

- search() returns an array of all person
- search(key,value) returns an array of all matching persons

if no match is found an empty array is returned

## Server usage

## search all person
http://localhost:3000/persons

same origin fetch /persons

## search by firstname
http://localhost:3000/persons/firstname?value=Jesse

same origin fetch /persons/firstname?value=Jesse

## search by lastname
http://localhost:3000/persons/lastname?value=Merry

same origin fetch /persons/firstname?value=Merry

## search by age
http://localhost:3000/persons/age?value=30

same origin fetch /persons/age?value=30

## SPA (single gape application)

uses fetch to get data to the browser

## Additional info
server serves also styles and javascripts