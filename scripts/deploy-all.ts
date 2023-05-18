import hardhat, { ethers } from 'hardhat'

import { deployNames, KEEPER_REGISTRY, QUOTER_V2_ADDRESSES } from "./constants"
import deployment from "../deployment/deployments.json"

import { IDeployment, writeDeployData } from "./utils"
const deployments: IDeployment = deployment

let CHAIN_ID: any

interface ContractDeploy {
  contractName: string
  nameFile?: string
  args?: any
  networks?: any
}


const contracts: ContractDeploy[] = [
  {
    contractName: "RockafellerBotL1",
    args: () => [1, "0xE592427A0AEce92De3Edee1F18E0157C05861564", "0xde29d060D45901Fb19ED6C6e959EB22d8626708e", "0xD87Ba7A50B2E7E660f678A895E4B72E7CB4CCd9C", "0xdc31Ee1784292379Fbb2964b3B9C4124D8F89C60"]
  },
  {
    contractName: "L1L2Example",
    args: () => ["0x6f36ef6a41151fb65dc3d9fc78b4b30d68aa4287"],
  },
]

export async function main() {

  const chain_id = await hardhat.network.provider.send('eth_chainId')

  CHAIN_ID = parseInt(chain_id, 16)

  console.log(CHAIN_ID)

  for (let i in contracts) {
    const contract = contracts[i]

    if (contract.networks && !contract.networks[CHAIN_ID]) continue

    console.log(`deploying ${contract.contractName} started`)

    await deployContract(
      contract.contractName,
      contract.nameFile,
      typeof contract?.args === "function" ? contract.args() : contract.args
    )

    console.log(`${contract.contractName} deployed success`)
    console.log("-------------------------------------------")
  }
}

export async function deployContract(
  contractName: string,
  nameFile?: string,
  args?: any
) {

  const contractFactory = await ethers.getContractFactory(
    nameFile ?? contractName
  )

  console.log(`Contract for deployment Started`)

  let contract

  if (args) {
    contract = await contractFactory.deploy(...args)
  } else {
    contract = await contractFactory.deploy()
  }

  await writeDeployData(CHAIN_ID, contractName, contract.address, "")

  console.log("Contract Deployment Ended")
  console.log("***************************************")
}

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error)
//     process.exit(1)
//   })
