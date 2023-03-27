import { ApiPromise, WsProvider } from '@polkadot/api';

async function main () {
  const wsProvider = new WsProvider('wss://rpc.polkadot.io');
  const api = await ApiPromise.create({ provider: wsProvider });
  let authorities = await api.call.authorityDiscoveryApi.authorities();
  console.log('authorities: ', authorities);
}

main().catch(console.error).finally(() => process.exit());

