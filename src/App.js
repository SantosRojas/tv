import { useEffect, useState } from "react";
import { Tv } from "./components/tv";
import { Links } from "./data/links";

function App() {

  const [currentChanel, setCurrentChanel] = useState(0)
  const [stateBtnA, setStateBtnA] = useState(false)
  const [stateBtnS, setStateBtnS] = useState(true)
  useEffect(() => {
    if (currentChanel > 0 && currentChanel < Links.length - 1) {
      setStateBtnA(true);
      setStateBtnS(true);
    } else if (currentChanel === 0) {
      setStateBtnA(false);
      setStateBtnS(true);
    } else {
      setStateBtnA(true);
      setStateBtnS(false);
    }
  }, [currentChanel]);

  const nextChanel = () => {
    setCurrentChanel(currentChanel + 1)
  }
  const prevChanel = () => {
    setCurrentChanel(currentChanel - 1)
  }

  return (
    <Tv 
    canal={Links[currentChanel]} 
    nextChanel={nextChanel} 
    prevChanel={prevChanel}
    stateBtnA ={stateBtnA}
    stateBtnS = {stateBtnS} />
  );
}

export default App;
