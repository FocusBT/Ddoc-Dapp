import { Grid } from "@mui/material";
import React, { useEffect } from "react";

//images
import cow from "./images/cow.png";
import gold from "./images/gold.png";
import coin from "./images/coin.png";
import paper from "./images/money.png";
import card from "./images/card.png";
import mobile from "./images/mobile payment.png";
import crypto from "./images/crypto.png";

//animation
import Aos from "aos";
import "aos/dist/aos.css";

const EvolutionMoney = () => {
  useEffect(() => {
    Aos.init({
      duration: 600,
    });
  }, []);

  const style = {
    height: 100,
    marginRight: "50%",
  };

  const gridStyle = {
    mr: "5%",
  };

  const pStyle = { color: "white" };

  return (
    <Grid container sx={{ mb: "20%" }}>
      <Grid
        item
        md={12}
        sx={gridStyle}
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <h1
          style={{
            fontSize: 44,
            fontWeight: 600,
            color: "white",
            marginBottom: "10%",
          }}
        >
          EVOLUTION OF{" "}
          <span style={{ color: "#ff3753", fontSize: 55 }}>money.</span>
        </h1>
      </Grid>

      <Grid
        item
        md={1}
        sx={gridStyle}
        data-aos="fade-right"
        data-aos-offset="430"
        data-aos-easing="ease-in-sine"
      >
        <img src={cow} style={style} alt="Cow" />
        <p style={pStyle}>Barter</p>
      </Grid>

      <Grid
        item
        md={1}
        sx={gridStyle}
        data-aos="fade-right"
        data-aos-offset="400"
        data-aos-easing="ease-in-sine"
      >
        <img src={gold} style={style} alt="gold" />
        <p style={pStyle}>Metals</p>
      </Grid>

      <Grid
        item
        md={1}
        sx={gridStyle}
        data-aos="fade-right"
        data-aos-offset="350"
        data-aos-easing="ease-in-sine"
      >
        <img src={coin} style={style} alt="coin" />
        <p style={pStyle}>Coins</p>
      </Grid>

      <Grid
        item
        md={1}
        sx={gridStyle}
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        <img src={paper} style={style} alt="Money" />
        <p style={pStyle}>Paper Money</p>
      </Grid>

      <Grid
        item
        md={1}
        sx={gridStyle}
        data-aos="fade-right"
        data-aos-offset="250"
        data-aos-easing="ease-in-sine"
      >
        <img src={card} style={style} alt="Credit card" />
        <p style={pStyle}>Plastic Cards</p>
      </Grid>

      <Grid
        item
        md={1}
        sx={gridStyle}
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-easing="ease-in-sine"
      >
        <img src={mobile} style={style} alt="e-payment" />
        <p style={pStyle}>Mobile Payments</p>
      </Grid>

      <Grid
        item
        md={1}
        sx={gridStyle}
        data-aos="fade-right"
        data-aos-offset="150"
        data-aos-easing="ease-in-sine"
      >
        <img src={crypto} style={style} alt="Crypto" />
        <p style={pStyle}>Digital Currency</p>
      </Grid>
    </Grid>
  );
};

export default EvolutionMoney;
