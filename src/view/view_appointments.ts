export = class create_appointments_view {
    data: any;
    constructor() {
      this.data = {
        metadata: {
          version: "2.0",
        },
        contentContainerWidth: "narrow",
        content: [
          {
            elementType: "blockHeading",
            heading: "Appointments",
            headingTextAlignment: "center",
            headingLevel: 1
          },
          {
            "elementType": "container",
            "id": "appointments_container",
            "content": [

            ]
          }
        ]
      };
    }
  
    getData() {
      return this.data;
    }

    addAppointment(idx: number, application_id: string, university_id: string, item: string, checkout_date: Date, return_date: Date) {
        this.data.content[1].content.push({
            "id": `${idx}`,
            "elementType": "blockHeading",
            "heading": `${idx}`,
            "headingLevel": 2,
            "description": `<span>User ID: ${university_id}</span><br><span>Item: ${item}</span><br><span>Check Out Date: ${checkout_date}</span><br>Return Date: ${return_date}`,
            "buttons": [
              {
                "elementType": "formButton",
                "title": "Accept Application",
                "icon": "confirm",
                "buttonType": "submit",
                "actionStyle": "constructive",
                "iconPosition": "iconOnly",
                "confirmationMessage": "Are you sure you want to accept this application?",
                "events": [
                  {
                    "eventName": "click",
                    "action": "ajaxUpdate",
                    "useRelativePathToUpdate": true,
                    "targetId": `${idx}`,
                    "ajaxRelativePath": "/",
                    "requestMethod": "put",
                    "postData": {
                      "application_id": `${application_id}`,
                      "deprecated": true
                    }
                  }
                ]
              },
              {
                "elementType": "formButton",
                "title": "decline",
                "icon": "deny",
                "buttonType": "submit",
                "actionStyle": "destructive",
                "iconPosition": "iconOnly",
                "confirmationMessage": "Are you sure you want to decline this application?",
                "events": [
                  {
                    "eventName": "click",
                    "action": "ajaxUpdate",
                    "useRelativePathToUpdate": true,
                    "targetId": `${idx}`,
                    "ajaxRelativePath": "/",
                    "requestMethod": "put",
                    "postData": {
                      "application_id": `${application_id}`,
                      "deprecated": true
                    }
                  }
                ]
              },
              {
                "elementType": "formButton",
                "title": "delete",
                "icon": "delete",
                "buttonType": "submit",
                "actionStyle": "destructive",
                "iconPosition": "iconOnly",
                "confirmationMessage": "Are you sure you want to delete this application?",
                "events": [
                  {
                    "eventName": "click",
                    "action": "ajaxUpdate",
                    "useRelativePathToUpdate": true,
                    "targetId": `${idx}`,
                    "ajaxRelativePath": "/",
                    "requestMethod": "put",
                    "postData": {
                      "application_id": `${application_id}`,
                      "deprecated": true
                    }
                  }
                ]
              }
            ]
        });
    }
  };
  