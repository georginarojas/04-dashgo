import { createServer, Factory, Model } from "miragejs";
import faker from "faker";

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
      server.createList("user", 10); // 10 users
    },

    routes() {
      this.namespace = "api";
      // this.urlPrefix = 'http://localhost:8080'
      this.timing = 750; // Delay of 750 milliseconds

      //https://miragejs.com/docs/main-concepts/shorthands/
      this.get("/users");
      this.post("/users");


      // Reset the namespace for not have conflicts with our api routes in other files
      this.namespace = "";
      // The called API first pass for to miragejs and then can proceed to another api routes.
      this.passthrough();
    },
  });

  return server;
}
