import { ReduxActionTypes } from "../types/product.types";
import axios from "axios";

// use async (dispatch) if redux-thunk in use
export const listProducts = () => async (dispatch) => {
  try {
    dispatch({
      type: ReduxActionTypes.PRODUCT_LIST_REQUEST,
    });
    const { data } = await axios.get("/api/v1/products");
    dispatch({
      type: ReduxActionTypes.PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ReduxActionTypes.PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// use async (dispatch) if redux-thunk in use
export const listProductDetail = (id) => async (dispatch) => {
  try {
    dispatch({
      type: ReduxActionTypes.PRODUCT_DETAILS_REQUEST,
    });
    const { data } = await axios.get(`/api/v1/products/${id}`);
    dispatch({
      type: ReduxActionTypes.PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ReduxActionTypes.PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
