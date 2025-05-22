useEffect(() => {
  const fetchGas = async () => {
    const response = await fetch('https://owlracle.info/eth/gas');
    const { fast } = await response.json();
    setGwei(fast.toFixed(0));
  };
  setInterval(fetchGas, 30000);
}, []);
