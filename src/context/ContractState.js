import React from "react";
import contractContext from "./contractContext";
// import getWeb3 from "../getWeb";
import ROI_POOL from "../contracts/ROI_POOL.json";
import { useState, useEffect } from "react";
import MyToken from "../contracts/MyToken.json";
import { ethers } from "ethers";

const ContractState = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [Contract, setContract] = useState();
  const [Account, setAccount] = useState("");
  const [web3US, setWeb3] = useState();
  const [provider, setProvider] = useState();

  const [tokenContract, setTokenContract] = useState();

  const requestAccounts = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        console.log(accounts[0]);
        setAccount(accounts[0]);
      } catch (error) {}
    }
  };

  const connect = async () => {
    if (window.ethereum) {
      await requestAccounts();

      const provider = new ethers.providers.Web3Provider(window.ethereum);

      // detect account changes
      window.ethereum.on("accountsChanged", function (accounts) {
        console.log("accountsChanges", accounts);
        setAccount(accounts[0]);
        window.location.href = "/";
      });

      // detect network changes
      // window.ethereum.on("networkChanged", function (networkId) {
      //   console.log("networkChanged", networkId);
      //   if (networkId !== "0x38") {
      //     // check if network is not Binance Smart Chain
      //     window.ethereum
      //       .request({
      //         method: "wallet_addEthereumChain",
      //         params: [
      //           {
      //             chainId: "0x38",
      //             chainName: "Binance Smart Chain",
      //             nativeCurrency: {
      //               name: "BNB",
      //               symbol: "BNB",
      //               decimals: 18,
      //             },
      //             rpcUrls: ["https://bsc-dataseed.binance.org/"],
      //             blockExplorerUrls: ["https://bscscan.com/"],
      //           },
      //         ],
      //       })
      //       .then(() => {
      //         console.log("Switched to Binance Smart Chain");
      //         window.location.href = "/";
      //       })
      //       .catch((error) => {
      //         console.error(error);
      //       });
      //   } else {
      //     window.location.href = "/";
      //   }
      // });

      // check initial network
      // const chainId = await provider
      //   .getNetwork()
      //   .then((network) => network.chainId);
      // if (chainId !== 56) {
      //   console.log(chainId);
      //   // check if network is not Binance Smart Chain
      //   window.ethereum
      //     .request({
      //       method: "wallet_addEthereumChain",
      //       params: [
      //         {
      //           chainId: "0x38",
      //           chainName: "Binance Smart Chain",
      //           nativeCurrency: {
      //             name: "BNB",
      //             symbol: "BNB",
      //             decimals: 18,
      //           },
      //           rpcUrls: ["https://bsc-dataseed.binance.org/"],
      //           blockExplorerUrls: ["https://bscscan.com/"],
      //         },
      //       ],
      //     })
      //     .then(() => {
      //       console.log("Switched to Binance Smart Chain");
      //       window.location.href = "/";
      //     })
      //     .catch((error) => {
      //       console.error(error);
      //     });
      // }

      return provider;
    }
  };

  const loadWeb3Contract = async (web3) => {
    const abi = ROI_POOL.abi;
    // 0xe3Abd8017b4fbC72eDE39eF0c738FC57243F915E  polygon
    const address = "0xe3Abd8017b4fbC72eDE39eF0c738FC57243F915E";
    // 0xc634cC2DF6D340d1b5a4242D423201f49c6f5a9E
    const contract = new ethers.Contract(address, abi, web3.getSigner());
    setContract(contract); // NOT WORKING SINCE IT IS IN ASYNC FUNCTION THATS WHY I COULDNT FIND SOLUTION FOR THAT.
  };

  const loadTokenContract = async (web3) => {
    const TokenAbi = MyToken.abi;
    const address = "0xc2132D05D31c914a87C6611C10748AEb04B58e8F";

    const TokenContract = new ethers.Contract(
      address,
      TokenAbi,
      web3.getSigner()
    );
    setTokenContract(TokenContract);
  };

  useEffect(() => {
    const fetchContractAndAccount = async () => {
      const provider = await connect();
      if (typeof provider !== "undefined") {
        console.log("not wallet detected");
        setProvider(provider);
        await loadWeb3Contract(provider);
        setWeb3(provider);
        await loadTokenContract(provider);
      }
    };

    fetchContractAndAccount();
  }, []);

  useEffect(() => {}, [Contract, tokenContract]);

  return (
    <contractContext.Provider
      value={{
        Contract,
        Account,
        tokenContract,
        web3US,
        provider,
      }}
    >
      {props.children}
    </contractContext.Provider>
  );
};

export default ContractState;
