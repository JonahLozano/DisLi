export = class create_stat_view {
    data: any;
    constructor() {
      this.data = {
        "metadata": {
            "version": "2.0"
        },
        "contentContainerWidth": "narrow",
        "content": [
            {
                "elementType": "divider",
                "borderColor": "transparent"
            }
        ]
        };
    }

    getData() {
        return this.data;
      }
    
    addDivider() {
        this.data.content.push({
          elementType: "divider",
        });
      }

      addItem(
        id: string,
        ingroup: number,
        inname: string,
        outgroup: number
      ){
        this.data.content.push({
            "elementType": "availability",
            "id": id,
            "availableNumber": ingroup,
            "availableLabel": inname,
            "busyNumber": outgroup,
            "busyLabel": "other",
            "marginTop": "none",
            "marginBottom": "medium"
      });
      }

      addFirst(
        available: number,
        reserved: number,
        checkedNumber: number,
        other: number
      ){
        this.data.content.push({
            "elementType": "availability",
            "id": "availableDevices",
            "availableNumber": available,
            "availableLabel": "available",
            "busyNumber": reserved,
            "busyLabel": "reserved",
            "checkedNumber": checkedNumber,
            "checkedLabel": "checked out",
            "otherNumber": other,
            "otherLabel": "other",
            "marginTop": "none",
            "marginBottom": "medium"
      });
      }


}

