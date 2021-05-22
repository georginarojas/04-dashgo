import { createServer, Factory, Model, Response } from "miragejs";
import faker from "faker";
import users from "../../pages/users";

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}), // can have some data of user object
    },

    // Initializing the API with data
    // "Factories" https://miragejs.com/tutorial/part-8/
    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLocaleLowerCase();
        },
        createdAt() {
          return faker.date.recent(10); // 10 days until now
        },
      }),
    },

    // "Seeds" https://miragejs.com/tutorial/part-4/#gatsby-focus-wrapper
    seeds(server) {
      server.createList("user", 200); // 10 users
    },
    // https://miragejs.com/docs/main-concepts/route-handlers/
    routes() {
      this.namespace = "api";
      // this.urlPrefix = 'http://localhost:8080'
      this.timing = 750; // Delay of 750 milliseconds

      //https://miragejs.com/docs/main-concepts/shorthands/   (get and post)

      // Creating a pagination
      this.get("/users", function (scheme, request) {
        // 10 data for page
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = scheme.all("user").length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(scheme.all("user")).users.slice(
          pageStart,
          pageEnd
        );

        return new Response(
          200,
          // headers
          { "x-total-count": String(total) }, // x-total-count is a convencional name
          { users }
        );

      });

      this.get("/users/:id");
      this.post("/users");

      // Reset the namespace for not have conflicts with our api routes in other files
      this.namespace = "";
      // The called API first pass for to miragejs and then can proceed to another api routes.
      this.passthrough();
    },
  });

  return server;
}
