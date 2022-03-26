import { Delete, Edit, ExpandMore, ExpandMoreSharp } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Card,
  CardContent,
  Container,
  Fab,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import app_config from "../../config";

const ManageUser = () => {
  const url = app_config.api_url;
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch(url + "/user/getall")
      .then((res) => res.json())
      .then((data) => {
        console.table(data);
        setUserList(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteData = (id) => {
    toast.promise(
      fetch(url + "/user/delete/" + id, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.status === 200) {
            fetchData();
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
        }),
      {
        loading: "Deleting User...",
        success: <b>User Deleted!</b>,
        error: <b>Some Error Occured!</b>,
      }
    );
  };

  const displayData = () => {
    if (!loading) {
      return userList.map((obj, index) => (
        <Accordion key={obj._id}>
          <AccordionSummary expandIcon={<ExpandMoreSharp />}>
            <Typography fontWeight={600}>{obj.username}</Typography>
            {new Date(obj.created).toLocaleDateString()}
          </AccordionSummary>
          <AccordionDetails>
            <Fab
              onClick={(e) => deleteData(obj._id)}
              variant="extended"
              sx={{ background: "red", color: "white" }}
            >
              <Delete /> Delete
            </Fab>
          </AccordionDetails>
        </Accordion>
      ));
    }
  };

  return (
    <Container>
      <Toaster />

      <Card>
        <CardContent>{displayData()}</CardContent>
      </Card>
    </Container>
  );
};

export default ManageUser;
