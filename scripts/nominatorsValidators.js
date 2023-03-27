import { ApiPromise, WsProvider } from '@polkadot/api';

// Replace with an account address that is actively nominating on Polkadot
const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';

async function main () {
  const wsProvider = new WsProvider('wss://rpc.polkadot.io');
  const api = await ApiPromise.create({ provider: wsProvider });
  const validators = await api.query.staking.nominators(ALICE);
  if (validators.toJSON() && validators.toJSON().hasOwnProperty("targets")) {
    console.log(`ALICE account ${ALICE} has nominated the following validators\n\n`,
      JSON.stringify(validators.toJSON()["targets"], null, 2));
  } else {
    console.log(`ALICE account ${ALICE} has not nominated any validators`);
  }
}

main().catch(console.error).finally(() => process.exit());

