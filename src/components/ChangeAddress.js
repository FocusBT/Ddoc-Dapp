import React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import contractContext from "../context/contractContext";


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



const ChangeAddress = (props) => {
  const [newAddress, setNewAddress] = React.useState();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChangeAddress =  async(confirmation) => {
    
    if(confirmation === 1){
      props.contract.methods
      .changeOwnerAddress(newAddress)
      .send({ from: props.account[0] });
    }else if(confirmation === 2){
      props.contract.methods
        .changeAdminAddress(newAddress)
        .send({ from: props.account[0] });
    }
  }

  return (
    <div>
      <Button onClick={handleOpen} variant="contained" color="secondary">
        <span style={{ color: "white", fontSize: "90%", marginRight: "5%" }}>
          Change {props.type} Address
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
            <h3
              style={{
                color: "grey",
                display: "flex",
                justifyContent: "center",
              }}
            >
              CHANGE ADDRESS
            </h3>

            <TextField
              id="address-id"
              label="Address"
              variant="filled"
              required
              color="secondary"
              onChange={(e)=> {setNewAddress(e.target.value);}}
            />

            <Button
              onClick={(e)=>{
                if(props.type === "owner"){
                  handleChangeAddress(1)
                }else if(props.type === "admin"){
                  handleChangeAddress(2);
                }
              }}
            >
              Send
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default ChangeAddress;
