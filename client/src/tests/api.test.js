import { getEvents, postEvent } from "../api";
import { getMethodServer, rest } from "./testServer";

it("fetches data correctly", async () => {
    const data = await getEvents();
    expect(data.firstName).toEqual("John");
});

it("handles failure", async () => {
    getMethodServer.use(
        rest.get("http://localhost:5000/users", (req, res, ctx) => {
            return res(ctx.status(404));
        }),
    );
    await expect(getEvents()).resolves.toThrow("404");
});
