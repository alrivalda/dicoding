const postPredictHandler = require("../server/handler");

const routes = [
  {
    path: "/predict",
    method: "POST",
    handler: postPredictHandler,
    options: {
      payload: {
        allow: "multipart/form-data",
        multipart: true,
        maxBytes: 1000000,
        failAction: async (request, h, err) => {
          throw Boom.tooLarge(
            "Payload content length greater than maximum allowed: 1000000",
            [err]
          );
        },
      },
    },
  },
];

module.exports = routes;
