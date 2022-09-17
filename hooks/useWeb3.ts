import { useState, useEffect } from 'react';
import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core';

export const useWeb3 = () => {
  // Need to switch back to _1!!!!
  const rpc = process.env.NEXT_PUBLIC_RPC_URL_4 as string;
  const { active, library } = useWeb3React();

  const web3Provider = new Web3.providers.HttpProvider(rpc);

  const [web3, setWeb3] = useState<Web3>(new Web3(web3Provider));

  useEffect(() => {
    if (active && library) {
      setWeb3(new Web3(library));
    } else {
      setWeb3(new Web3(web3Provider));
    }
  }, [active]);

  return web3;
};
