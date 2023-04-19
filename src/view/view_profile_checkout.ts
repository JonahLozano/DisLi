export = class create_profile_checkout_view {
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
          heading: "Please Select a Device for Checkout",
          elementType: "blockHeading",
          headingLevel: 1,
          headingTextAlignment: "center",
        },
        {
          elementType: "form",
          id: "segmented",
          items: [
            {
              elementType: "formInputSegmented",
              name: "segmented3",
              options: {
                "Apple IPad Air 4": "Apple IPad Air 4",
                "Apple IPad Gen 5": "Apple IPad Gen 5",
                "AT&T Nighthawk MR1100": "AT&T Nighthawk MR1100",
              },
              fullWidth: true,
            },
            {
              elementType: "formInputDate",
              name: "date",
              label: "Date",
              max: "2024-12-31",
              min: "2020-01-01",
            },
            {
              elementType: "formInputTime",
              name: "time",
              label: "Time",
            },
          ],
          buttons: [
            {
              elementType: "formButton",
              name: "s1_submit",
              title: "Submit",
              buttonType: "submit",
              actionStyle: "constructive",
              minWidth: "8rem",
            },
          ],
          trackDirtyStateButtonNames: ["s1_submit"],
          buttonsHorizontalAlignment: "center",
        },
      ],
    };
  }

  getData() {
    return this.data;
  }
};
