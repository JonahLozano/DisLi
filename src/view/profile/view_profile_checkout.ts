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
          heading: "Device Checkout",
          elementType: "blockHeading",
          headingLevel: 1,
          headingTextAlignment: "center",
        },
        {
          elementType: "form",
          id: "device_checkout_form",
          relativePath: "../../profile/checkouts",
          items: [
            {
              elementType: "formInputSegmented",
              name: "brand",
              label: "Brand",
              options: {
                Apple: "Apple",
                "AT&T": "AT&T",
              },
              fullWidth: true,
              required: true,
            },
            {
              elementType: "formInputSegmented",
              name: "model",
              label: "Model",
              options: {
                "IPad Air 4": "IPad Air 4",
                "IPad Gen 5": "IPad Gen 5",
                "Nighthawk MR1100": "Nighthawk MR1100",
              },
              fullWidth: true,
              required: true,
            },
            {
              elementType: "formInputText",
              name: "code_name",
              label: "Code Name",
              required: true,
            },
            {
              elementType: "formInputDate",
              name: "checkout_date",
              label: "Checkout Date",
              max: "2024-12-31",
              min: "2020-01-01",
              required: true,
            },
            {
              elementType: "formInputTime",
              name: "checkout_time",
              label: "Checkout Time",
              required: true,
            },
          ],
          buttons: [
            {
              elementType: "formButton",
              name: "s1_submit",
              title: "Checkout Device",
              buttonType: "submit",
              actionStyle: "constructive",
              minWidth: "8rem",
            },
          ],
          buttonsHorizontalAlignment: "center",
        },
      ],
    };
  }

  getData() {
    return this.data;
  }
};
