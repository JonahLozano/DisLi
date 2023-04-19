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
                external:
                  "https://fsm4sbx-test.modolabs.net/fresno_state_default_persona/profile_page/index",
              },
            },
            {
              title: "Appointments",
              link: {
                external:
                  "https://fsm4sbx-test.modolabs.net/fresno_state_default_persona/appointments_page/index",
              },
            },
            {
              title: "Inventory",
              link: {
                external:
                  "https://fsm4sbx-test.modolabs.net/fresno_state_default_persona/inventory_page/index",
              },
            },
            {
              title: "Tech Support",
              link: {
                external:
                  "https://fsm4sbx-test.modolabs.net/fresno_state_default_persona/tech_support_page/index",
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
