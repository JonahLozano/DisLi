export = class create_profile_checkout_view {
    data: any;
    constructor() {
        this.data = {
            "metadata": {
                "version": "2.0"
            },
            "contentContainerWidth": "narrow",
            "content": [
                {
                    "heading": "Please Select a Device for Checkout",
                    "elementType": "blockHeading",
                    "headingLevel": 1,
                    "headingTextAlignment": "center"
                },
                {
                    "elementType": "form",
                    "id": "segmented",
                    "items": [
                        {
                            "elementType": "formInputSegmented",
                            "name": "segmented3",
                            "options": {
                                "Apple IPad Air 4": "Apple IPad Air 4",
                                "Apple IPad Gen 5": "Apple IPad Gen 5",
                                "AT&T Nighthawk MR1100": "AT&T Nighthawk MR1100"
                            },
                            "fullWidth": true
                        },
                        {
                            "elementType": "formInputDate",
                            "name": "date",
                            "label": "Date",
                            "max": "2024-12-31",
                            "min": "2020-01-01"
                        },
                        {
                            "elementType": "formInputTime",
                            "name": "time",
                            "label": "Time"
                        }
                    ],
                    "buttons": [
                        {
                            "elementType": "formButton",
                            "name": "s1_submit",
                            "title": "Submit",
                            "buttonType": "submit",
                            "actionStyle": "constructive",
                            "minWidth": "8rem"
                        }
                    ],
                    "trackDirtyStateButtonNames": [
                        "s1_submit"
                    ],
                    "buttonsHorizontalAlignment": "center"
                }
            ]
        }
    }
  
    getData() {
      return this.data;
    }


};
  