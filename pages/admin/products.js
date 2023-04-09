import axios from "axios";import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useReducer, useState, useRef } from "react";
import { toast } from "react-toastify";
import Layout from "../../components/Layout";
import { getError } from "../../utils/error";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function reducer(state, action) {
  switch (action.type) {
    case "FETCH_REQUEST":
      return { ...state, loading: true, error: "" };
    case "FETCH_SUCCESS":
      return { ...state, loading: false, products: action.payload, error: "" };
    case "FETCH_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "CREATE_REQUEST":
      return { ...state, loadingCreate: true };
    case "CREATE_SUCCESS":
      return {
        ...state,
        loadingCreate: false,
        products: action.payload,
        error: "",
      };
    case "CREATE_FAIL":
      return { ...state, loadingCreate: false };
    case "DELETE_REQUEST":
      return { ...state, loadingDelete: true };
    case "DELETE_SUCCESS":
      return { ...state, loadingDelete: false, successDelete: true };
    case "DELETE_FAIL":
      return { ...state, loadingDelete: false };
    case "DELETE_RESET":
      return { ...state, loadingDelete: false, successDelete: false };
    case "UPLOAD_REQUEST":
      return { ...state, loadingUpload: true, errorUpload: "" };
    case "UPLOAD_SUCCESS":
      return {
        ...state,
        loadingUpload: false,
        errorUpload: "",
      };
    case "UPLOAD_FAIL":
      return { ...state, loadingUpload: false, errorUpload: action.payload };

    default:
      state;
  }
}
export default function AdminProdcutsScreen() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formValues, setFormValues] = useState({
    name: "",
    price: "",
    description: "",
    slug: " -" + Math.random(),
    category: "",
    image: "",
    countInStock: "",
    brand: "",
  });

  const [
    {
      loading,
      error,
      products,
      loadingCreate,
      successDelete,
      loadingDelete,
      loadingUpload,
    },
    dispatch,
  ] = useReducer(reducer, {
    loading: true,
    products: [],
    error: "",
  });
