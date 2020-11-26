writeCode

Write code to:-

- create a database named `mountains`
`use mountains`
- a collection inside that database named `himalayas`
`db.createCollection('himalayas')`
- insert 1 document into that collection `{name: 'Dhauldhar range', height: '4000 mtrs'}`
`db.himalayas.insert({name: 'Dhauldhar range', height: '4000 mtrs'})`
- insert multiple document using insertMany command
```js
db.himalayas.insertMany([{         name:"sonu",     
    age: 19,         batch: 17     },     {         name: "kushal",         age: 25,         batch: 17     },     {         name: "elton",         age: 26,       
  batch: 17     }])
```
- find all documents from mountains
`db.himalayas.find`
- find a single document using name
`db.himalayas.find({name:"sonu"})`
    {
        name:"sonu",
        age: 19,
        batch: 17
    },
    {
        name: "kushal",
        age: 25,
        batch: 17
    },
    {
        name: "elton",
        age: 26,
        batch: 17
    }
