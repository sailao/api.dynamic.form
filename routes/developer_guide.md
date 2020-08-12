# Dynamic Form

## Create Page

``` 
    End Point   :  /form
    Methos      :  POST

    Request Body :
        {
            "title": "Student Registration Form", 
            "action": "localhost:9000/form",
            "formComponent": [
                {"name": "Student Name", "type":"text"},
                {"name": "Student Name", "type":"text"}
            ]
        }

    Respond Data:
        {
            "title": "Student Registration Form",
            "action": "localhost:9000/form",
            "formComponent": [
                {
                    "name": "Student Name",
                    "type": "text"
                },
                {
                    "name": "Student Name",
                    "type": "text"
                }
            ]
        }
```

## Create Page

``` 
    End Point   :  /form
    Methos      :  GET

    Request Body : {}
    
    Respond Data :
        {
            "code": 200,
            "message": "success",
            "data": [
                {
                    "formComponents": [],
                    "_id": "5f3358d02294ef2f6c840a53",
                    "title": "Student Registration Form",
                    "__v": 0
                }
            ]
        }
```