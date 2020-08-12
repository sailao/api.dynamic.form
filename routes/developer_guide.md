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
    Param       : {}
    
    Respond Data :
        {
            "code": 200,
            "message": "success",
            "data": [
                {
                    "title": "Student Registration Form",
                    "link": {
                        "url": "https://api-app-form.herokuapp.com/page/student-registration-form",
                        "method" : "GET"
                    }
                },
                {
                    "title": "Country Code Form",
                    "link": {
                        "url": "https://api-app-form.herokuapp.com/apge/country-code-form",
                        "method" : "GET"
                    }
                }
            ]
        }
```

## Retrive Page
``` 
    End Point   :  /page/****
    Method      :  GET
    Param       : {}
    
    Respond Data :
        {
            "code": 200,
            "message": "success",
            "data": {
                "title": "My Form", 
                "action": "localhost:9000/form",
                "formComponent": [
                    {"name": "Student Name", "type":"text", "placeHolder": "Enter user name"},
                    {"name": "Student Name", "type":"text"}
                ],
                "style": "left"
            }
        }
```