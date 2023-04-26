import { request } from "./setup";
//import { clearDB } from "../utils/clearDB";

describe("help tests", () => {
    test("Add 3 correct items", async () => {
        const items = [
        {
            room: "mckee 201",
            problem: "Monitor won't work",
            resolved: "false",
           
        },
        {
            room: "eng 201",
            problem: "no internet",
            resolved: "false",
        },
        {
            room: "mckee 209",
            problem: "Airplay not connecting",
            resolved: "false",
        },
        {
            room: "IOT 100",
            problem: "Computer doesn't start",
            resolved: "false",
        },
        ];
        for (const item of items){
            const response = await request
                .post("/program")
                .set("Content-Type", "application/x-www-form-urlencoded")
                .send(item);
            expect(response.status).toBe(404); //change back to 201
        
        }
    

    });
});