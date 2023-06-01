import React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 1.7,
};

const ChangeDataDisplayed = (props) => {
  const [newAddress, setNewAddress] = React.useState();
  const [newValue, setNewValue] = React.useState();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeData = async (confirmation) => {
    if (confirmation === "owner") {
      await props.contract.changeOwner(newAddress);
    } else if (confirmation === "poolowner") {
      await props.contract.claimPoolOwnerTax();
    } else if (confirmation === "poolcore") {
      await props.contract.claimCoreTeamTax();
    } else if (confirmation === "1%") {
      await props.contract.Daily1Per();
    } else if (confirmation === "Send_Dummy_Funds") {
      var temp = "1000";
      temp = temp + "00000000000000000000";
      await props.contract.mint(newValue, temp);
    }
  };

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="secondary">
        <span style={{ color: "white", fontSize: "90%", marginRight: "5%" }}>
          click
        </span>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="wallet-model"
        aria-describedby="connect-meta-mask"
      >
        <Box sx={style}>
          <Stack
            component="form"
            sx={{
              width: "400",
            }}
            spacing={2}
            noValidate
            autoComplete="off"
          >
            {props.type !== "poolowner" &&
            props.type !== "poolcore" &&
            props.type !== "1%" ? (
              <h3
                style={{
                  color: "grey",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Change Admin
              </h3>
            ) : (
              <h3
                style={{
                  color: "grey",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Claim Tax
              </h3>
            )}

            {props.type !== "poolowner" &&
            props.type !== "poolcore" &&
            props.type !== "1%" ? (
              <TextField
                id="value-id"
                label="enter desired value"
                variant="filled"
                required
                color="secondary"
                onChange={(e) => {
                  if (props.type === "owner") {
                    setNewAddress(e.target.value);
                  } else if (props.type === "Send_Dummy_Funds") {
                    setNewValue(e.target.value);
                  }
                }}
              />
            ) : (
              <></>
            )}

            <Button
              onClick={(e) => {
                if (props.type === "owner") {
                  handleChangeData("owner");
                } else if (props.type === "poolowner") {
                  handleChangeData("poolowner");
                } else if (props.type === "poolcore") {
                  handleChangeData("poolcore");
                } else if (props.type === "1%") {
                  handleChangeData("1%");
                } else if (props.type === "Send_Dummy_Funds") {
                  handleChangeData("Send_Dummy_Funds");
                }
              }}
            >
              {props.type !== "poolowner" && props.type !== "poolcore" ? (
                <>Confirm</>
              ) : (
                <>Claim</>
              )}
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default ChangeDataDisplayed;
