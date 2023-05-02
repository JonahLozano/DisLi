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
                relativePath: "../../profile",
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
          heading: "Appointments",
          headingTextAlignment: "center",
          headingLevel: 1,
        },
        {
          elementType: "container",
          id: "appointments_container",
          content: [
            {
              elementType: "divider",
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
    this.data.content[3].content.push({
      elementType: "divider",
    });
  }

  addSubheader() {
    this.data.content[3].content.push({
      elementType: "blockHeading",
      heading: "No Appointments Scheduled.",
      headingTextAlignment: "center",
      headingLevel: 2,
    });
  }

  addAppointment(
    idx: number,
    application_id: string,
    university_id: string,
    item: string,
    item_serial_number: string,
    checkout_date: Date,
    return_date: Date
  ) {
    this.data.content[3].content.push({
      id: `${idx}`,
      elementType: "blockHeading",
      heading: `Appointment #${idx}`,
      headingLevel: 2,
      description: `<span>User ID: ${university_id}</span><br><span>Item: ${item}</span><br><span>Check Out Date: ${checkout_date}</span><br>Return Date: ${return_date}`,
      buttons: [
        {
          elementType: "formButton",
          title: "Accept Appointment",
          icon: "confirm",
          buttonType: "submit",
          actionStyle: "constructive",
          iconPosition: "iconOnly",
          confirmationMessage:
            "Are you sure you want to accept this appointment?",
          events: [
            {
              eventName: "click",
              action: "ajaxUpdate",
              useRelativePathToUpdate: true,
              targetId: `${idx}`,
              ajaxRelativePath: "../../application/decision",
              requestMethod: "put",
              postData: {
                application_id: `${application_id}`,
                item_serial_number: `${item_serial_number}`,
                decision: "approve",
              },
            },
          ],
        },
        {
          elementType: "formButton",
          title: "Decline Appointment",
          icon: "deny",
          buttonType: "submit",
          actionStyle: "destructive",
          iconPosition: "iconOnly",
          confirmationMessage:
            "Are you sure you want to decline this appointment?",
          events: [
            {
              eventName: "click",
              action: "ajaxUpdate",
              useRelativePathToUpdate: true,
              targetId: `${idx}`,
              ajaxRelativePath: "../../application/decision",
              requestMethod: "put",
              postData: {
                application_id: `${application_id}`,
                item_serial_number: `${item_serial_number}`,
                decision: "deny",
              },
            },
          ],
        },
        {
          elementType: "formButton",
          title: "Delete Appointment",
          icon: "delete",
          buttonType: "submit",
          actionStyle: "destructive",
          iconPosition: "iconOnly",
          confirmationMessage:
            "Are you sure you want to delete this appointment?",
          events: [
            {
              eventName: "click",
              action: "ajaxUpdate",
              useRelativePathToUpdate: true,
              targetId: `${idx}`,
              ajaxRelativePath: "../../application/decision",
              requestMethod: "put",
              postData: {
                application_id: `${application_id}`,
                item_serial_number: `${item_serial_number}`,
                decision: "delete",
              },
            },
          ],
        },
      ],
    });
  }
};
