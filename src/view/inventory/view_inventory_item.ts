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
      ],
    };
  }

  getData() {
    return this.data;
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
          url: `${
            code_name === "IPad"
              ? "https://i.ibb.co/ChrbvCZ/ipad.jpg"
              : code_name === "Hotspot"
              ? "https://i.ibb.co/SJTSgqn/att.png"
              : "https://i.ibb.co/tXbJwXL/devices.png"
          }`,
          alt: "Device Image",
          cropStyle: "fill",
        },
      },
      {
        elementType: "html",
        html: `<p style='text-align:center;'>Device Status: ${
          status === "availiable"
            ? `<span style="color:green;">${status}</span>`
            : `<span style="color:red;">${status}</span>`
        }</p>`,
      }
    );
  }
};
