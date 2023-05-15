import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// import querystring from 'query-string';

// Type for our state
export interface globalUiState {
    showCardViewInMobile: boolean,
    isEndOfProducts: boolean,
    minPrice: number | null,
    maxPrice: number | null,
    order_by: string | null,
    order: string | null,
    maxMultiplier: number,
    maxPricePercent: number,
    minPricePercent: number,
    showCatSwitcherMenu: boolean,
    isFromSearch: boolean,
    totalOrdersCount: number,
    showWhatsNew: boolean,
  }

const initialState: globalUiState = {
  showCardViewInMobile: false,
  isEndOfProducts: false,
  minPrice: null,
  maxPrice: null,
  order_by: null,
  order: null,
  maxMultiplier: 1,
  maxPricePercent: 100,
  minPricePercent: 0,
  showCatSwitcherMenu: false,
  isFromSearch: false,
  totalOrdersCount: 120000,
  showWhatsNew: true,
};

const globalUiSlice = createSlice({
  name: 'globalUiSlice',
  initialState,
  reducers: {
    toggleShowCardViewMobile: (state, action: PayloadAction<boolean>) => {
      state.showCardViewInMobile = action.payload;
      // console.log(action.payload);
    },
    changeWhatsNewBehavior: (state, action) => {
      state.showWhatsNew = action.payload;
      // console.log(action.payload);
    },
    changeFilterMinPrice: (state, action) => {
      state.minPrice = action.payload;
      // console.log(action.payload);
    },
    changeFilterMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
      // console.log(action.payload);
    },
    changeMaxPricePercent: (state, action) => {
      state.maxPricePercent = action.payload;
      // console.log(action.payload);
    },
    changeMinPricePercent: (state, action) => {
      state.minPricePercent = action.payload;
      // console.log(action.payload);
    },
    changeMaxMultiplier: (state, action) => {
      state.maxMultiplier = action.payload;
      // console.log(action.payload);
    },
    changeOrderBy: (state, action) => {
      state.order_by = action.payload;
      // console.log(action.payload);
    },
    changeOrder: (state, action) => {
      state.order = action.payload;
      // console.log(action.payload);
    },
    changeIsEndOfProducts: (state, action) => {
      state.isEndOfProducts = action.payload;
      // console.log(action.payload);
    },
    changeShowCatSwitcherMenu: (state, action) => {
      state.showCatSwitcherMenu = action.payload;
      // console.log(action.payload);
    },
    toggleShowCatSwitcherMenu: state => {
      state.showCatSwitcherMenu = !state.showCatSwitcherMenu;
      // console.log(action.payload);
    },
    changeIsFromSearch: (state, action) => {
      state.isFromSearch = action.payload;
      // console.log(action.payload);
    },
    clearFilter: state => {
      state.minPrice = null;
      state.maxPrice = null;
      state.order_by = null;
      state.order = null;
      state.minPricePercent = 0;
      state.maxPricePercent = 100;
      state.maxMultiplier = 1;
      // console.log(action.payload);
    },
  },
  // extraReducers: {
  //   [getTotalOrders.fulfilled.toString()]: (state: any, action: any) => {
  //     state.totalOrdersCount = action.payload;
  //   },
  //   [getTotalOrders.rejected.toString()]: (state: any) => {
  //     state.totalOrdersCount = 15001;
  //   },
  // },
  //   extraReducers: {
  //     // categories

  //     [getParentCatMeta.fulfilled]: (state, action) => {
  //       state.parentCatMeta = action.payload.parent_cat_info;
  //     },
  //     [getParentCatMeta.rejected]: state => {
  //       state.parentCatMeta = [];
  //     },
  //   },
});

export const {
  toggleShowCardViewMobile,
  changeFilterMinPrice,
  changeFilterMaxPrice,
  changeOrderBy,
  changeOrder,
  clearFilter,
  changeIsEndOfProducts,
  toggleShowCatSwitcherMenu,
  changeShowCatSwitcherMenu,
  changeMaxPricePercent,
  changeMaxMultiplier,
  changeIsFromSearch,
  changeMinPricePercent,
  changeWhatsNewBehavior,
} = globalUiSlice.actions;
export default globalUiSlice.reducer;
