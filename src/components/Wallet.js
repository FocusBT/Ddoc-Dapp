import React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

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

const Wallet = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <span style={{ color: "white", fontSize: "90%", marginRight: "5%" }}>
          Connect
        </span>
        <AccountBalanceWalletIcon />
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
            <h3
              style={{
                color: "grey",
                display: "flex",
                justifyContent: "center",
              }}
            >
              CONNECT WALLET
            </h3>

            <TextField
              id="wallet-address"
              label="Wallet Address"
              variant="filled"
              required
              color="secondary"
            />
            <TextField
              id="wallet-password"
              label="Password Token"
              variant="filled"
              type="password"
              required
              autoComplete="current-password"
              color="secondary"
            />

            <Button
              onClick={(e) => {
                /*Some action */
              }}
            >
              Submit
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default Wallet;
