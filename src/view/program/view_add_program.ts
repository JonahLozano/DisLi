export = class create_add_program_view {
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
          elementType: "blockHeading",
          heading: "Add Program",
          headingTextAlignment: "center",
          headingLevel: 1,
        },
        {
          elementType: "form",
          id: "add_program_form",
          relativePath: "../../programs/add",
          items: [
            {
              elementType: "formInputText",
              name: "code_name",
              label: "Code Name",
              required: true,
            },
            {
              elementType: "formInputSegmented",
              name: "availiable_to",
              options: {
                admin: "admin",
                faculty: "faculty",
                freshman: "freshman",
                sophomore: "sophomore",
                junior: "junior",
                senior: "senior",
              },
              fullWidth: true,
              required: true,
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
          trackDirtyStateButtonNames: ["code_name", "availiable_to"],
          buttonsHorizontalAlignment: "center",
        },
      ],
    };
  }

  getData() {
    return this.data;
  }
};
