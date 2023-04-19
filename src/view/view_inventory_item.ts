export = class create_inventory_item_view {
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

  // TODO: Add a modify item function

  // TODO: Add user info if item belongs to user

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
