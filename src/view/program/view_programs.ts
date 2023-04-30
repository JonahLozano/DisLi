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
          elementType: "container",
          id: "styles",
          content: [
            {
              elementType: "linkButton",
              title: "Add Program",
              actionStyle: "constructive",
              link: {
                relativePath: "../../programs/add",
              },
              marginBottom: "xtight",
              marginTop: "loose",
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

  addDivider() {
    this.data.content[4].content.push({
      elementType: "divider",
    });
  }

  addSubheader() {
    this.data.content[4].content.push({
      elementType: "blockHeading",
      heading: "No Programs Available.",
      headingTextAlignment: "center",
      headingLevel: 2,
    });
  }

  addProgram(idx: number, code_name: string, availiable_to: string) {
    this.data.content[4].content.push({
      id: `${idx}`,
      elementType: "blockHeading",
      heading: `${idx}. ${code_name}`,
      headingLevel: 2,
      description: `<span>Available to: ${availiable_to}</span>`,
      buttons: [
        {
          elementType: "formButton",
          title: `Delete ${code_name}`,
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
              ajaxRelativePath: "../../programs/delete",
              requestMethod: "put",
              postData: {
                code_name: `${code_name}`,
                availiable_to: `${availiable_to}`,
              },
            },
          ],
        },
      ],
    });
  }
};
