import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import app_config from "../config";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import toast, { Toaster } from "react-hot-toast";
import { LoadingButton } from "@mui/lab";

const Crud = () => {
  const url = app_config.api_url;
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    fetch(url + "/crud/getall")
      .then((res) => res.json())
      .then((data) => {
        console.table(data);
        setDataList(data);
        setLoading(false);
      });
  };

  const saveData = (formdata, { isSubmitting, setSubmitting, resetForm }) => {
    setSubmitting(true);
    fetch(url + "/crud/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        if (res.status === 200) {
          fetchData();
          setSubmitting(false);
          resetForm();
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  const deleteData = (id) => {
    toast.promise(
      fetch(url + "/crud/delete/" + id, {
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
        loading: "Saving...",
        success: <b>Item Deleted!</b>,
        error: <b>Some Error Occured!</b>,
      }
    );
  };

  const notify = (cb) => {
    toast.promise(cb(), {
      loading: "Saving...",
      success: <b>Settings saved!</b>,
      error: <b>Could not save.</b>,
    });
  };

  const formObj = {
    title: "",
    text: "",
  };

  const displayData = () => {
    if (!loading) {
      return dataList.map((obj, index) => (
        <tr key={obj._id}>
          <td>{obj.title}</td>
          <td>{obj.text}</td>
          <td>{new Date(obj.created).toLocaleDateString()}</td>
          <td>
            <Button
              onClick={(e) => deleteData(obj._id)}
              variant="contained"
              color="error"
            >
              <DeleteIcon />
            </Button>
          </td>
          <td>
            <Button variant="contained" color="primary">
              <EditIcon />
            </Button>
          </td>
        </tr>
      ));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Toaster />
      <h1>Crud App</h1>
      <Formik initialValues={formObj} onSubmit={saveData}>
        {({ values, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <Card>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item sm={5} xs={12}>
                    <TextField
                      label="Title"
                      id="title"
                      value={values.title}
                      onChange={handleChange}
                      className="w-100"
                    />
                  </Grid>
                  <Grid item sm={5} xs={12}>
                    <TextField
                      label="Text"
                      id="text"
                      value={values.text}
                      onChange={handleChange}
                      className="w-100"
                    />
                  </Grid>
                  <Grid item sm={2} xs={12}>
                    <LoadingButton
                      className="w-100 h-100"
                      type="submit"
                      loading={isSubmitting}
                      loadingPosition="start"
                      startIcon={<SaveIcon />}
                      variant="contained"
                    >
                      Save
                    </LoadingButton>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </form>
        )}
      </Formik>
      <table className="table table-dark mt-5">
        <thead>
          <tr>
            <th>Title</th>
            <th>Text</th>
            <th>Added</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{displayData()}</tbody>
      </table>
    </Container>
  );
};

export default Crud;
