"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "@components/AuthContext";
import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import styles from "../styles.module.css";
import Input from "@/components/Input";
import { useForm } from "react-hook-form";
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


const blue = {
  100: '#DAECFF',
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
  600: '#0072E5',
  900: '#003A75',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const Textarea = styled(BaseTextareaAutosize)(
  ({ theme }) => `
  box-sizing: border-box;
  width: 320px;
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px 12px 0 12px;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    outline: 0;
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`,
);


export default function Home() {
  const router = useRouter();

  type AddVendors = {
    email: string;
    password: string;
  }

  const handleLogout = async () => {
    // await logout()
    router.push("/");
  };


  const { handleSubmit, control, formState } = useForm<AddVendors>();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={styles.dark_navbar}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Admin Panel
            </Typography>
            <Button color="inherit" onClick={() => handleLogout()}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div style={{ marginLeft: "10px", marginRight: "10px" }}>
        <br />
        <h3>
          <b><ArrowBackIcon onClick={() => {
              router.push("/vendors");
            }}/>Add Vendor</b>
        </h3>
        <br />

        <div className="row">
          <div className="col-6">
            <Input control={control}
              formState={formState} name="name" label="Name" type="text" />
          </div>
          <div className="col-6">
            <Input control={control}
              formState={formState} name="Contact No" label="Contact No" type="text" />
          </div>
        </div>
        <div className="row" style={{marginTop:"20px"}}>
          <div className="col-6">
            <Input control={control}
              formState={formState} name="email" label="Email" type="text" />
          </div>
          <div className="col-6">
            <Textarea aria-label="minimum height" minRows={3} sx={{ width: "100%" }} placeholder="Address" />
          </div>
        </div>
        <div style={{textAlign:"center", marginTop:"50px"}}>
        <Button
            variant="contained"
            style={{ background: "#333"}}
            onClick={() => {
              router.push("/view-vendor-details");
            }}
          >
            Save
          </Button>
        </div>
        
      </div>
    </>
  );
}
