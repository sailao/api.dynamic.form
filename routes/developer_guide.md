# Dynamic Form

## Create Page
``` 
    End Point   :  /form
    Method      :  POST

    Request Body :
        {
            "title": "Student Registration Form", 
            "action": "localhost:9000/form",
            "formComponent": [
                {"name": "Student Name", "type":"text"},
                {"name": "Student Age", "type":"number"}
            ]
        }

    Respond Data:
        {
            "code": "201",
            "message: "success!! form is created",
            "data": []
        }
```

## All Page
``` 
    End Point   :  /form
    Method      :  GET

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