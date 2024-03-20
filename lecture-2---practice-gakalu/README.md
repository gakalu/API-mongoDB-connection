# CS571-Practice-02
## Rich MongoDB Documents Exercise
The `university` collection is below.
```JavaScript
{
    "_id":1,
    "name": "MIU",
    "programs": [
        {"_id":1, "name":"Compro"},
        {"_id":2, "name":"MSD"},
        {"_id":3, "name":"MBA"}
    ],
    "departments":[
        {"_id":1, "name": "CS", "professors":[
            {"_id":1, "name":"John"},
            {"_id":2, "name":"Selin"}
        ]},
        {"_id":2, "name": "Business", "professors":[
            {"_id":1, "name":"Michael"},
            {"_id":2, "name":"Tim"}
        ]},
    ]
}
```
Your are responsible on writing code *(after line 50)* for 6 MongoDB queries within 6 pre-defined routes in `app.js` file:
1. Add a program *(level 1)*
2. Update a program by ID *(level 1)*
3. Delete a department by ID *(level 1)*
4. Add a new professor to a specific department *(level 2)*
5. Update a professor's name *(level 2)*
6. Delete a professor *(level 2)*
  
