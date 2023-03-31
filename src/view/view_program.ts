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

  addData(
    id: string,
    program_name: string,
    available_to: [string],
    deprecated: boolean
  ) {
    const new_id = id.replace(/-/g, "");

    this.data.content.push({
      id: new_id,
      elementType: "blockHeading",
      heading: program_name,
      headingLevel: 2,
      description: `<span style='font-size:1.0025rem'>Availiable To: ${available_to}</span><br></br><span style='font-size:1.0025rem'>Deprecated: ${deprecated}</span>`,
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
            {
              eventName: "click",
              action: "ajaxUpdate",
              useRelativePathToUpdate: true,
              targetId: new_id,
              ajaxRelativePath: "/",
              requestMethod: "put",
              postData: {
                id: id,
                code_name: program_name,
                deprecated: true,
              },
            },
          ],
        },
      ],
    });

    // TODO: Add a add program page

    this.data.content.push({
      elementType: "divider",
    });
  }
};
