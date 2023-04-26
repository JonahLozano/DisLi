export = class create_stat_view {
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

  addDivider() {
    this.data.content.push({
      elementType: "divider",
    });
  }

  addItem(id: string, ingroup: number, inname: string, outgroup: number) {
    this.data.content.push({
      elementType: "availability",
      id: id,
      availableNumber: ingroup,
      availableLabel: inname,
      busyNumber: outgroup,
      busyLabel: "other",
      marginTop: "none",
      marginBottom: "medium",
    });
  }

  addFirst(available: number, reserved: number, other: number) {
    this.data.content.push({
      elementType: "availability",
      id: "availableDevices",
      availableNumber: available,
      availableLabel: "available",
      busyNumber: reserved,
      busyLabel: "reserved",
      otherNumber: other,
      otherLabel: "other",
      marginTop: "none",
      marginBottom: "medium",
    });
  }
};
