import { request } from "./setup";
import { clearDB } from "../utils/clearDB";

describe("Inventory tests", () => {
  test("View an empty inventory", async () => {
    await clearDB();
    const response = await request.get("/inventory");

    const data = {
      metadata: {
        version: "2.0",
      },
      contentContainerWidth: "narrow",
      content: [
        {
          elementType: "blockHeading",
          heading: "Inventory",
          headingLevel: 1,
          headingFontWeight: "light",
          description:
            "<strong>Filter:</strong> <br></br>code name: 'placeholder text :)'",
          descriptionLineHeight: "loose",
          descriptionFontStyle: "italic",
          descriptionTextColor: "#566573",
        },
        {
          elementType: "container",
          id: "custom_styling",
          content: [
            {
              elementType: "divider",
            },
          ],
        },
      ],
    };

    expect(response.body).toStrictEqual(data);
  });

  /*
  test("Add 3 items", async () => {
    const data1 = {
      serial_number: "123456789",
      brand: "Apple",
      model: "iPad (2022)",
      code_name: "Freshman iPads",
    };

    const response1 = await request
      .post("/inventory/add")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .send(data1);

    expect(response1.status).toBe(201);

    const data2 = {
      serial_number: "234567891",
      brand: "Apple",
      model: "iPad (2022)",
      code_name: "Freshman iPads",
    };

    const response2 = await request
      .post("/inventory/add")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .send(data2);

    expect(response2.status).toBe(201);

    const data3 = {
      serial_number: "345678912",
      brand: "Samsung",
      model: "Galaxy Tab S7",
      code_name: "Nerd Tablets",
    };

    const response3 = await request
      .post("/inventory/add")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .send(data3);

    expect(response3.status).toBe(201);
  });

  test("View items", async () => {
    const response = await request.get("/inventory");

    const data = {
      content: [
        {
          description:
            "<strong>Filter:</strong> <br></br>code name: 'placeholder text :)'",
          descriptionFontStyle: "italic",
          descriptionLineHeight: "loose",
          descriptionTextColor: "#566573",
          elementType: "blockHeading",
          heading: "Inventory",
          headingFontWeight: "light",
          headingLevel: 1,
        },
        {
          content: [
            { elementType: "divider" },
            {
              buttons: [
                {
                  accessoryIcon: "notification_information",
                  accessoryIconPosition: "iconOnly",
                  actionStyle: "normal",
                  elementType: "linkButton",
                  link: { relativePath: "/345678912" },
                  title: "information",
                },
                {
                  actionStyle: "destructive",
                  buttonType: "submit",
                  confirmationMessage: "Are you sure you want to delete this?",
                  elementType: "formButton",
                  events: [
                    {
                      action: "ajaxUpdate",
                      ajaxRelativePath: "/",
                      eventName: "click",
                      postData: {
                        deprecated: true,
                        serial_number: "345678912",
                      },
                      requestMethod: "put",
                      targetId: "345678912",
                      useRelativePathToUpdate: true,
                    },
                  ],
                  icon: "delete",
                  iconPosition: "iconOnly",
                  title: "delete",
                },
              ],
              description:
                "<span style='color:red;font-size:1.0025rem'>availiable</span><span style='font-size:1.0025rem'> - Samsung Galaxy Tab S7</span><br></br>Nerd Tablets",
              elementType: "blockHeading",
              heading: "345678912",
              headingLevel: 2,
              id: "345678912",
            },
            { elementType: "divider" },
            {
              buttons: [
                {
                  accessoryIcon: "notification_information",
                  accessoryIconPosition: "iconOnly",
                  actionStyle: "normal",
                  elementType: "linkButton",
                  link: { relativePath: "/234567891" },
                  title: "information",
                },
                {
                  actionStyle: "destructive",
                  buttonType: "submit",
                  confirmationMessage: "Are you sure you want to delete this?",
                  elementType: "formButton",
                  events: [
                    {
                      action: "ajaxUpdate",
                      ajaxRelativePath: "/",
                      eventName: "click",
                      postData: {
                        deprecated: true,
                        serial_number: "234567891",
                      },
                      requestMethod: "put",
                      targetId: "234567891",
                      useRelativePathToUpdate: true,
                    },
                  ],
                  icon: "delete",
                  iconPosition: "iconOnly",
                  title: "delete",
                },
              ],
              description:
                "<span style='color:red;font-size:1.0025rem'>availiable</span><span style='font-size:1.0025rem'> - Apple iPad (2022)</span><br></br>Freshman iPads",
              elementType: "blockHeading",
              heading: "234567891",
              headingLevel: 2,
              id: "234567891",
            },
            { elementType: "divider" },
            {
              buttons: [
                {
                  accessoryIcon: "notification_information",
                  accessoryIconPosition: "iconOnly",
                  actionStyle: "normal",
                  elementType: "linkButton",
                  link: { relativePath: "/123456789" },
                  title: "information",
                },
                {
                  actionStyle: "destructive",
                  buttonType: "submit",
                  confirmationMessage: "Are you sure you want to delete this?",
                  elementType: "formButton",
                  events: [
                    {
                      action: "ajaxUpdate",
                      ajaxRelativePath: "/",
                      eventName: "click",
                      postData: {
                        deprecated: true,
                        serial_number: "123456789",
                      },
                      requestMethod: "put",
                      targetId: "123456789",
                      useRelativePathToUpdate: true,
                    },
                  ],
                  icon: "delete",
                  iconPosition: "iconOnly",
                  title: "delete",
                },
              ],
              description:
                "<span style='color:red;font-size:1.0025rem'>availiable</span><span style='font-size:1.0025rem'> - Apple iPad (2022)</span><br></br>Freshman iPads",
              elementType: "blockHeading",
              heading: "123456789",
              headingLevel: 2,
              id: "123456789",
            },
            { elementType: "divider" },
          ],
          elementType: "container",
          id: "custom_styling",
        },
      ],
      contentContainerWidth: "narrow",
      metadata: { version: "2.0" },
    };

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(data);
  });

  test("Modify 1 item", async () => {
    const data = {
      serial_number: "123456789",
      brand: "Apple",
      model: "iPad (2020)",
      code_name: "Freshman iPads",
    };

    const response = await request
      .put("/inventory")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .send(data);

    const test_data = {
      brand: "Apple",
      code_name: "Freshman iPads",
      model: "iPad (2020)",
      serial_number: "123456789",
    };

    const res_data = {
      brand: response.body.brand,
      code_name: response.body.code_name,
      model: response.body.model,
      serial_number: response.body.serial_number,
    };

    expect(response.status).toBe(201);
    expect(res_data).toStrictEqual(test_data);
  });

  test("View modified item", async () => {
    const response = await request.get("/inventory");

    const data = {
      content: [
        {
          description:
            "<strong>Filter:</strong> <br></br>code name: 'placeholder text :)'",
          descriptionFontStyle: "italic",
          descriptionLineHeight: "loose",
          descriptionTextColor: "#566573",
          elementType: "blockHeading",
          heading: "Inventory",
          headingFontWeight: "light",
          headingLevel: 1,
        },
        {
          content: [
            { elementType: "divider" },
            {
              buttons: [
                {
                  accessoryIcon: "notification_information",
                  accessoryIconPosition: "iconOnly",
                  actionStyle: "normal",
                  elementType: "linkButton",
                  link: { relativePath: "/345678912" },
                  title: "information",
                },
                {
                  actionStyle: "destructive",
                  buttonType: "submit",
                  confirmationMessage: "Are you sure you want to delete this?",
                  elementType: "formButton",
                  events: [
                    {
                      action: "ajaxUpdate",
                      ajaxRelativePath: "/",
                      eventName: "click",
                      postData: {
                        deprecated: true,
                        serial_number: "345678912",
                      },
                      requestMethod: "put",
                      targetId: "345678912",
                      useRelativePathToUpdate: true,
                    },
                  ],
                  icon: "delete",
                  iconPosition: "iconOnly",
                  title: "delete",
                },
              ],
              description:
                "<span style='color:red;font-size:1.0025rem'>availiable</span><span style='font-size:1.0025rem'> - Samsung Galaxy Tab S7</span><br></br>Nerd Tablets",
              elementType: "blockHeading",
              heading: "345678912",
              headingLevel: 2,
              id: "345678912",
            },
            { elementType: "divider" },
            {
              buttons: [
                {
                  accessoryIcon: "notification_information",
                  accessoryIconPosition: "iconOnly",
                  actionStyle: "normal",
                  elementType: "linkButton",
                  link: { relativePath: "/234567891" },
                  title: "information",
                },
                {
                  actionStyle: "destructive",
                  buttonType: "submit",
                  confirmationMessage: "Are you sure you want to delete this?",
                  elementType: "formButton",
                  events: [
                    {
                      action: "ajaxUpdate",
                      ajaxRelativePath: "/",
                      eventName: "click",
                      postData: {
                        deprecated: true,
                        serial_number: "234567891",
                      },
                      requestMethod: "put",
                      targetId: "234567891",
                      useRelativePathToUpdate: true,
                    },
                  ],
                  icon: "delete",
                  iconPosition: "iconOnly",
                  title: "delete",
                },
              ],
              description:
                "<span style='color:red;font-size:1.0025rem'>availiable</span><span style='font-size:1.0025rem'> - Apple iPad (2022)</span><br></br>Freshman iPads",
              elementType: "blockHeading",
              heading: "234567891",
              headingLevel: 2,
              id: "234567891",
            },
            { elementType: "divider" },
            {
              buttons: [
                {
                  accessoryIcon: "notification_information",
                  accessoryIconPosition: "iconOnly",
                  actionStyle: "normal",
                  elementType: "linkButton",
                  link: { relativePath: "/123456789" },
                  title: "information",
                },
                {
                  actionStyle: "destructive",
                  buttonType: "submit",
                  confirmationMessage: "Are you sure you want to delete this?",
                  elementType: "formButton",
                  events: [
                    {
                      action: "ajaxUpdate",
                      ajaxRelativePath: "/",
                      eventName: "click",
                      postData: {
                        deprecated: true,
                        serial_number: "123456789",
                      },
                      requestMethod: "put",
                      targetId: "123456789",
                      useRelativePathToUpdate: true,
                    },
                  ],
                  icon: "delete",
                  iconPosition: "iconOnly",
                  title: "delete",
                },
              ],
              description:
                "<span style='color:red;font-size:1.0025rem'>availiable</span><span style='font-size:1.0025rem'> - Apple iPad (2020)</span><br></br>Freshman iPads",
              elementType: "blockHeading",
              heading: "123456789",
              headingLevel: 2,
              id: "123456789",
            },
            { elementType: "divider" },
          ],
          elementType: "container",
          id: "custom_styling",
        },
      ],
      contentContainerWidth: "narrow",
      metadata: { version: "2.0" },
    };

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(data);
  });

  test("Delete 1 item", async () => {
    const data = {
      serial_number: "123456789",
      brand: "Apple",
      model: "iPad (2020)",
      code_name: "Freshman iPads",
      deprecated: "true",
    };

    const response = await request
      .put("/inventory")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .send(data);

    const test_data = {
      brand: "Apple",
      code_name: "Freshman iPads",
      model: "iPad (2020)",
      serial_number: "123456789",
      deprecated: "true",
    };

    const res_data = {
      brand: response.body.brand,
      code_name: response.body.code_name,
      model: response.body.model,
      serial_number: response.body.serial_number,
      deprecated: response.body.deprecated,
    };

    expect(response.status).toBe(201);
    expect(res_data).toStrictEqual(test_data);
  });

  test("View items", async () => {
    const response = await request.get("/inventory");

    const data = {
      content: [
        {
          description:
            "<strong>Filter:</strong> <br></br>code name: 'placeholder text :)'",
          descriptionFontStyle: "italic",
          descriptionLineHeight: "loose",
          descriptionTextColor: "#566573",
          elementType: "blockHeading",
          heading: "Inventory",
          headingFontWeight: "light",
          headingLevel: 1,
        },
        {
          content: [
            { elementType: "divider" },
            {
              buttons: [
                {
                  accessoryIcon: "notification_information",
                  accessoryIconPosition: "iconOnly",
                  actionStyle: "normal",
                  elementType: "linkButton",
                  link: { relativePath: "/345678912" },
                  title: "information",
                },
                {
                  actionStyle: "destructive",
                  buttonType: "submit",
                  confirmationMessage: "Are you sure you want to delete this?",
                  elementType: "formButton",
                  events: [
                    {
                      action: "ajaxUpdate",
                      ajaxRelativePath: "/",
                      eventName: "click",
                      postData: {
                        deprecated: true,
                        serial_number: "345678912",
                      },
                      requestMethod: "put",
                      targetId: "345678912",
                      useRelativePathToUpdate: true,
                    },
                  ],
                  icon: "delete",
                  iconPosition: "iconOnly",
                  title: "delete",
                },
              ],
              description:
                "<span style='color:red;font-size:1.0025rem'>availiable</span><span style='font-size:1.0025rem'> - Samsung Galaxy Tab S7</span><br></br>Nerd Tablets",
              elementType: "blockHeading",
              heading: "345678912",
              headingLevel: 2,
              id: "345678912",
            },
            { elementType: "divider" },
            {
              buttons: [
                {
                  accessoryIcon: "notification_information",
                  accessoryIconPosition: "iconOnly",
                  actionStyle: "normal",
                  elementType: "linkButton",
                  link: { relativePath: "/234567891" },
                  title: "information",
                },
                {
                  actionStyle: "destructive",
                  buttonType: "submit",
                  confirmationMessage: "Are you sure you want to delete this?",
                  elementType: "formButton",
                  events: [
                    {
                      action: "ajaxUpdate",
                      ajaxRelativePath: "/",
                      eventName: "click",
                      postData: {
                        deprecated: true,
                        serial_number: "234567891",
                      },
                      requestMethod: "put",
                      targetId: "234567891",
                      useRelativePathToUpdate: true,
                    },
                  ],
                  icon: "delete",
                  iconPosition: "iconOnly",
                  title: "delete",
                },
              ],
              description:
                "<span style='color:red;font-size:1.0025rem'>availiable</span><span style='font-size:1.0025rem'> - Apple iPad (2022)</span><br></br>Freshman iPads",
              elementType: "blockHeading",
              heading: "234567891",
              headingLevel: 2,
              id: "234567891",
            },
            { elementType: "divider" },
          ],
          elementType: "container",
          id: "custom_styling",
        },
      ],
      contentContainerWidth: "narrow",
      metadata: { version: "2.0" },
    };

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(data);
  });

  test("Delete modified item", async () => {
    const data = {
      serial_number: "234567891",
      brand: "Apple",
      model: "iPad (2020)",
      code_name: "Freshman iPads",
      deprecated: "true",
    };

    const response = await request
      .put("/inventory")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .send(data);

    const test_data = {
      brand: "Apple",
      code_name: "Freshman iPads",
      model: "iPad (2020)",
      serial_number: "234567891",
      deprecated: "true",
    };

    const res_data = {
      brand: response.body.brand,
      code_name: response.body.code_name,
      model: response.body.model,
      serial_number: response.body.serial_number,
      deprecated: response.body.deprecated,
    };

    expect(response.status).toBe(201);
    expect(res_data).toStrictEqual(test_data);
  });

  test("View item", async () => {
    const response = await request.get("/inventory");

    const data = {
      content: [
        {
          description:
            "<strong>Filter:</strong> <br></br>code name: 'placeholder text :)'",
          descriptionFontStyle: "italic",
          descriptionLineHeight: "loose",
          descriptionTextColor: "#566573",
          elementType: "blockHeading",
          heading: "Inventory",
          headingFontWeight: "light",
          headingLevel: 1,
        },
        {
          content: [
            { elementType: "divider" },
            {
              buttons: [
                {
                  accessoryIcon: "notification_information",
                  accessoryIconPosition: "iconOnly",
                  actionStyle: "normal",
                  elementType: "linkButton",
                  link: { relativePath: "/345678912" },
                  title: "information",
                },
                {
                  actionStyle: "destructive",
                  buttonType: "submit",
                  confirmationMessage: "Are you sure you want to delete this?",
                  elementType: "formButton",
                  events: [
                    {
                      action: "ajaxUpdate",
                      ajaxRelativePath: "/",
                      eventName: "click",
                      postData: {
                        deprecated: true,
                        serial_number: "345678912",
                      },
                      requestMethod: "put",
                      targetId: "345678912",
                      useRelativePathToUpdate: true,
                    },
                  ],
                  icon: "delete",
                  iconPosition: "iconOnly",
                  title: "delete",
                },
              ],
              description:
                "<span style='color:red;font-size:1.0025rem'>availiable</span><span style='font-size:1.0025rem'> - Samsung Galaxy Tab S7</span><br></br>Nerd Tablets",
              elementType: "blockHeading",
              heading: "345678912",
              headingLevel: 2,
              id: "345678912",
            },
            { elementType: "divider" },
          ],
          elementType: "container",
          id: "custom_styling",
        },
      ],
      contentContainerWidth: "narrow",
      metadata: { version: "2.0" },
    };

    expect(response.status).toBe(200);
    expect(response.body).toStrictEqual(data);
  });

  test("Delete last item", async () => {
    const data = {
      serial_number: "345678912",
      brand: "Apple",
      model: "iPad (2020)",
      code_name: "Freshman iPads",
      deprecated: "true",
    };

    const response = await request
      .put("/inventory")
      .set("Content-Type", "application/x-www-form-urlencoded")
      .send(data);

    const test_data = {
      brand: "Apple",
      code_name: "Freshman iPads",
      model: "iPad (2020)",
      serial_number: "345678912",
      deprecated: "true",
    };

    const res_data = {
      brand: response.body.brand,
      code_name: response.body.code_name,
      model: response.body.model,
      serial_number: response.body.serial_number,
      deprecated: response.body.deprecated,
    };

    expect(response.status).toBe(201);
    expect(res_data).toStrictEqual(test_data);
  });

  test("View empty inventory", async () => {
    const response = await request.get("/inventory");

    const data = {
      metadata: {
        version: "2.0",
      },
      contentContainerWidth: "narrow",
      content: [
        {
          elementType: "blockHeading",
          heading: "Inventory",
          headingLevel: 1,
          headingFontWeight: "light",
          description:
            "<strong>Filter:</strong> <br></br>code name: 'placeholder text :)'",
          descriptionLineHeight: "loose",
          descriptionFontStyle: "italic",
          descriptionTextColor: "#566573",
        },
        {
          elementType: "container",
          id: "custom_styling",
          content: [
            {
              elementType: "divider",
            },
          ],
        },
      ],
    };

    expect(response.body).toStrictEqual(data);
  });
  */
});
