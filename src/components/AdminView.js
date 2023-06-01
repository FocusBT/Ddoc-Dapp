import React from "react";
import InfoGrid from "./InfoGrid";
import ChangeDataDisplayed from "./ChangeDataDisplayed";
import ChangeAddress from "./ChangeDataDisplayed";
import Announce from "./Announce";
import contractContext from "../context/contractContext";
import { useContext, useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "./AdminView.css";
import { parseBytes32String } from "ethers/lib/utils";

const AdminView = () => {
  const { Contract, Account, tokenContract } = useContext(contractContext);

  const [isLoading, setIsLoading] = useState(false);

  const [clubBalance, setClubBalance] = useState();
  const [clubMembers, setClubMembers] = useState();
  const [SmartContractBalance, setSmartContractBalance] = useState();
  const [poolOwnerTax, setPoolOwnerTax] = useState();
  const [poolCoreTeam, setPoolCoreTeam] = useState();
  const [admin, setAdmin] = useState();

  const getIns = async () => {
    setIsLoading(true);

    const arr023 = await Contract.getAdmin();
    setAdmin(arr023.toLowerCase());

    const temp7 = await Contract.getAllClubsAmount();
    const clubBalances = temp7.map((item) => item / 10 ** 6);
    setClubBalance(clubBalances);

    const tempp1 = await Contract.getAllClubsMem();
    const clubMembers = tempp1.map((item) => item);
    setClubMembers(clubMembers);

    const temp8 = await Contract.smartContractBalance();
    setSmartContractBalance(temp8 / 10 ** 6);

    const temp5 = await Contract.poolOwnerTAX();
    setPoolOwnerTax(temp5 / 10 ** 6);

    const temp4 = await Contract.PoolCoreTeamTAX();
    setPoolCoreTeam(temp4 / 10 ** 6);
    setIsLoading(false);
  };

  useEffect(() => {
    document.title = "Admin Panel";
    if (typeof Account != "undefined" && typeof Contract != "undefined") {
      getIns();
    } else {
    }
  }, [Contract, Account]);

  return (
    <>
      {isLoading ||
      typeof Contract === "undefined" ||
      typeof Account === "undefined" ||
      typeof clubBalance === "undefined" ||
      admin !== Account ? (
        <ClipLoader size={150} />
      ) : (
        <div className="admin-main-div">
          <InfoGrid
            gridHeader="Monitor all Contract Parameters"
            gridObject={{
              "Smart Contract Address": Contract.address,
              "Smart Contract Balance": SmartContractBalance.toString(),
              "Pool Owner Tax Collected": poolOwnerTax.toString(),
              "Pool Core Team Tax Collected": poolCoreTeam.toString(),
              "Amount In Club 1": clubBalance[0].toString(),
              "Amount In Club 2": clubBalance[1].toString(),
              "Amount In Club 3": clubBalance[2].toString(),
              "Number of members in Club 1": clubMembers[0].toString(),
              "Number of members in Club 2": clubMembers[1].toString(),
              "Number of members in Club 3": clubMembers[2].toString(),
            }}
          />

          <InfoGrid
            gridHeader="Change Owner Address"
            gridObject={{
              "Change Owner Address": (
                <ChangeAddress
                  type="owner"
                  contract={Contract}
                  account={Account}
                />
              ),
            }}
          />

          <InfoGrid
            gridHeader="Claim Tax"
            gridObject={{
              "Pool Owner Tax": (
                <ChangeAddress
                  type="poolowner"
                  contract={Contract}
                  account={Account}
                  amount={parseInt(poolOwnerTax._hex)}
                />
              ),
              "Pool Core Team Tax": (
                <ChangeAddress
                  type="poolcore"
                  contract={Contract}
                  account={Account}
                  amount={parseInt(poolCoreTeam._hex)}
                />
              ),

              "Daily 1 % trigger": (
                <ChangeAddress
                  type="1%"
                  contract={Contract}
                  account={Account}
                  amount={parseInt(poolCoreTeam._hex)}
                />
              ),
            }}
          />
        </div>
      )}
    </>
  );
};

export default AdminView;
