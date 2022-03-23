import {
  Card,
  CardContent,
  Container,
  Skeleton,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import app_config from "../config";
import "./manage.css";

const Manage = () => {
  const url = app_config.api_url;
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch(url + "/crud/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDataList(data);
        setLoading(false);
      });
  };

  const showLoading = () => {
    return (
      <div className="myrow">
        {[1, 2, 3, 4].map((item) => (
          <motion.div className="mycard">
            <div className="mycard-body">
              <Skeleton variant="rectangular" width={200} height={50} />
              <Skeleton
                variant="rectangular"
                style={{ marginTop: "10px" }}
                width={200}
                height={20}
              />
            </div>
          </motion.div>
        ))}
      </div>
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const bringToTop = {
    focus: {
      borderRadius: "1.5rem",
      width: "50%",
    },
  };

  const displayData = () => {
    if (!loading)
      return dataList.map((item) => (
        <motion.div className="mycard" whileHover={{ scale: 1.05 }} variants={bringToTop}>
          <div className="mycard-body">
            <Typography variant="h4" component="div">
              {item.title}
            </Typography>
            <Typography variant="p" component="div">
              {item.text}
            </Typography>
          </div>
        </motion.div>
      ));
    else return showLoading();
  };

  return (
    <div className="manage-back">
      <Container>
        <h1 className="text-center">Manager</h1>
        <hr />
        <div className="myrow">{displayData()}</div>
      </Container>
    </div>
  );
};

export default Manage;
