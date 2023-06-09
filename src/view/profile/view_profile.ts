export = class create_profile_view {
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
          heading: "My Profile",
          headingTextAlignment: "center",
          headingLevel: 1,
        },
        {
          elementType: "list",
          id: "profileList",
          itemSize: "medium",
          listStyle: "separated",
          titleFontSize: "xlarge",
          titleTextColor: "white",
          accessoryColor: "white",
          backgroundColor: "navy",
          borderColor: "transparent",
          items: [
            {
              title: "Check Out Device",
              link: {
                relativePath: "../../profile/checkouts",
              },
              image: {
                url: "https://i.ibb.co/TMpxVGP/shopping.png",
                alt: "Shopping Cart Image",
              },
              imageWidth: "5rem",
              imageHeight: "5rem",
            },
            {
              title: "Lost / Broken Device Form",
              link: {
                relativePath: "../../lbs_device",
              },
              image: {
                url: "https://i.ibb.co/NrHQq0s/brokendevice.png",
                alt: "Broken Device Image",
              },
              imageWidth: "5rem",
              imageHeight: "5rem",
            },
          ],
        },
        {
          elementType: "divider",
          borderColor: "transparent",
        },
        {
          elementType: "container",
          backgroundColor: "navy",
          margin: "none",
          paddingTop: "none",
          paddingBottom: "tight",
          paddingLeft: "tight",
          paddingRight: "tight",
          content: [
            {
              elementType: "blockHeading",
              heading: "My Appointments",
              headingTextColor: "white",
              headingTextAlignment: "center",
              headingLevel: 2,
            },
          ],
        },
        {
          elementType: "divider",
          borderColor: "transparent",
        },
        {
          elementType: "container",
          backgroundColor: "navy",
          margin: "none",
          paddingTop: "none",
          paddingBottom: "tight",
          paddingLeft: "tight",
          paddingRight: "tight",
          content: [
            {
              elementType: "blockHeading",
              heading: "My Devices",
              headingTextColor: "white",
              headingTextAlignment: "center",
              headingLevel: 2,
            },
          ],
        },
      ],
    };
  }

  getData() {
    return this.data;
  }

  // Table Functions //

  addTableSubheader() {
    this.data.content[5].content.push({
      elementType: "blockHeading",
      heading: "No Appointments Scheduled.",
      headingTextColor: "white",
      headingTextAlignment: "center",
      headingLevel: 3,
    });
  }

  addTable() {
    this.data.content[5].content.push({
      elementType: "table",
      id: "appointmentsTable",
      columnHeaders: true,
      outerBorderWidth: "2px",
      rowBorderWidth: "2px",
      columnBorderWidth: "2px",
      outerBorderColor: "white",
      rowBorderColor: "white",
      columnBorderColor: "white",
      colHeaderTextColor: "white",
      rowHeaderTextColor: "white",
      titleTextColor: "white",
      paddingTop: "none",
      paddingBottom: "xtight",
      columnOptions: [
        {
          horizontalAlign: "center",
          verticalAlign: "middle",
        },
        {
          horizontalAlign: "center",
          verticalAlign: "middle",
        },
        {
          horizontalAlign: "center",
          verticalAlign: "middle",
        },
      ],
      rows: [
        {
          cells: [
            {
              title: "#",
            },
            {
              title: "Device Type",
            },
            {
              title: "Date / Time",
            },
          ],
        },
      ],
    });
  }

  addTableRow(idx: number, code_name: string, checkout_date: Date) {
    this.data.content[5].content[1].rows.push({
      cells: [
        {
          title: `${idx}`,
        },
        {
          title: `${code_name}`,
        },
        {
          title: `${checkout_date.toLocaleDateString()} ${checkout_date.toLocaleTimeString()}`,
        },
      ],
    });
  }

  // Card Functions //

  addCardSubheader() {
    this.data.content[7].content.push({
      elementType: "blockHeading",
      heading: "No Devices Registered.",
      headingTextColor: "white",
      headingTextAlignment: "center",
      headingLevel: 3,
    });
  }

  addCard() {
    this.data.content[7].content.push({
      elementType: "cardSet",
      id: "imageStyle_thumbnailSmall",
      marginTop: "medium",
      borderColor: "navy",
      borderWidth: "2px",
      marginBottom: "medium",
      items: [],
    });
  }

  addCardItem(
    brand: string,
    model: string,
    code_name: string,
    return_date: Date
  ) {
    this.data.content[7].content[1].items.push({
      elementType: "contentCard",
      size: "small",
      imageStyle: "thumbnailSmall",
      borderWidth: "3px",
      borderColor: "white",
      borderRadius: "loose",
      image: {
        url: "https://i.ibb.co/G9LC6hK/devices.png",
        alt: `${brand} ${model} `,
      },
      title: `${brand} ${model}`,
      titleTextColor: "white",
      description: `Return on ${return_date.toLocaleDateString()} ${return_date.toLocaleTimeString()} <br> ${code_name}`,
      descriptionTextColor: "white",
    });
  }
};