console.log(formValues)

  const createHandler = async (event) => {
    event.preventDefault();
    if (!window.confirm("Are you sure?")) {
      return;
    }
    try {
      dispatch({ type: "CREATE_REQUEST" });
      const { data } = await axios.post(`/api/admin/products`, formValues);
      dispatch({ type: "CREATE_SUCCESS", payload: data });
      toast.success("Product created successfully");
      handleClose()
    } catch (err) {
      dispatch({ type: "CREATE_FAIL" });
      toast.error(getError(err));
    }
  };

  const uploadHandler = async (e, imageField = "image") => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/upload`;
    try {
      dispatch({ type: "UPLOAD_REQUEST" });
      const {
        data: { signature, timestamp },
      } = await axios("/api/admin/cloudinary-sign");
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("signature", signature);
      formData.append("timestamp", timestamp);
      formData.append("api_key", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
      const { data } = await axios.post(url, formData);
      dispatch({ type: "UPLOAD_SUCCESS" });
      setFormValues({ image: data.secure_url });
      toast.success("File uploaded successfully");
    } catch (err) {
      dispatch({ type: "UPLOAD_FAIL", payload: getError(err) });
      toast.error(getError(err));
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch({ type: "FETCH_REQUEST" });
        const { data } = await axios.get(`/api/admin/products`);
        dispatch({ type: "FETCH_SUCCESS", payload: data });
      } catch (err) {
        dispatch({ type: "FETCH_FAIL", payload: getError(err) });
      }
    };

    if (successDelete) {
      dispatch({ type: "DELETE_RESET" });
    } else {
      fetchData();
    }
  }, [successDelete]);

  const deleteHandler = async (productId) => {
    if (!window.confirm("Are you sure?")) {
      return;
    }
    try {
      dispatch({ type: "DELETE_REQUEST" });
      const {data} = await axios.delete(`/api/admin/products/${productId}`);
      dispatch({ type: "DELETE_SUCCESS"});
      toast.success("Product deleted successfully");
    } catch (err) {
      dispatch({ type: "DELETE_FAIL" });
      toast.error(getError(err));
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  };
  return (
    <Layout title="Admin Products">
      <>
        <div className="grid md:grid-cols-4 md:gap-5">
          <div>
            <ul>
              <li>
                <Link href="/admin/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link href="/admin/orders">Orders</Link>
              </li>
              <li>
                <Link href="/admin/products">
                  <a className="font-bold">Products</a>
                </Link>
              </li>
              <li>
                <Link href="/admin/users">Users</Link>
              </li>
            </ul>
          </div>
          <div className="overflow-x-auto md:col-span-3">
            <div className="flex justify-between">
              <h1 className="mb-4 text-xl">Products</h1>
              {loadingDelete && <div>Deleting item...</div>}
              <button
                disabled={loadingCreate}
                onClick={handleOpen}
                className="primary-button"
              >
                {loadingCreate ? "Loading" : "Create"}
              </button>
            </div>
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div className="alert-error">{error}</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="border-b">
                    <tr>
                      <th className="px-5 text-left">ID</th>
                      <th className="p-5 text-left">NAME</th>
                      <th className="p-5 text-left">PRICE</th>
                      <th className="p-5 text-left">CATEGORY</th>
                      <th className="p-5 text-left">COUNT</th>
                      <th className="p-5 text-left">RATING</th>
                      <th className="p-5 text-left">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.length > 0 && products && products.map((product) => (
                      <tr key={product._id} className="border-b">
                        <td className=" p-5 ">
                          {product._id.substring(20, 24)}
                        </td>
                        <td className=" p-5 ">{product.name}</td>
                        <td className=" p-5 ">${product.price}</td>
                        <td className=" p-5 ">{product.category}</td>
                        <td className=" p-5 ">{product.countInStock}</td>
                        <td className=" p-5 ">{product.rating}</td>
                        <td className=" p-5 ">
                          <Link href={`/admin/product/${product._id}`}>
                            <a type="button" className="default-button">
                              Edit
                            </a>
                          </Link>
                          &nbsp;
                          <button
                            onClick={() => deleteHandler(product._id)}
                            className="default-button"
                            type="button"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
        <div style={{width:'1000px', height:'500px'}}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="md:col-span-3">
              {loading ? (
                <div>Loading...</div>
              ) : error ? (
                <div className="alert-error">{error}</div>
              ) : (
                <ValidatorForm onSubmit={createHandler}>
                  <TextValidator
                  fullWidth
                    label="Name"
                    onChange={handleInputChange}
                    name="name"
                    value={formValues.name}
                    validators={["required"]}
                    errorMessages={["Name is required"]}
                  />
                  <br/>
                  <TextValidator
                    label="Slug"
                    fullWidth
                    onChange={handleInputChange}
                    name="slug"
                    value={formValues.slug}
                    validators={["required"]}
                    errorMessages={["Slug is required"]}
                  />
                  <br/>
                  <TextValidator
                    label="Price"
                    fullWidth
                    onChange={handleInputChange}
                    name="price"
                    type="number"
                    value={formValues.price}
                    validators={["required"]}
                    errorMessages={["Price is required"]}
                  />
                  <br/>
                  <TextValidator
                    label="Description"
                    fullWidth
                    onChange={handleInputChange}
                    name="description"
                    value={formValues.description}
                    validators={["required"]}
                    errorMessages={["Description is required"]}
                  />
                  <br/>
                  <TextValidator
                    label="Category"
                    fullWidth
                    onChange={handleInputChange}
                    name="category"
                    value={formValues.category}
                    validators={["required"]}
                    errorMessages={["Category is required"]}
                  />
                  <br/>
                  <TextValidator
                    label="Brand"
                    fullWidth
                    onChange={handleInputChange}
                    name="brand"
                    value={formValues.brand}
                    validators={["required"]}
                    errorMessages={["Brand is required"]}
                  />
                  <br/>
                  <TextValidator
                    label="CountInStock"
                    onChange={handleInputChange}
                    name="countInStock"
                    type="number"
                    fullWidth
                    value={formValues.countInStock}
                    validators={["required"]}
                    errorMessages={["CountInStock is required"]}
                  />
                  <br/>
                  <TextValidator
                    label="Image Url"
                    onChange={handleInputChange}
                    value={formValues.image}
                    name="image"
                    fullWidth
                    validators={["required"]}
                    errorMessages={["Image Url is required"]}
                  />
  
                  <label htmlFor="imageFile">Upload image</label>
                  <TextValidator
                    type="file"
                    fullWidth
                    validators={["required"]}
                    errorMessages={["Product image is required"]}
                    id="imageFile"
                    onChange={uploadHandler}
                  />
                  {loadingUpload && <div>Uploading....</div>}
                  <br/>
                  <Button type="submit" color="primary" variant="contained">
                    Submit
                  </Button> &nbsp;&nbsp;
                  <Button type="submit" color="primary" onClick={handleClose} variant="contained">
                    Cancel
                  </Button>
                </ValidatorForm>
              )}
            </div>
          </Box>
        </Modal>
        </div>
      </>
    </Layout>
  );
}

AdminProdcutsScreen.auth = { adminOnly: true };
