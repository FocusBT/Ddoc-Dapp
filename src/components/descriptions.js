import { Grid } from "@mui/material";
import React, { useEffect } from "react";

//animation
import Aos from "aos";
import "aos/dist/aos.css";

//images
import decentral from "./images/decentralized.png";
import bitcoin from "./images/bitcoin.png";
import smart from "./images/smart.png";
import work from "./images/work.png";
import warehouse from "./images/warehouse.png";
import coin2 from "./images/coin2.png";
import team from "./images/team.png";
import trade from "./images/trade.png";
import table from "./images/table.png";
import logo from "./images/logo.png";
import announce from "./images/announce.png";
import eth from "./images/eth.png";
import avatar from "./images/avatar.png";
import support from "./images/support.png";
import support2 from "./images/support v2.png";
import person from "./images/person.png";
import money2 from "./images/money2.jpg";

//videos
import video1 from "./videos/v1.mp4";
import video2 from "./videos/v2.mp4";
import video3 from "./videos/v3.mp4";

import PhonelinkLockIcon from "@mui/icons-material/PhonelinkLock";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import HubIcon from "@mui/icons-material/Hub";

//Attribute
//<a href='https://pngtree.com/so/coworking'>coworking png from pngtree.com/</a>
//Photo by Karolina Grabowska: https://www.pexels.com/photo/crop-man-counting-dollar-banknotes-4386431/

