const studentsR = require("./students")

exports.routesInit = (app) => {
  app.use("/students", studentsR )
}

