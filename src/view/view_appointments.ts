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
            headingLevel: 1,
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

    addAppointment(idx: number, university_id: string, return_date: Date, checkout_date: Date) {
        this.data.content[1].content.push({
            "id": `${idx}`,
            "elementType": "blockHeading",
            "heading": "1",
            "headingLevel": 2,
            "description": "<span style='color:red;font-size:1.0025rem'>availiable</span><span style='font-size:1.0025rem'> - Apple iPad (2021)</span><br></br>Freshman iPads",
            "buttons": [
              {
                "elementType": "linkButton",
                "title": "information",
                "accessoryIcon": "notification_information",
                "actionStyle": "normal",
                "accessoryIconPosition": "iconOnly",
                "link": {
                  "relativePath": "/1"
                }
              },
              {
                "elementType": "formButton",
                "title": "delete",
                "icon": "delete",
                "buttonType": "submit",
                "actionStyle": "destructive",
                "iconPosition": "iconOnly",
                "confirmationMessage": "Are you sure you want to delete this?",
                "events": [
                  {
                    "eventName": "click",
                    "action": "ajaxUpdate",
                    "useRelativePathToUpdate": true,
                    "targetId": "1",
                    "ajaxRelativePath": "/",
                    "requestMethod": "put",
                    "postData": {
                      "serial_number": "1",
                      "deprecated": true
                    }
                  }
                ]
              }
            ]
        });
    }
  };
  