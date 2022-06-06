import {
  createConnectorAPI,
  createReachAPI,
  loadReachWithOpts,
  connectUser,
  disconnectUser,
  ConnectedUserData,
  reconnectUser,
} from "@jackcom/reachduck";
import {
  loadStdlib,
  ALGO_MyAlgoConnect as MyAlgoConnect,
  ALGO_WalletConnect as WalletConnect,
} from "@reach-sh/stdlib";
import store, { addNotification } from "../state";

/** Global default reach object */
export const useReach = createReachAPI;

/** Use `MyAlgoConnect` for user transactions */
export function useMyAlgo() {
  setWalletFallback({ MyAlgoConnect });
}

/** Use `WalletConnect` for user transactions */
export function useWalletConnect() {
  setWalletFallback({ WalletConnect });
}

/** Connect user Wallet (MyAlgoWallet) */
async function setWalletFallback(walletFallback: any) {
  const providerEnv = createConnectorAPI("ALGO", "TestNet").getProviderEnv();
  // Second argument are default opts that you can override.
  // @jackcom/reachduck will use these values if you don't specify any.
  loadReachWithOpts(loadStdlib, {
    chain: "ALGO",
    network: "TestNet",
    providerEnv,
    walletFallback,
  });
}

/** Connect user Wallet  */
export async function connectWallet() {
  try {
    store.loading(true);
    addNotification("🔑 Connecting Account ... ");
    return onConnected(await connectUser());
  } catch (e: any) {
    store.error(e.message || e);
    return null;
  }
}

/** Reconnect user session */
export async function reconnectWallet(addr: string) {
  try {
    store.loading(true);
    addNotification("🔑 Resuming session ... ");
    return onConnected(await reconnectUser(addr));
  } catch (e: any) {
    store.error(e.message || e);
    return null;
  }
}

export function disconnectWallet() {
  disconnectUser();
  store.reset();
  window.location.reload();
}

/** @internal Connect user Wallet (MyAlgoWallet) */
function onConnected(data: ConnectedUserData) {
  try {
    const { account, address, balance } = data;
    // Update global state
    store.multiple({
      address,
      account,
      balance,
      loading: false,
    });
    addNotification("✅ Connected ");

    return account;
  } catch (e: any) {
    store.error(e.message || e);
    return null;
  }
}
