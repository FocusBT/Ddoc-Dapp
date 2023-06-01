import React from "react";
import InfoGrid from "./InfoGrid";
import contractContext from "../context/contractContext";
import { useContext, useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ClientView.css";

const ClientView = () => {
  const { Contract, Account, tokenContract, provider } =
    useContext(contractContext);
  const [isLoading, setIsLoading] = useState(false);
  const [MyDaily1, setMyDaily1] = useState();
  const [MyDirectIncome, setMyDirectIncome] = useState();
  const [MyTotalMatachingIncome, setMyTotalMatachingIncome] = useState();
  const [TotalProfit, setTotalProfit] = useState();
  const [teamWeight, setteamWeight] = useState();
  const [InvitedPartners, setInvitedPartners] = useState();
  const [myID, setMyID] = useState();
  const [myBalance, setMyBalance] = useState();
  const [selectedPackage, setSelectedPackage] = useState();
  const [refferal, setRefferal] = useState();
  const [totalWithdrawn, setTotalWithdrawn] = useState();
  const [Wamount, setWamount] = useState();
  const [club, setClub] = useState();
  const [yourClubIncome, setYourClubIncome] = useState();
  const [roiLevelIncome, setRoiLevelIncome] = useState();
  const [totalTeamBusiness, setTotalTeamBusiness] = useState();
  const [getClubIncome, setgetClubIncome] = useState();
  const [ClubInfos, setClubInfos] = useState({});
  const [totalEarnedFromClubs, setTotalEarnedFromClubs] = useState();
  const [myPackage, setMyPackage] = useState();

  const [EarnedFromClubs, setEarnedFromClubs] = useState({});

  const getIns = async () => {
    setIsLoading(true);

    const arr1230216 = await Contract.getPackage(); // my ID
    setMyPackage(arr1230216 / 10 ** 6);

    const arr02126 = await Contract.getClubIncomeForCurrUser(); // my ID
    // arr02126.wait();

    const arr202126 = await Contract.getTotalClubAmmounts(); // my ID
    setEarnedFromClubs({
      TotalEarnedFromClub1: parseInt(arr202126[0]._hex) / 10 ** 6,
      TotalEarnedFromClub2: parseInt(arr202126[1]._hex) / 10 ** 6,
      TotalEarnedFromClub3: parseInt(arr202126[2]._hex) / 10 ** 6,
    });

    if (parseInt(arr02126[1]._hex) === 0) {
      setClubInfos({
        club1: "INACTIVE",
        club2: "INACTIVE",
        club3: "INACTIVE",
      });
    } else if (parseInt(arr02126[1]._hex) === 1) {
      setClubInfos({
        club1: parseInt(arr02126[0]._hex) / 10 ** 6,
        club2: "INACTIVE",
        club3: "INACTIVE",
      });
    } else if (parseInt(arr02126[1]._hex) === 2) {
      setClubInfos({
        club1: "ACTIVE",
        club2: parseInt(arr02126[0]._hex) / 10 ** 6,
        club3: "INACTIVE",
      });
    } else if (parseInt(arr02126[1]._hex) === 3) {
      setClubInfos({
        club1: "ACTIVE",
        club2: "ACTIVE",
        club3: parseInt(arr02126[0]._hex) / 10 ** 6,
      });
    }

    setgetClubIncome(arr02126);

    const arr123026 = await Contract.getTotalEarnedFromClubs(); // my ID
    setTotalEarnedFromClubs(arr123026 / 10 ** 6);

    const arr026 = await Contract.getTotalTeamBusiness(); // my ID
    setTotalTeamBusiness(arr026 / 10 ** 6);

    const arr0231 = await Contract.getDirectIncome(); // my ID
    setMyDirectIncome(parseInt(arr0231));

    const arr023 = await Contract.getClubIncome(); // my ID
    setYourClubIncome(parseInt(arr023 / 10 ** 6));

    const arr022 = await Contract.getClub(); // my ID

    setClub(parseInt(arr022 / 10 ** 6));

    const arr02 = await Contract.getMyID(); // my ID

    setMyID(parseInt(arr02));

    const arr03 = await Contract.getTotalWithdraw(); // total withdraw done by user

    setTotalWithdrawn(parseInt(arr03 / 10 ** 6));

    const arr0 = await Contract.getInvitedPartners(); // total Direct referraLS

    setInvitedPartners(parseInt(arr0));

    const arr3 = await Contract.getDailyIncome(); // dailt 1 %

    setMyDaily1(parseInt(arr3) / 10 ** 6);

    const arr2 = await Contract.getTotalReffIncome(); // total Direct Referrals

    setRoiLevelIncome(parseInt(arr2) / 10 ** 6);

    const arr5 = await Contract.getAllReffs(Account, true); // Total ROI Income

    setMyTotalMatachingIncome(arr5 / 10 ** 6);

    const arr7 = await Contract.getTotalProfit(); // TOTAL PROFIT

    setTotalProfit(parseInt(arr7) / 10 ** 6);

    const temp198 = await Contract.getTeamLength(Account);

    setteamWeight(parseInt(temp198));

    const temp12 = await Contract.getMyBalance();

    setMyBalance(parseInt(temp12) / 10 ** 6);

    setIsLoading(false);
  };

  const UpgradePackage = async (amount) => {
    setIsLoading(true);
    var temp = amount.toString();
    temp = temp + "000000";
    const tx = await tokenContract.approve(
      "0xe3Abd8017b4fbC72eDE39eF0c738FC57243F915E",
      temp
    );

    let receipt;
    while (!receipt) {
      receipt = await provider.getTransactionReceipt(tx.hash);
    }

    const tx2 = await Contract.JOIN(0, amount);
    let receipt2;
    while (!receipt2) {
      receipt2 = await provider.getTransactionReceipt(tx2.hash);
    }

    setIsLoading(false);
    window.location.reload(false);
  };

  const JoinROI = async (reff, amount) => {
    if (!selectedPackage) {
      alert("Please enter both referral ID and select a package.");
      return;
    }

    if (isNaN(reff) || isNaN(selectedPackage)) {
      alert("Please enter valid referral ID and package amount.");
      return;
    }
    setIsLoading(true);

    var temp = amount.toString();
    temp = temp + "000000";
    const tx = await tokenContract.approve(
      "0xe3Abd8017b4fbC72eDE39eF0c738FC57243F915E",
      temp
    );

    let receipt;
    while (!receipt) {
      receipt = await provider.getTransactionReceipt(tx.hash);
    }
    const tx2 = await Contract.JOIN(reff, amount);
    let receipt2;
    while (!receipt2) {
      receipt2 = await provider.getTransactionReceipt(tx2.hash);
    }

    setIsLoading(false);
    window.location.reload(false);
  };

  const Withdraw = async (amount) => {
    if (!amount) {
      alert("Please enter some amount.");
      return;
    }
    if (isNaN(amount)) {
      alert("Please enter valid amount.");
      return;
    }
    setIsLoading(true);
    var temp = amount.toString();
    temp = temp + "000000";
    const tx = await Contract.withdraw(temp);

    let receipt;
    while (!receipt) {
      receipt = await provider.getTransactionReceipt(tx.hash);
    }

    setIsLoading(false);

    window.location.reload(false);
  };

  useEffect(() => {
    document.title = "ROI";
    if (typeof Account != "undefined" && typeof Contract != "undefined") {
      getIns();
    } else {
    }
  }, [Contract, Account]);

  return (
    <>
      {isLoading ||
      typeof Contract == "undefined" ||
      typeof Account == "undefined" ? (
        <ClipLoader size={150} />
      ) : (
        <div className="client-main-div">
          <h2
            style={{ marginTop: 20, display: "flex", justifyContent: "center" }}
          >
            Dashboard
          </h2>
          {myID != 0 ? (
            <>
              <div>
                <div
                  style={{
                    margin: "2rem 4rem",
                    backgroundImage:
                      "linear-gradient(45deg, rgba(86, 126, 188, 0.83), #002d74)",
                  }}
                  className="card  p-3 text-center"
                >
                  <div class="client-inner-div card-header text-start">
                    Selected Package:- ${myPackage} <br></br>Member ID:- {myID}{" "}
                    <br></br> Balance:- ${TotalProfit - totalWithdrawn}
                  </div>

                  <div class="mt-4 mb-4 card-body">
                    <h5 class="card-title">Upgrade Package</h5>
                    <div class="client-upgrade-package d-flex flex-row mb-3">
                      <button
                        onClick={() => UpgradePackage(100)}
                        class="btn p-2"
                      >
                        $100
                      </button>
                      <button
                        onClick={() => UpgradePackage(250)}
                        class="btn p-2"
                      >
                        $250
                      </button>
                      <button
                        onClick={() => UpgradePackage(500)}
                        class="btn p-2"
                      >
                        $500
                      </button>
                      <button
                        onClick={() => UpgradePackage(1000)}
                        class="btn p-2"
                      >
                        $1000
                      </button>
                      <button
                        onClick={() => UpgradePackage(2500)}
                        class="btn p-2"
                      >
                        $2500
                      </button>
                      <button
                        onClick={() => UpgradePackage(5000)}
                        class="btn p-2"
                      >
                        $5000
                      </button>
                    </div>

                    <div
                      style={{ justifyContent: "center" }}
                      class="row g-3 mt-5"
                    >
                      <div class="col-auto">
                        <div
                          style={{
                            textAlign: "right",
                            fontSize: "1.3rem",
                            fontStyle: "italic",
                            fontWeight: "bold",
                            color: "black",
                            margin: "0 0",
                            color: "black",
                            textShadow: "silver 1px 1px 2px",
                          }}
                        >
                          Withdraw:{" "}
                        </div>
                      </div>
                      <div class="col-auto">
                        <input
                          style={{ backgroundColor: "#deeaff" }}
                          type="number"
                          class="form-control"
                          placeholder="Amount in $"
                          onChange={(e) => setWamount(e.target.value)}
                        ></input>
                      </div>
                      <div class="col-auto">
                        <button
                          type="submit"
                          class="upgrade-package-submit-button btn mb-3"
                          onClick={() => Withdraw(Wamount)}
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div
                style={{
                  margin: "2rem 4rem",
                  backgroundImage:
                    "linear-gradient(45deg, rgba(86, 126, 188, 0.83), #002d74)",
                }}
                className=" card p-5 text-center"
              >
                <div style={{ justifyContent: "center" }} class="row g-3 mt-2">
                  <div class="col-auto ">
                    <div
                      style={{
                        textAlign: "right",
                        fontSize: "1.3rem",
                        fontStyle: "italic",
                        fontWeight: "bold",
                        color: "black",
                        margin: "0 0",
                        color: "black",
                        textShadow: "silver 1px 1px 2px",
                      }}
                    >
                      Referral ID:-
                    </div>
                  </div>
                  <div class="col-auto">
                    <input
                      style={{ backgroundColor: "#deeaff" }}
                      type="number"
                      class="form-control"
                      placeholder="Referral ID"
                      onChange={(e) => setRefferal(parseInt(e.target.value))}
                    ></input>
                  </div>

                  <select
                    style={{
                      backgroundColor: "#deeaff",
                      margin: "1.4rem 10rem",
                      width: "75%",
                    }}
                    class="form-select text-dark"
                    aria-label="Default select example"
                    onChange={(e) =>
                      setSelectedPackage(parseInt(e.target.value))
                    }
                  >
                    <option selected>Select Package</option>
                    <option className="text-dark" value="100">
                      $ 100
                    </option>
                    <option className="text-dark" value="250">
                      $ 250
                    </option>
                    <option className="text-dark" value="500">
                      $ 500
                    </option>
                    <option className="text-dark" value="1000">
                      $ 1000
                    </option>
                    <option className="text-dark" value="2500">
                      $ 2500
                    </option>
                    <option className="text-dark" value="5000">
                      $ 5000
                    </option>
                  </select>
                  <div class="col-auto">
                    <button
                      onClick={() => {
                        JoinROI(refferal, selectedPackage);
                      }}
                      type="submit"
                      class="upgrade-package-submit-button btn mb-3"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
          {myID != 0 ? (
            <>
              <InfoGrid
                currency=" $"
                gridHeader="My Statistics"
                gridObject={{
                  "Daily Profit(0.5%)": MyDaily1, //
                  "Direct Referral Income": MyDirectIncome / 10 ** 6,
                  "ROI Level Income": roiLevelIncome,
                  "Total Balance": myBalance,
                  "Club 1": ClubInfos.club1,
                  "Club 2": ClubInfos.club2,
                  "Club 3": ClubInfos.club3,
                  "Total Earned from Club 1":
                    EarnedFromClubs.TotalEarnedFromClub1,
                  "Total Earned from Club 2":
                    EarnedFromClubs.TotalEarnedFromClub2,
                  "Total Earned from Club 3":
                    EarnedFromClubs.TotalEarnedFromClub3,
                  "Total Earned from clubs": totalEarnedFromClubs,
                  "Total Profit": TotalProfit,
                  "Total Team Business": MyTotalMatachingIncome, // total team worth
                  "Total Direct Business": totalTeamBusiness,
                  "Total Withdrawal": totalWithdrawn,
                  "My Club Total Business": yourClubIncome,
                }}
              />
              <InfoGrid
                gridHeader="Organization"
                currency=" "
                gridObject={{
                  "My Referral": InvitedPartners,
                  "My Team": teamWeight,
                  "My Club Level": club,
                }}
              />
            </>
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  );
};

export default ClientView;
