export = class create_inventory_view {
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
          heading: "Inventory",
          headingLevel: 1,
          headingFontWeight: "light",
          description:
            "<strong>Filter:</strong> <br></br>code name: 'placeholder text :)'",
          descriptionLineHeight: "loose",
          descriptionFontStyle: "italic",
          descriptionTextColor: "#566573",
        },
        {
          elementType: "container",
          id: "custom_styling",
          content: [],
        },
      ],
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
    id: string,
    serial_number: string,
    status: string,
    brand: string,
    model: string,
    code_name: string
  ) {
    this.data.content[1].content.push({
      id: id,
      elementType: "blockHeading",
      heading: serial_number,
      headingLevel: 2,
      description: `<span style='color:red;font-size:1.0025rem'>${status}</span><span style='font-size:1.0025rem'> - ${brand} ${model}</span><br></br>${code_name}`,
      buttons: [
        {
          elementType: "linkButton",
          title: "information",
          icon: "notification_information",
          iconPosition: "iconOnly",
          actionStyle: "normal",
          link: {
            relativePath: " ",
          },
        },
        {
          elementType: "formButton",
          title: "delete",
          icon: "delete",
          buttonType: "submit",
          actionStyle: "destructive",
          iconPosition: "iconOnly",
          confirmationMessage: "Are you sure you want to delete this?",
          events: [
            {
              eventName: "click",
              action: "ajaxUpdate",
              useRelativePathToUpdate: true,
              targetId: id,
              ajaxRelativePath: "/",
              requestMethod: "put",
              postData: {
                serial_number: serial_number,
                deprecated: true,
              },
            },
          ],
        },
      ],
    });
  }
};
