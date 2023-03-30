export = class create_program_view {
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
          heading: "Programs",
          headingLevel: 1,
          headingFontWeight: "light",
          descriptionLineHeight: "loose",
          descriptionFontStyle: "italic",
          descriptionTextColor: "#566573",
        },
        {
          elementType: "container",
          id: "custom_styling",
          content: [
            {
              elementType: "divider",
            },
          ],
        },
      ],
    };
  }

  getData() {
    return this.data;
  }

  addData(id: string, program_name: string, available_to: [string]) {
    this.data.content.push({
      id: id,
      elementType: "blockHeading",
      heading: program_name,
      headingLevel: 2,
      description: `<span style='font-size:1.0025rem'>Availiable To: ${available_to}</span>`,
      buttons: [
        {
          elementType: "formButton",
          title: "delete",
          icon: "delete",
          buttonType: "submit",
          actionStyle: "destructive",
          iconPosition: "iconOnly",
          confirmationMessage: "Are you sure you want to delete this?",
          events: [
            // {
            //   eventName: "click",
            //   action: "ajaxUpdate",
            //   useRelativePathToUpdate: true,
            //   targetId: "00002",
            //   ajaxRelativePath: "/",
            //   requestMethod: "put",
            //   postData: {
            //     serial_number: "00002",
            //     deprecated: true,
            //   },
            // },
          ],
        },
      ],
    });

    this.data.content.push({
      elementType: "divider",
    });
  }
};
