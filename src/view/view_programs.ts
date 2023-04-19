export = class create_programs_view {
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
          headingTextAlignment: "center",
          headingLevel: 1,
        },
        {
          id: "programs_container",
          elementType: "container",
          content: [],
        },
      ],
    };
  }

  addProgram(
    idx: number,
    program_uuid: string,
    code_name: string,
    availiable_to: string,
    created_at: Date,
    last_updated: Date
  ) {
    this.data.content[1].content.push({
      id: `${idx}`,
      elementType: "blockHeading",
      heading: `${idx}. ${code_name}`,
      headingLevel: 2,
      description: `<span>Available to: ${availiable_to}</span><br><span>Created On: ${created_at}</span><br><span>Last Updated: ${last_updated}</span>`,
      buttons: [
        {
          elementType: "formButton",
          title: "delete",
          icon: "delete",
          buttonType: "submit",
          actionStyle: "destructive",
          iconPosition: "iconOnly",
          confirmationMessage: `Are you sure you want to delete ${code_name}?`,
          events: [
            {
              eventName: "click",
              action: "ajaxUpdate",
              useRelativePathToUpdate: true,
              targetId: `${idx}`,
              ajaxRelativePath: "/",
              requestMethod: "put",
              postData: {
                program_uuid: `${program_uuid}`,
                deprecated: true,
              },
            },
          ],
        },
      ],
    });
  }

  getData() {
    return this.data;
  }
};
