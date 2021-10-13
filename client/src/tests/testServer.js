import { rest } from "msw";
import { setupServer } from "msw/node";

const getMethodServer = setupServer(
    rest.get("http://localhost:5000/users/", (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                firstName: "John",
                lastName: "Murphy",
                email: "jmurphy@gmail.com",
                date: "23/10/21",
            }),
            // fallback request handler
            rest.get('*', (req, res, ctx), () => {
                console.error(`Please add request handler for ${req.url.toString()}`)
                return res(
                    ctx.status(500),
                    ctx.json({ error: 'Please add request handler'})
                )
            })
        );
    }),
);

export { getMethodServer, rest }

