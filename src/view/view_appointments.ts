export = class create_appointments_view {
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
          elementType: "blockHeading",
          heading: "Appointments",
          headingTextAlignment: "center",
          headingLevel: 1,
        },
        {
          elementType: "container",
          id: "appointments_container",
          content: [],
        },
      ],
    };
  }

  getData() {
    return this.data;
  }

  addAppointment(
    idx: number,
    application_id: string,
    university_id: string,
    item: string,
    checkout_date: Date,
    return_date: Date
  ) {
    this.data.content[1].content.push({
      id: `${idx}`,
      elementType: "blockHeading",
      heading: `${idx}`,
      headingLevel: 2,
      description: `<span>User ID: ${university_id}</span><br><span>Item: ${item}</span><br><span>Check Out Date: ${checkout_date}</span><br>Return Date: ${return_date}`,
      buttons: [
        {
          elementType: "formButton",
          title: "Accept Application",
          icon: "confirm",
          buttonType: "submit",
          actionStyle: "constructive",
          iconPosition: "iconOnly",
          confirmationMessage:
            "Are you sure you want to accept this application?",
          events: [
            {
              eventName: "click",
              action: "ajaxUpdate",
              useRelativePathToUpdate: true,
              targetId: `${idx}`,
              ajaxRelativePath: "/",
              requestMethod: "put",
              postData: {
                application_id: `${application_id}`,
                deprecated: true,
              },
            },
          ],
        },
        {
          elementType: "formButton",
          title: "decline",
          icon: "deny",
          buttonType: "submit",
          actionStyle: "destructive",
          iconPosition: "iconOnly",
          confirmationMessage:
            "Are you sure you want to decline this application?",
          events: [
            {
              eventName: "click",
              action: "ajaxUpdate",
              useRelativePathToUpdate: true,
              targetId: `${idx}`,
              ajaxRelativePath: "/",
              requestMethod: "put",
              postData: {
                application_id: `${application_id}`,
                deprecated: true,
              },
            },
          ],
        },
        {
          elementType: "formButton",
          title: "delete",
          icon: "delete",
          buttonType: "submit",
          actionStyle: "destructive",
          iconPosition: "iconOnly",
          confirmationMessage:
            "Are you sure you want to delete this application?",
          events: [
            {
              eventName: "click",
              action: "ajaxUpdate",
              useRelativePathToUpdate: true,
              targetId: `${idx}`,
              ajaxRelativePath: "/",
              requestMethod: "put",
              postData: {
                application_id: `${application_id}`,
                deprecated: true,
              },
            },
          ],
        },
      ],
    });
  }
};
