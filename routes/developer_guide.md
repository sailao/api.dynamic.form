# Dynamic Form

## Create Page
``` 
    End Point   :  /form
    Method      :  POST
    Request Body:  {
        "title": "Student Registration Form", 
        "action": "localhost:9000/form",
        "formComponent": [
            {"name": "Student Name", "type":"text"},
            {"name": "Student Age", "type":"number"}
        ]
    }
    Respond Data: {
        "code": "201",
        "message: "success!! form is created"
    }
```

## All Page
``` 
    End Point   :  /form
    Method      :  GET
    Respond Data:  {
        "code": 200,
        "message": "success",
        "data": [
            {
                "title": "Student Registration Form",
                "id": **************
            },
            {
                "title": "Country Code Form",
                "id": **************
            }
        ]
    }
```

## Retrive Page
``` 
    End Point   :  /page/:id
    Method      :  GET
    Respond Data: {
        "code": 200,
        "message": "success",
        "data": {
            "title": "My Form", 
            "action": {
                store: {
                    url: "/page/:id/submit",
                    method: "POST"
                },
                get: {
                    url: "/page/:id/submit",
                    method: "GET"
                }
            },
            "primary-color": "#000000",
            "formComponent": [
                {"name": "Student Name", "type":"text", "placeHolder": "Enter user name"},
                {"name": "Student Name", "type":"text"}
            ]
        }
    }
```

## Page Submit
``` 
    End Point   :  /page/:id/submit
    Method      :  POST
    Request Body:  { 
        "name": "Alic", 
        "email": "alic@examplemail.com",
        "phone": "09444558741"
    }
    Respond Data:  {
        "code": 201,
        "message": "success!! created",
        "data": {
            "id": **********
            "name": "Alic", 
            "email": "alic@examplemail.com",
            "phone": "09444558741"
        }
    }
```

## Retrive Page Submit
``` 
    End Point   :  /page/:id/submit
    Method      :  GET
    Respond Data:  {
        "code": 200,
        "message": "success",
        "data": [
            {
                "id": ***********,
                "name": "Alic", 
                "email": "alic@examplemail.com",
                "phone": "09444558741"
            },
            {
                "id": ***********,
                "name": "Bob", 
                "email": "bob@examplemail.com",
                "phone": "09444558741"
            }
        ]
    }
```