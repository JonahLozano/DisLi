export = class create_inventory_item_view {
  data: any;
  constructor() {
    this.data = {
      metadata: {
        version: "2.0",
      },
      contentContainerWidth: "narrow",
      content: [],
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

  addItem(
    serial_number: string,
    status: string,
    brand: string,
    model: string,
    code_name: string
  ) {
    this.data.content.push(
      {
        elementType: "blockHeading",
        heading: `${brand} ${model}`,
        headingTextAlignment: "center",
        headingLevel: 1,
      },
      {
        elementType: "nameTag",
        nameTagStyle: "vertical",
        name: `${code_name}`,
        description: `${serial_number}`,
        imageHeight: "xlarge",
        imageWidth: "xlarge",
        imageBorderWidth: "2px",
        imageBorderColor: "black",
        image: {
          url: "https://i.ibb.co/G9LC6hK/devices.png",
          alt: "Device Image",
          cropStyle: "fill",
        },
      },
      {
        elementType: "html",
        html: `<p style="text-align: center;">Device Status: ${status}</p>`,
      }
    );
  }
};
