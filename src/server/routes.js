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
        parseErrorHandler: (error, h, request) => {
          if (error) {
            throw h
              .response(
                "Payload content length greater than maximum allowed: 1000000",
                413
              )
              .takeover();
          }
        },
      },
    },
  },
];

module.exports = routes;
