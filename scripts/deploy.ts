import hardhat from "hardhat";
import { getOZAccount } from "../test/util";

async function main() {
    const account = await getOZAccount();
    const contractFactory = await hardhat.starknet.getContractFactory("L2RockafellerBot");
    await account.declare(contractFactory);
    const contract = await account.deploy(contractFactory, { _owner_address: account.address, _l1_contract_address: "0x68B8126E255827773545e6cD7e2bA37A695F14e3", amount_usdc_max: 1e15, amount_usdc_extreme: 1e15, amount_usdc_large: 1e15 });
    console.log("Deployed to:", contract.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
