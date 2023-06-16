const swagger = require("swagger-autogen")();
const outputFile = "./swagger_output.json";
const endpointFile = ["./openAPI.js"];
const doc = {
  info: {
    version: "1.0.0",
    title: "Tasklibrary API",
    description: "Tasklibrary API Information",
  },
  host: "localhost:3000",
  basePath: "/",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "Task",
      description: "API for Tasks in the tasklibrary",
    },
    {
      name: "Login",
      description: "API for Logins in the tasklibrary",
    },
  ],
  definitions: {
    Task: {
        id: 1,
        userId: 1,
        title: "vacuuming",
        created_at: "15.06.2023",
        done_at: "16.06.2023",
    },
    Login: {
        id: 1,
        email: "evan@kbw.ch",
        password: "m295",
    }
  }
};

swagger(outputFile, endpointFile, doc);
