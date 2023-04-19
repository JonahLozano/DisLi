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

  addFirst(
    available: number,
    reserved: number,
    checkedNumber: number,
    other: number
  ) {
    this.data.content.push({
      elementType: "availability",
      id: "availableDevices",
      availableNumber: available,
      availableLabel: "available",
      busyNumber: reserved,
      busyLabel: "reserved",
      checkedNumber: checkedNumber,
      checkedLabel: "checked out",
      otherNumber: other,
      otherLabel: "other",
      marginTop: "none",
      marginBottom: "medium",
    });
  }
};
