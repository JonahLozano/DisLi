export = class create_lbs_device_view {
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
          elementType: "form",
          id: "lbs_form",
          heading: {
            heading: "Lost/Broken/Stolen Form",
            headingLevel: 2,
            description: "Items marked with an asterisk (*) are required.",
          },
          items: [
            {
              elementType: "formInputText",
              name: "s1_first",
              label: "First name",
              required: true,
            },
            {
              elementType: "formInputText",
              name: "s1_last",
              label: "Last name",
              required: true,
            },
            {
              elementType: "formInputEmail",
              name: "s1_email",
              label: "Email",
              required: true,
            },
            {
              elementType: "formInputPhone",
              name: "s1_phone",
              label: "Phone",
              required: true,
            },
            {
              elementType: "formInputSegmented",
              name: "s1_device",
              label:
                "Choose the type of Device that was Lost, Damaged, or Stolen",
              options: {
                freshman: "CSUCCESS iPad",
                discovere: "DISCOVERe iPad",
                hotspot: "Hotspot",
              },
              fullWidth: true,
              required: true,
            },
            {
              elementType: "formInputSegmented",
              name: "s1_lbs",
              label: "Was the Device Lost, Damaged, or Stolen",
              options: {
                lost: "Lost",
                broken: "Broken",
                stolen: "Stolen",
              },
              fullWidth: true,
              required: true,
            },
            {
              elementType: "formInputAssistedSelect",
              name: "s1_where",
              label: "Where did the incident occur",
              options: {
                "": "",
                home: "Home",
                school: "School",
                bus: "Bus",
                car: "Car",
                unsure: "Unsure",
                other: "Other",
              },
            },
            {
              elementType: "formInputRadio",
              label: "If DAMAGED is the device usable",
              name: "s1_usable",
              options: {
                yes: "Yes",
                no: "No",
              },
            },
            {
              elementType: "formInputText",
              name: "s1_damage_desc",
              label: "Describe the Damage",
            },
            {
              elementType: "formInputDate",
              name: "date",
              label: "Date",
              max: "2024-12-31",
              min: "2020-01-01",
              required: true,
            },
            {
              elementType: "formInputPhotoUpload",
              name: "photo",
              label: "Please upload a photo of the DAMAGED device",
              description: "JPG, PNG, GIF, or SVG. Max file size: 5MB",
              maxFileSize: "5MB",
              notValidMessage: "This is not a supported image type",
              capture: "anyCamera",
            },
          ],
          buttons: [
            {
              elementType: "formButton",
              name: "s1_reset",
              title: "Reset",
              buttonType: "reset",
              actionStyle: "destructiveQuiet",
              minWidth: "8rem",
            },
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