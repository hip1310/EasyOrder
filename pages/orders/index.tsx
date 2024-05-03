// import { getImageUrl, getUser, isLoggedIn } from "../../util/commonFunctions";
import { useEffect, useState } from "react";
import { get } from "../../services/axiosAPI";
import moment from "moment";
import {
  AppBar,
  Box,
  Button,
  MenuItem,
  Modal,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import styles from "../styles.module.css";
import { useRouter } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";
import toast, { Toaster } from "react-hot-toast";

const Orders = () => {
  const [items, setItems] = useState<any>([
    {
      name: "coca-cola",
      price: 10,
      image: "images/coca-cola.webp",
      qty: 1,
      created_at: new Date(),
      status: "Created",
    },
  ]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();
  const [reminderModelVisibility, setReminderModelVisibility] =
    useState<boolean>(false);
  const [reminderValue, setReminderValue] = useState<string>();

  const handleLogout = async () => {
    // await logout()
    router.push("/");
  };

  const loadData = () => {
    // if (isLoggedIn()) {
    // const userData = getUser();
    // get(`/order/findAll?userId=${userData?.id}`).then((response) => {
    //   setItems(response?.data);
    // });
    // }

    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 3,
  };

  if (isLoading) {
    return <div className="text-center font-bold mt-20">Loading...</div>;
  } else {
    if (items && items?.length > 0) {
      return (
        <>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className={styles.dark_navbar}>
              <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                  Home
                </Typography>
                <Button color="inherit" onClick={() => router.push("/orders")}>
                  Orders
                </Button>
                <Button color="inherit" onClick={() => handleLogout()}>
                  Logout
                </Button>
              </Toolbar>
            </AppBar>
          </Box>
          <div className="mt-20 pb-24">
            {items?.map((element: any, index: any) => {
              return (
                <div
                  className="p-5 flex row"
                  key={index}
                  style={{ marginRight: 0 }}
                >
                  <div className="col-3">
                    <img
                      className="w-36 h-36 object-cover"
                      style={{ height: "200px" }}
                      src={element?.image}
                      alt={element?.name}
                    />
                  </div>
                  <div className="col-9">
                    <div className="ml-2.5">
                      <h3 className="text-xl font-bold">
                        <b>{element?.name}</b>
                      </h3>
                      <b>Price: ₹{element?.price * element?.qty}</b>
                      <p>
                        Qty : {element?.qty}
                        <br />
                        {element?.created_at && (
                          <>
                            Purchased date :{" "}
                            {moment(element?.created_at).format(
                              "MMM DD YYYY h:mm a"
                            )}
                          </>
                        )}
                        <br />
                        {element?.created_at && (
                          <>
                            Expected Delivery date :{" "}
                            {moment(element?.created_at).add(2, 'days').format(
                              "MMM DD YYYY"
                            )}
                          </>
                        )}
                        <br />
                        Status : {element?.status}
                      </p>
                      <div className="d-flex align-self-center">
                      {reminderValue && <p style={{paddingTop:"5px"}}>{reminderValue}</p>}<Button
                        variant="contained"
                        style={{
                          background: "#333",
                          width: "200px",
                          marginLeft: reminderValue && "30px",
                        }}
                        onClick={() => {
                          setReminderModelVisibility(true);
                        }}
                      >
                        {reminderValue ? "Change Reminder" : "Set Reminder"}
                      </Button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <Modal
            open={reminderModelVisibility}
            onClose={() => {
              setReminderModelVisibility(false);
            }}
          >
            <Box sx={modalStyle}>
              <div className="d-flex justify-content-between">
                <b className="text-xl">Set Reminder to order</b>
                <div
                  className="cursor-pointer"
                  role="button"
                  onClick={() => {
                    setReminderModelVisibility(false);
                  }}
                >
                  <CloseIcon />
                </div>
              </div>
              <hr className="mt-1" />

              <TextField type={"text"} />
              <Select defaultValue="Days" style={{ marginLeft: "10px" }}>
                <MenuItem value={"Days"}>Days</MenuItem>
                <MenuItem value={"Months"}>Months</MenuItem>
                <MenuItem value={"Years"}>Years</MenuItem>
              </Select>
              <Button
                variant="contained"
                style={{
                  background: "#333",
                  width: "200px",
                  marginLeft: "30px",
                  marginTop: "20px",
                }}
                onClick={() => {
                  toast.success("Remider set successfully");
                  setReminderValue("3 Months")
                  setReminderModelVisibility(false);
                }}
              >
                Save
              </Button>
            </Box>
          </Modal>
          <Toaster />
        </>
      );
    } else {
      return <div className="text-center font-bold mt-20">No Data found</div>;
    }
  }
};

export default Orders;