const Descriptions = () => {
  useEffect(() => {
    Aos.init({
      duration: 900,
    });
  }, []);

  const pStyle = {
    fontSize: 33,
    color: "white",
    backgroundColor: "rgba(256, 256, 256, 0.1)",
    padding: 16,
    borderRadius: 10,
    margin: "5%",
  };

  const h1Style = {
    fontSize: 44,
    fontWeight: 600,
    color: "white",
    marginBottom: "10%",
    marginTop: "10%",
  };

  const capsuleStyle = {
    ...pStyle,
    fontWeight: "bold",
    padding: 10,
    fontSize: 44,
    borderRadius: 25,
    width: "50%",
    backgroundColor: "red",
  };

  return (
    <Grid container sx={{ mb: "20%" }}>
      <Grid item md={12} data-aos="fade-right" data-aos-duration="1200">
        <h1 style={h1Style}>
          New Generation Asset{" "}
          <span style={{ color: "#ff3753", fontSize: 55 }}>Platform.</span>
        </h1>
      </Grid>

      <Grid item md={12} rtl>
        <img
          src={decentral}
          alt={"Decentralized"}
          data-aos="fade-up"
          data-aos-duration="3000"
        />
      </Grid>

      <Grid item md={12} data-aos="fade-up" data-aos-duration="1200">
        <p style={{ ...pStyle, padding: 26 }}>
          There is no centralised control or additional third-party hardware
          facilities required for blockchain technology. Every node, with the
          exception of the self-contained blockchain itself, implements
          information self-verification, transfer, and management through
          distributed accounting and storage. The most obvious and crucial
          aspect of blockchain is decentralisation.
        </p>
      </Grid>

      <Grid item md={3}></Grid>
      <Grid item md={6} data-aos="fade-right" data-aos-duration="1200">
        <h1 style={h1Style}>100% Decentralized System</h1>
      </Grid>
      <Grid item md={3}></Grid>

      <Grid item md={6} data-aos="fade-right" data-aos-duration="1200">
        <p style={pStyle}>Blockchain Tech & Decentralization</p>
      </Grid>
      <Grid item md={6} data-aos="fade-right" data-aos-duration="700">
        <p style={pStyle}>Instant Transactions to Your wallet.</p>
      </Grid>

      <Grid item md={3}></Grid>
      <Grid item md={6} data-aos="fade-right" data-aos-duration="1200">
        <p style={pStyle}>
          <PhonelinkLockIcon fontSize={"large"} /> 100% Safe & Secure
        </p>
      </Grid>
      <Grid item md={3}></Grid>

      <Grid item md={3}></Grid>
      <Grid item md={3} data-aos="fade-right" data-aos-duration="1200">
        <p style={pStyle}>
          <HubIcon fontSize="large" /> Decentralized
        </p>
      </Grid>
      <Grid item md={3} data-aos="fade-right" data-aos-duration="1200">
        <p style={pStyle}>
          <PersonOffIcon fontSize="large" /> No Admin
        </p>
      </Grid>
      <Grid item md={3}></Grid>

      <Grid
        item
        md={6}
        sx={{ mt: 10 }}
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <img src={bitcoin} alt="bitcoin" />
      </Grid>
      <Grid
        item
        md={6}
        sx={{ mt: 10 }}
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <p style={{ ...pStyle, padding: 36, fontSize: 23 }}>
          <ul>
            <li>
              Decentralized entirely No owner, No Admin, No hierarchy system And
              No back office.
            </li>
            <li>
              Fully automatic, No human control 100% openness each transaction
              is verifiable.
            </li>
            <li>No Edit & Switch Plans & Rules Cannot Be Modified.</li>
            <li>Scams proof that no one can steal our money.</li>
            <li>
              Blockchain Cannot Be Stopped by any Government of the world.
            </li>
            <li>
              Simple UI and anyone can do this using his/her smartphone, laptop
              or PC.
            </li>
          </ul>
        </p>
      </Grid>

      <Grid
        item
        md={6}
        sx={{ mt: 10 }}
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <img
          src={smart}
          alt="Smart Contract"
          style={{ marginTop: "20%", height: 500 }}
        />
      </Grid>
      <Grid item md={6} sx={{ mt: 10 }}>
        <h3 style={h1Style} data-aos="fade-up" data-aos-duration="1200">
          Smart Contract
        </h3>

        <p
          style={{ ...pStyle, padding: 36, fontSize: 23 }}
          data-aos="fade-up"
          data-aos-duration="900"
        >
          Smart contracts help you exchange property, shares, or anything of
          value in a transparent, conflict-free way
        </p>

        <p
          style={{ ...pStyle, padding: 36, fontSize: 23 }}
          data-aos="fade-up"
          data-aos-duration="700"
        >
          A smart contract, like any contract, establishes the terms of an
          agreement. But unlike a traditional contract, a smart contract terms
          are executed as code running on a blockchain like Ethereum. Smart
          contracts allow developers to build apps that take advantage of
          blockchain security, reliability, and accessibility while offering
          sophisticated peer to peer functionality everything from loans and
          insurance to logistics and gaming.
        </p>
      </Grid>

      <Grid
        item
        md={6}
        sx={{ mt: 10 }}
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <img
          src={work}
          alt="Workspace"
          style={{ marginTop: "10%", height: 400 }}
        />
      </Grid>
      <Grid
        item
        md={6}
        sx={{
          mt: 10,
          padding: 6,
          borderRadius: 3,
          backgroundImage: "linear-gradient(45deg, black, purple)",
        }}
        data-aos="fade-left"
        data-aos-duration="1200"
      >
        <h3 style={{ ...h1Style, color: "cyan" }}>A Gateway to Success</h3>

        <h3 style={h1Style}>CREATE A LIFETIME ACCOUNT WITH US</h3>

        <h3 style={{ ...h1Style, fontWeight: "bold" }}>
          Starting with 100$ Package
        </h3>
      </Grid>

      <Grid item md={3}></Grid>
      <Grid
        item
        md={3}
        sx={{ mt: "20%" }}
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <p style={capsuleStyle}>$100</p>
        <p style={capsuleStyle}>$250</p>
        <p style={capsuleStyle}>$500</p>
        <p style={capsuleStyle}>$1000</p>
        <p style={capsuleStyle}>$2500</p>
        <p style={capsuleStyle}>$5000</p>
      </Grid>
      <Grid
        item
        md={6}
        sx={{
          mt: 10,
          padding: 6,
        }}
        data-aos="fade-left"
        data-aos-duration="1200"
      >
        <h1 style={{ ...h1Style, fontSize: 70 }}>Joining Packages</h1>

        <img
          src={warehouse}
          alt="delivery"
          style={{ marginTop: "10%", height: 400 }}
          data-aos="fade-left"
          data-aos-duration="1200"
        />
      </Grid>

      <Grid
        item
        md={8}
        sx={{ mt: "10%" }}
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <img src={logo} style={{ marginTop: "-10%", width: 400 }} />
        <p style={{ ...pStyle, marginTop: "0%", padding: 36, fontSize: 23 }}>
          ROI on ROI for example you sponsor Aryan with $ 100 package Aryan get
          0.50 % daily means $0.5 every day you get 50 % on Aryan daily ROI
          income you get $0.25 everyday
        </p>
      </Grid>
      <Grid
        item
        md={4}
        sx={{
          mt: 10,
          padding: 6,
        }}
        data-aos="fade-left"
        data-aos-duration="1200"
      >
        <img
          src={coin2}
          alt="coin v2"
          style={{ marginTop: "10%", height: 400 }}
        />
      </Grid>

      <Grid item md={12}>
        <h1
          style={{
            ...h1Style,
            fontSize: 50,
            padding: 36,
            marginBottom: 5,
            backgroundColor: "rgba(128,0,128,0.2)",
          }}
          data-aos="zoom-out"
          data-aos-duration="1200"
        >
          DIVIDE $100 IN 2 POOLS & 3 CLUBS & REST AMOUNT IN SMART CONTRACT
        </h1>
      </Grid>
      <Grid item md={7} data-aos="zoom-out" data-aos-duration="1200">
        <p
          style={{
            ...pStyle,
            fontSize: 33,
            padding: 36,
          }}
        >
          2 % in first pool owner
          <br />2 % in second pool core team
        </p>
        <p style={{ ...pStyle, padding: 36, fontSize: 33 }}>
          ROI on ROI for example you sponsor Aryan with $ 100 package Aryan get
          0.50 % daily means $0.5 every day you get 50 % on Aryan daily ROI
          income you get $0.25 everyday
        </p>
      </Grid>
      <Grid
        item
        md={4}
        sx={{
          mt: 10,
          padding: 6,
        }}
        data-aos="zoom-out"
        data-aos-duration="1200"
      >
        <img src={team} alt="team" style={{ height: 400 }} />
      </Grid>
      <Grid item md={12} data-aos="zoom-out" data-aos-duration="1200">
        <p style={{ ...pStyle, padding: 36, fontSize: 33 }}>
          Each month 10 members who will do maximum direct business will be
          selected for the core team and they will be awarded with 2% reward
          equally of the all turnover done in that month additionally.
        </p>
      </Grid>

      <Grid
        item
        md={7}
        sx={{ mt: 10 }}
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <img
          src={trade}
          alt="referral"
          style={{ marginTop: "10%", height: 400 }}
        />
      </Grid>
      <Grid
        item
        md={5}
        sx={{
          mt: 10,
          padding: 6,
          borderRadius: 3,
        }}
        data-aos="fade-right"
        data-aos-duration="700"
      >
        <h1 style={h1Style}>DIRECT REFFERAL INCOME</h1>

        <h3 style={{ ...h1Style, fontSize: 100, fontWeight: "bold" }}>5%</h3>
      </Grid>

      <Grid item md={6} data-aos="fade-right" data-aos-duration="1200">
        <video
          src={video1}
          controls
          loop
          style={{ marginTop: "25%", height: 300 }}
        />
      </Grid>
      <Grid item md={6} data-aos="fade-left" data-aos-duration="1200">
        <video
          src={video3}
          controls
          loop
          style={{ marginTop: "25%", height: 300 }}
        />
      </Grid>
      <Grid item md={12} data-aos="fade-up" data-aos-duration="1200">
        <video
          src={video2}
          controls
          autoplay
          loop
          style={{ marginTop: "5%", width: "90%" }}
        />
      </Grid>

      <Grid item md={12} data-aos="fade-out" data-aos-duration="1200">
        <img
          src={table}
          alt="table"
          style={{ marginTop: "10%", width: "90%" }}
        />
      </Grid>

      <Grid item md={4} data-aos="zoom-in-right" data-aos-duration="1200">
        <img
          src={eth}
          alt="ethereum"
          style={{ marginTop: "20%", marginBottom: 0, height: "50%" }}
        />
      </Grid>
      <Grid item md={4} data-aos="fade-up" data-aos-duration="1200">
        <h1
          style={{
            ...h1Style,
            fontSize: 70,
            marginTop: "50%",
            marginBottom: 0,
          }}
        >
          Special Note
        </h1>
      </Grid>
      <Grid item md={4} data-aos="zoom-in-left" data-aos-duration="1200">
        <img
          src={announce}
          alt="announce"
          style={{ marginTop: "20%", marginBottom: 0, height: "50%" }}
        />
      </Grid>
      <Grid item md={12} data-aos="fade-up" data-aos-duration="1200">
        <p
          style={{
            ...pStyle,
            marginTop: "-5%",
            padding: 36,
            fontSize: 44,
            backgroundColor: "rgba(0,100,100,0.2)",
          }}
        >
          We have 20 level for ROI income on ROI for open 2 level 1 direct
          compulsory and open all 20 level for 10 direct compulsory .
        </p>
      </Grid>

      <Grid item md={12} data-aos="fade-left" data-aos-duration="1200">
        <h1
          style={{
            ...h1Style,
            borderRadius: 15,
            padding: 36,
            backgroundColor: "rgba(0,100,100,0.2)",
            marginBottom: 0,
          }}
        >
          FIRST YOU SELECT{" "}
          <span style={{ color: "#ff3753", fontSize: 55 }}>
            $100 PACKAGE ONLY
          </span>
        </h1>

        <h3
          style={{ ...h1Style, fontSize: 30, marginTop: "2%", paddingLeft: 36 }}
        >
          In 100 package you get 0.5 % daily till amount 200 %
        </h3>
      </Grid>
      <Grid item md={3} data-aos="fade-left" data-aos-duration="1200">
        <h3
          style={{
            ...h1Style,
            backgroundColor: "rgba(256,256,256,0.1)",
            fontSize: 50,
            fontWeight: "bold",
            marginTop: "0%",
            padding: 26,
            borderRadius: 10,
          }}
        >
          CLUB ONE
        </h3>
      </Grid>
      <Grid item md={8} data-aos="fade-left" data-aos-duration="1200">
        <img
          src={avatar}
          alt="avatar"
          style={{ marginLeft: "5%", height: 100 }}
        />
      </Grid>
      <Grid item md={12} data-aos="fade-left" data-aos-duration="1200">
        <p
          style={{
            ...pStyle,
            padding: 46,
            fontSize: 43,
            marginLeft: 0,
          }}
        >
          <ul>
            <li>To achieve club 1 income self id $1000</li>
            <li>Team volume$ 20000</li>
            <li>Total team size 50 persons.</li>
          </ul>
        </p>
      </Grid>

      <Grid item md={3} data-aos="fade-left" data-aos-duration="1200">
        <h3
          style={{
            ...h1Style,
            backgroundColor: "rgba(256,256,256,0.1)",
            fontSize: 50,
            fontWeight: "bold",
            marginTop: "0%",
            padding: 26,
            borderRadius: 10,
          }}
        >
          CLUB TWO
        </h3>
      </Grid>
      <Grid item md={8} data-aos="fade-left" data-aos-duration="1200">
        <img
          src={avatar}
          alt="avatar"
          style={{ marginLeft: "5%", height: 100 }}
        />
        <img
          src={avatar}
          alt="avatar"
          style={{ marginLeft: "5%", height: "20%" }}
        />
      </Grid>
      <Grid item md={12} data-aos="fade-left" data-aos-duration="1200">
        <p
          style={{
            ...pStyle,
            padding: 46,
            fontSize: 43,
            marginTop: "-30%",
            marginLeft: 0,
          }}
        >
          <ul>
            <li>To achieve club 2 income self I’d $ 1000</li>
            <li>Team volume $ 50000</li>
            <li>Total team size 200 persons.</li>
          </ul>
        </p>
      </Grid>

      <Grid item md={4} data-aos="fade-left" data-aos-duration="1200">
        <h3
          style={{
            ...h1Style,
            backgroundColor: "rgba(256,256,256,0.1)",
            fontSize: 50,
            fontWeight: "bold",
            marginTop: "0%",
            padding: 26,
            borderRadius: 10,
          }}
        >
          CLUB THREE
        </h3>
      </Grid>
      <Grid item md={7} data-aos="fade-left" data-aos-duration="1200">
        <img
          src={avatar}
          alt="avatar"
          style={{ marginLeft: "5%", height: 100 }}
        />
        <img
          src={avatar}
          alt="avatar"
          style={{ marginLeft: "5%", height: 100 }}
        />
        <img
          src={avatar}
          alt="avatar"
          style={{ marginLeft: "5%", height: 100 }}
        />
      </Grid>
      <Grid item md={12} data-aos="fade-left" data-aos-duration="1200">
        <p
          style={{
            ...pStyle,
            padding: 46,
            fontSize: 43,
            marginLeft: 0,
          }}
        >
          <ul>
            <li>To achieve club 3 income self I’d $ 2500</li>
            <li>Team volume $ 1,50,000</li>
            <li>Team size 500 persons.</li>
          </ul>
        </p>
      </Grid>

      <Grid
        item
        md={6}
        style={{ marginTop: "20%" }}
        data-aos="fade-right"
        data-aos-duration="1200"
      >
        <img
          src={support}
          alt="support"
          style={{ marginLeft: "5%", height: 200 }}
        />
      </Grid>
      <Grid
        item
        md={6}
        style={{ marginTop: "20%" }}
        data-aos="fade-left"
        data-aos-duration="1200"
      >
        <img
          src={support2}
          alt="support 2"
          style={{ marginLeft: "5%", height: 200 }}
        />
      </Grid>
      <Grid item md={12} data-aos="zoom-in" data-aos-duration="1200">
        <h1
          style={{
            ...h1Style,
            borderRadius: 15,
            padding: 36,
            backgroundColor: "rgba(0,100,100,0.2)",
            marginBottom: 0,
            marginTop: "5%",
          }}
        >
          After getting{" "}
          <span style={{ color: "#ff3753", fontSize: 55 }}>200 % ROI</span> and
          Working Income, You need to rebuy the package $100 PACKAGE ONLY
        </h1>
      </Grid>

      <Grid item md={6} data-aos="zoom-in-right" data-aos-duration="1200">
        <img src={logo} style={{ width: 400 }} alt="logo" />
        <img
          src={person}
          alt="person"
          style={{ marginTop: "-10%", width: 400 }}
        />
      </Grid>
      <Grid item md={6} data-aos="zoom-in-left" data-aos-duration="1200">
        <h1 style={{ ...h1Style, fontSize: 70, marginTop: "20%" }}>
          Thank You
        </h1>
        <img src={money2} alt="money2" />
      </Grid>
    </Grid>
  );
};

export default Descriptions;
