import React, { useState, useEffect } from "react";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import Aos from "aos";
import "aos/dist/aos.css";

const InfoGrid = (props) => {
  const [smartContractInfo, setSmartContractInfo] = useState({});

  const gridStyle = {
    marginBottom: 5,
    marginTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
    props.gridObject
      ? setSmartContractInfo(props.gridObject)
      : setSmartContractInfo([]);
  }, [props.gridObject]);

  return (
    <div>
      <Container>
        <Card
          data-aos="zoom-out"
          style={{
            backgroundColor: "#002d74cc",
            minWidth: 300,
            borderRadius: "0.5rem",
            marginTop: 70,
            marginBottom: 100,
            marginRight: "12%",
            marginLeft: "12%",
            boxShadow: "inset black 0px 0px 20px 0px",
          }}
        >
          <CardContent
            sx={{
              fontSize: 14,
              fontWeight: 700,
              display: "flex",
              justifyContent: "center",
              boxShadow: "black 0px 0px 5px 0px",
              margin: "1rem",
            }}
          >
            <h2 style={{ fontSize: "2.5rem" }}>
              {props.gridHeader.toUpperCase()}
            </h2>
          </CardContent>

          {Object.keys(smartContractInfo).map((key) => {
            return (
              <Grid
                style={{
                  margin: "1rem 0 0 0",
                  paddingBottom: "2rem",
                  borderBottom: "2px solid #ffffff66",
                  borderBottomLeftRadius: "23px",
                }}
                key={key}
                container
                spacing={2}
                sx={gridStyle}
                data-aos="fade-up"
              >
                <Grid item xs={10} key={key + "key"}>
                  {key}
                </Grid>
                <Grid item xs={2} key={key + "value"}>
                  {typeof smartContractInfo[key] == "number"
                    ? smartContractInfo[key] + props.currency
                    : smartContractInfo[key]}
                </Grid>
              </Grid>
            );
          })}

          {props.gridButton ? (
            <CardActions sx={{ display: "flex" }}>
              <Button
                data-aos="fade-left"
                size="large"
                color={
                  props.gridButton.color ? props.gridButton.color : "secondary"
                }
                variant={
                  props.gridButton.variant ? props.gridButton.variant : "text"
                }
                sx={{
                  marginLeft: "auto",
                  marginRight: "8%",
                  fontSize: "110%",
                }}
                href={props.gridButton.link}
              >
                {props.gridButton.icon ? (
                  <props.gridButton.icon
                    sx={{
                      fill: props.gridButton.iconColor
                        ? props.gridButton.iconColor
                        : "#ffffff",
                      marginRight: "5%",
                    }}
                    fontSize="large"
                  />
                ) : (
                  <></>
                )}

                {props.gridButton.value}
              </Button>
            </CardActions>
          ) : (
            <></>
          )}
        </Card>
      </Container>
    </div>
  );
};

export default InfoGrid;
