import { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import NetworkSwitch from "./utils/NetworkSwitch";
import { HeroSection } from "./pages";
import { AppContext } from "./utils/utils";

function App() {
  const { account, chainId } = useContext(AppContext);
  const [openNetworkSwitch, setOpenNetworkSwitch] = useState(false);

  useEffect(() => {
    if (account && chainId > 0 && chainId !== 97) {
      setOpenNetworkSwitch(true);
    }
  }, [chainId, account]);
  return (
    <>
      <NetworkSwitch open={openNetworkSwitch} setOpen={setOpenNetworkSwitch} />
      <Header />
      <HeroSection />
    </>
  );
}

export default App;
