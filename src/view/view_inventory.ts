export = class create_inventory_view {
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
    // use correct color for status element
    this.data.content[1].content.push({
      id: id,
      elementType: "blockHeading",
      heading: serial_number,
      headingLevel: 2,
      description: `<span ${
        status == "available"
          ? "style='color:green;font-size:1.0025rem'"
          : "style='color:red;font-size:1.0025rem'"
      }>${status}</span><span style='font-size:1.0025rem'> - ${brand} ${model}</span><br></br>${code_name}`,
      buttons: [
        {
          elementType: "linkButton",
          title: "information",
          accessoryIcon: "notification_information",
          actionStyle: "normal",
          accessoryIconPosition: "iconOnly",
          link: {
            relativePath: `/${serial_number}`,
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
