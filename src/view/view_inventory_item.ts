export = class create_inventory_item_view {
    data: any;
    constructor() {
      this.data = {
        metadata: {
          version: "2.0",
        },
        contentContainerWidth: "narrow",
        content: [

        ]
      };
    }
  
    getData() {
      return this.data;
    }
  
    addDivider() {
      this.data.content[1].content.push({
        elementType: "divider",
      });
    }
};
  