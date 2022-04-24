import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  styled,
  TextField,
  Typography,
  Checkbox,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import app_config from "../../config";
import Brand from "../brand";
import { Formik } from "formik";
import Swal from "sweetalert2";

const Login = () => {
  const CustomTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#4d0fe9",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#4d0fe9",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#4d0fe9",
      },
      "&:hover fieldset": {
        borderColor: "#4d0fe9",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#4d0fe9",
      },
    },
  });

  const url = app_config.api_url;
  const navigate = useNavigate();

  const loginForm = {
    email: "",
    password: "",
  };

  const loginSubmit = (formdata) => {
    // console.log(formdata);
    fetch(url + "/user/check-login", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            icon: "success",
            title: "Loggedin Successfully",
          }).then(() => {
            res.json().then((data) => {
              if (data.admin) {
                navigate("/admin");
              } else {
                navigate("/user");
              }
            });
          });
        } else if (res.status === 400) {
          Swal.fire({
            icon: "error",
            title: "OOOps!!",
            text: "Login failed",
          });
        }
      })
      .then((data) => console.log(data));
  };

  return (
    <div
      style={{
        background: "url(" + url + "/images/login_back.png) no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Card
          sx={{
            background: "url(" + url + "/images/login_card_back.jpg) no-repeat",
          }}
        >
          <CardContent sx={{ padding: "2rem" }}>
            <Brand>Brand Name</Brand>
            <h4 className="mt-4 text-center">Login Here</h4>

            <Formik initialValues={loginForm} onSubmit={loginSubmit}>
              {({ values, handleSubmit, handleChange }) => (
                <form onSubmit={handleSubmit}>
                  <CustomTextField
                    variant="standard"
                    label="Email"
                    type="email"
                    placeholder="your email here"
                    className="w-100 mt-4"
                    id="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                  <CustomTextField
                    variant="standard"
                    label="Password"
                    type="password"
                    placeholder="your password here"
                    className="w-100 mt-4"
                    id="password"
                    onChange={handleChange}
                    value={values.password}
                  />

                  <Checkbox />

                  <Button
                    type="submit"
                    className="w-100 mt-5"
                    variant="contained"
                    sx={{
                      background: "linear-gradient(to right, #5b4bff ,#fb8dff)",
                      borderRadius: "100px",
                      fontWeight: "700",
                    }}
                  >
                    Submit
                  </Button>
                </form>
              )}
            </Formik>

            <p>Forgot Password?</p>
            <Typography
              sx={{
                color: "gray",
                textAlign: "center",
                textDecoration: "none",
                marginTop: "10rem",
              }}
              onClick={(e) => navigate("/main/signup")}
            >
              Create your Account
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
};

export default Login;
