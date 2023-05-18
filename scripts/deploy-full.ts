const hre = require("hardhat")

import { main as deploy } from "./deploy-all"
// import { main as verify } from "./verify"
// import { main as configure } from "./configure-all"

async function main() {
  await deploy()
  // await configure()

  // await verify()
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
