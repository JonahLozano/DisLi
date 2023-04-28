export = class create_programs_view {
  data: any;
  constructor() {
    this.data = {
      metadata: {
        version: "2.0",
      },
      header: [
        {
          elementType: "hero",
          height: "fluid",
          contentContainerWidth: "wide",
          backgroundImage: {
            url: "https://i.ibb.co/qg9Fxq5/Banner-2.png",
            alt: "Image of office. Photo by https://unsplash.com/@kpzhnv",
            cropVerticalPosition: "center",
          },
          content: [
            {
              elementType: "heroImage",
              image: {
                url: "https://i.ibb.co/KW611xF/Logo.png",
                alt: "Generic logo",
              },
              imageSize: "4em",
              marginBottom: "5%",
              marginTop: "loose",
            },
          ],
        },
      ],
      contentContainerWidth: "narrow",
      content: [
        {
          elementType: "divider",
          borderColor: "transparent",
        },
        {
          elementType: "dropdown",
          id: "dropdown",
          title: "Explore",
          items: [
            {
              title: "Profile",
              link: {
                relativePath: "../../profile",
              },
            },
            {
              title: "Appointments",
              link: {
                relativePath: "../../application/appointments",
              },
            },
            {
              title: "Inventory",
              link: {
                relativePath: "../../inventory",
              },
            },
            {
              title: "Tech Support",
              link: {
                relativePath: "../../tech_support",
              },
            },
          ],
        },
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

  getData() {
    return this.data;
  }

  addDivider() {
    this.data.content[3].content.push({
      elementType: "divider",
    });
  }

  addProgram(
    idx: number,
    program_uuid: string,
    code_name: string,
    availiable_to: string
  ) {
    this.data.content[3].content.push({
      id: `${idx}`,
      elementType: "blockHeading",
      heading: `${idx}. ${code_name}`,
      headingLevel: 2,
      description: `<span>Available to: ${availiable_to}</span>`,
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
};
