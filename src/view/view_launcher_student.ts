export = class create_launcher_student_view {
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
          elementType: "nameTag",
          nameTagStyle: "vertical",
          marginBottom: "none",
          imageHeight: "xlarge",
          imageWidth: "xlarge",
          imageBorderColor: "black",
          imageBorderWidth: "3px",
          image: {
            url: "https://cdn-icons-png.flaticon.com/512/1946/1946628.png",
            alt: "User Image",
          },
        },
        {
          elementType: "blockHeading",
          heading: "Welcome Student!",
          headingLevel: 1,
          headingTextColor: "black",
          headingTextAlignment: "center",
          marginTop: "none",
          marginBottom: "none",
        },
        {
          elementType: "blockHeading",
          heading: "Explore the DiscoverE App!",
          headingLevel: 2,
          headingTextColor: "black",
          headingTextAlignment: "center",
          marginTop: "none",
        },
        {
          elementType: "list",
          id: "studentList",
          itemSize: "medium",
          listStyle: "separated",
          titleFontSize: "large",
          titleTextColor: "white",
          accessoryColor: "white",
          backgroundColor: "navy",
          borderColor: "black",
          borderRadius: "loose",
          items: [
            {
              title: "My Profile",
              link: {
                relativePath: "../../profile",
              },
            },
            {
              title: "Technology Support",
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
};
