import { ReduxActionTypes } from "../types/product.types";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case ReduxActionTypes.PRODUCT_LIST_REQUEST:
      return { ...state, loading: true, products: [] };
    case ReduxActionTypes.PRODUCT_LIST_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case ReduxActionTypes.PRODUCT_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case ReduxActionTypes.PRODUCT_DETAILS_REQUEST:
      return { ...state, loading: true, ...state };
    case ReduxActionTypes.PRODUCT_DETAILS_SUCCESS:
      return { ...state, loading: false, product: action.payload };
    case ReduxActionTypes.PRODUCT_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
