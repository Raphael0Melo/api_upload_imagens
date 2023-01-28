const mongoose = require("mongoose")

require("dotenv").config()

mongoose.set("strictQuery", true)

async function main() {
  await mongoose.connect(
    `${process.env.MONGO_ATLAS}`
  )
  console.log("Conectado com Sucesso!");
}

main().catch((err) => console.log(err))

module.exports = main