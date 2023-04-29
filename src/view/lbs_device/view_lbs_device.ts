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
          heading: "Lost / Broken / Stolen Device Form",
          elementType: "blockHeading",
          headingLevel: 1,
          headingTextAlignment: "center",
        },
        {
          elementType: "form",
          id: "lbs_form",
          relativePath: "../../lbs_device/submit",
          items: [
            {
              elementType: "formInputText",
              name: "first_name",
              label: "First name",
              required: true,
            },
            {
              elementType: "formInputText",
              name: "last_name",
              label: "Last name",
              required: true,
            },
            {
              elementType: "formInputEmail",
              name: "email",
              label: "Email",
              required: true,
            },
            {
              elementType: "formInputPhone",
              name: "phone",
              label: "Phone",
              required: true,
            },
            {
              elementType: "formInputSegmented",
              name: "code_name",
              label:
                "Choose the type of Device that was Lost, Damaged, or Stolen",
              options: {
                IPad: "IPad",
                Hotspot: "Hotspot",
              },
              fullWidth: true,
              required: true,
            },
            {
              elementType: "formInputSegmented",
              name: "device_status",
              label: "Was the Device Lost, Damaged, or Stolen?",
              options: {
                Lost: "Lost",
                Broken: "Broken",
                Stolen: "Stolen",
              },
              fullWidth: true,
              required: true,
            },
            {
              elementType: "formInputAssistedSelect",
              name: "incident_location",
              label: "Where did the incident occur?",
              options: {
                School: "School",
                Home: "Home",
                Bus: "Bus",
                Car: "Car",
                Other: "Other",
              },
              required: true,
            },
            {
              elementType: "formInputRadio",
              label: "If DAMAGED is the device usable",
              name: "is_usable",
              options: {
                Yes: "Yes",
                No: "No",
              },
              required: true,
            },
            {
              elementType: "formInputText",
              name: "damage_description",
              label: "Describe the Damage",
              required: true,
            },
            {
              elementType: "formInputDate",
              name: "incident_date",
              label: "Incident Date",
              max: "2024-12-31",
              min: "2020-01-01",
              required: true,
            },
          ],
          buttons: [
            {
              elementType: "formButton",
              name: "lbs_submit_btn",
              title: "Submit",
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
