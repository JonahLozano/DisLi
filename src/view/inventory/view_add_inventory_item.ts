export = class create_add_inventory_item_view {
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
              title: "Programs",
              link: {
                relativePath: "../../programs",
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
          heading: "Add Inventory Item",
          headingTextAlignment: "center",
          headingLevel: 1,
        },
        {
          elementType: "form",
          id: "add_inventory_item_form",
          relativePath: "../../inventory/add",
          items: [
            {
              elementType: "formInputBarcode",
              name: "serial_number",
              label: "Serial Number",
              required: true,
              placeholder: "0000-0000-0000",
            },
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
              elementType: "formInputSegmented",
              name: "code_name",
              label: "Code Name",
              options: {
                IPad: "IPad",
                Hotspot: "Hotspot",
              },
              fullWidth: true,
              required: true,
            },
          ],
          buttons: [
            {
              elementType: "formButton",
              name: "s1_submit",
              title: "Add Item",
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
