import { request } from "./setup";
import { clearDB } from "../utils/clearDB";

describe("Example Test", () => {
  it("GET /inventory should return a 200 status code", async () => {
    const response = await request.get("/inventory");

    expect(response.status).toBe(200);
  });

  it('GET / should return "SUP!"', async () => {
    const response = await request.get("/");

    expect(response.text).toBe("SUP!");
  });

  it("GET /inventory should return []", async () => {
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
});
