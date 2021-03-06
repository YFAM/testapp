import { InjectedConnector } from "@web3-react/injected-connector";
// import { NetworkConnector } from "@web3-react/network-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { LedgerConnector } from "@web3-react/ledger-connector";
import { TrezorConnector } from "@web3-react/trezor-connector";
import { FrameConnector } from "@web3-react/frame-connector";
import { FortmaticConnector } from "@web3-react/fortmatic-connector";
import { PortisConnector } from "@web3-react/portis-connector";
import { SquarelinkConnector } from "@web3-react/squarelink-connector";
import { TorusConnector } from "@web3-react/torus-connector";
import { AuthereumConnector } from "@web3-react/authereum-connector";

const POLLING_INTERVAL = 12000;
const RPC_URLS = {
  1: "https://mainnet.infura.io/v3/4f9a4d05fe6f464e809cd3f4325f5fe9",
  4: "https://rinkeby.infura.io/v3/4f9a4d05fe6f464e809cd3f4325f5fe9",
  3: "https://ropsten.infura.io/v3/4f9a4d05fe6f464e809cd3f4325f5fe9"
};

export const injected = new InjectedConnector({
  supportedChainIds: [3]
});

// export const network = new NetworkConnector({
//   urls: { 1: RPC_URLS[1], 4: RPC_URLS[4] },
//   defaultChainId: 1,
//   pollingInterval: POLLING_INTERVAL
// });

export const walletconnect = new WalletConnectConnector({
  rpc: { 1: RPC_URLS[3] },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  pollingInterval: POLLING_INTERVAL
});

export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[3],
  appName: "yfam"
});

export const ledger = new LedgerConnector({
  chainId:3,
  url: RPC_URLS[3],
  pollingInterval: POLLING_INTERVAL
});

export const trezor = new TrezorConnector({
  chainId: 3,
  url: RPC_URLS[3],
  pollingInterval: POLLING_INTERVAL,
  manifestEmail: "dummy@abc.xyz",
  manifestAppUrl: "https://8rg3h.csb.app/"
});

export const frame = new FrameConnector({ supportedChainIds: [3] });

export const fortmatic = new FortmaticConnector({
  apiKey: "pk_live_F95FEECB1BE324B5",
  chainId: 3
});

export const portis = new PortisConnector({
  dAppId: "211b48db-e8cc-4b68-82ad-bf781727ea9e",
  networks: [3, 100]
});

export const squarelink = new SquarelinkConnector({
  clientId: "5f2a2233db82b06b24f9",
  networks: [3, 100]
});

export const torus = new TorusConnector({ chainId: 3 });

export const authereum = new AuthereumConnector({ chainId: 3 });
