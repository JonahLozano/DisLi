export = class create_profile_view {
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
                relativePath: "/checkouts",
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
                external:
                  "https://docs.google.com/forms/d/e/1FAIpQLSdFzMoX9i8MR0JEOgp5eddefcTxZQgZZC3ud1T25LkNeE1c3A/viewform?usp=sf_link",
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
          elementType: "container",
          wrapperStyle: "subfocal",
          margin: "none",
          padding: "medium",
          content: [
            {
              elementType: "blockHeading",
              heading: "My Appointments",
              headingTextAlignment: "center",
              headingLevel: 2,
            },
            {
              elementType: "table",
              id: "appointmentsTable",
              columnHeaders: true,
              outerBorderWidth: "2px",
              rowBorderWidth: "2px",
              columnBorderWidth: "2px",
              outerBorderColor: "navy",
              rowBorderColor: "navy",
              columnBorderColor: "navy",
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
                      title: "Name",
                    },
                    {
                      title: "Date / Time",
                    },
                  ],
                },
              ],
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
          padding: "medium",
          content: [
            {
              elementType: "blockHeading",
              heading: "My Devices",
              headingTextAlignment: "center",
              headingLevel: 2,
            },
            {
              elementType: "cardSet",
              id: "imageStyle_thumbnailSmall",
              marginTop: "medium",
              borderColor: "navy",
              borderWidth: "2px",
              marginBottom: "medium",
              items: [],
            },
          ],
        },
      ],
    };
  }

  getData() {
    return this.data;
  }

  addTableRow(idx: number, university_id: string, checkout_date: Date) {
    this.data.content[2].content[1].rows.push({
      cells: [
        {
          title: `${idx}`,
        },
        {
          title: `${university_id}`,
        },
        {
          title: `${checkout_date.toLocaleDateString()} ${checkout_date.toLocaleTimeString()}`,
        },
      ],
    });
  }

  addCardItem(
    brand: string,
    model: string,
    code_name: string,
    return_date: Date
  ) {
    this.data.content[4].content[1].items.push({
      elementType: "contentCard",
      size: "small",
      imageStyle: "thumbnailSmall",
      image: {
        url: "https://i.ibb.co/G9LC6hK/devices.png",
        alt: `${brand} ${model} `,
      },
      title: `${brand} ${model}`,
      description: `Return on ${return_date.toLocaleDateString()} ${return_date.toLocaleTimeString()} <br> ${code_name}`,
    });
  }
};
