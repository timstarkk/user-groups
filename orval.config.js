module.exports = {
  "mdisrupt-api": {
    input: "./schema.json",
    output: {
      mode: "tags",
      client: "react-query",
      target: "src/service/hooks.ts",
      schemas: "src/service/models",
      prettier: true,
      override: {
        mutator: {
          path: "./src/useAxios.ts",
          name: "useAxios",
        },
      },
    },
  },
};
