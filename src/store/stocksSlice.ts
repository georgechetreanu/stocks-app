import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "./store";
import { AppConfig, StocksTimeSeries, StocksPrices } from "../config/AppConfig";

const stockTimeSeriesOptions = AppConfig.STOCKS_TIME_SERIES;

export interface StocksState {
  data: any;
  loading: boolean;
  timeSeries: StocksTimeSeries[];
  prices: StocksPrices[];
  timeSeriesOpt: string;
  priceOptions: string[];
  showAverage: boolean;
  startDate: string;
  endDate: string;
}

const initialState: StocksState = {
  data: null,
  loading: false,
  timeSeries: [...AppConfig.STOCKS_TIME_SERIES],
  prices: [...AppConfig.STOCKS_TIME_SERIES_PRICES],
  timeSeriesOpt: AppConfig.STOCKS_TIME_SERIES[1].id,
  priceOptions: [...AppConfig.STOCKS_TIME_SERIES_PRICES.map(item => item.name)],
  showAverage: false,
  startDate: (new Date()).toISOString(),
  endDate: (new Date()).toISOString()
};

export const stocksSlice = createSlice({
  name: "stocks",
  initialState,
  reducers: {
    stockDataLoading: (state) => { state.loading = true },
    stockDataLoaded: (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.data = action.payload;
    },
    setTimeSeriesOpt: (state, action: PayloadAction<string>) => { state.timeSeriesOpt = action.payload },
    setPriceOptions: (state, action: PayloadAction<string[]>) => { state.priceOptions = action.payload },
    setShowAverage: (state, action: PayloadAction<boolean>) => { state.showAverage = action.payload },
    setStartDate: (state, action: PayloadAction<string>) => { state.startDate = action.payload },
    setEndDate: (state, action: PayloadAction<string>) => { state.endDate = action.payload },
  },
});

export const { stockDataLoading, stockDataLoaded, setTimeSeriesOpt, setPriceOptions, setShowAverage, setStartDate, setEndDate } = stocksSlice.actions;

export const getStocksData = (sym: string): AppThunk => async (dispatch, getState) => {
  const timeSeriesItem = getState().stocks.timeSeriesOpt;
  const config = stockTimeSeriesOptions.find((item) => item.id === timeSeriesItem);
  if (!config) return;

  dispatch(stockDataLoading());

  const intervalParam = timeSeriesItem === stockTimeSeriesOptions[0].id ? `&interval=${config.interval}` : '';
  const res = await fetch(`${AppConfig.API_ENDPOINT}?function=${timeSeriesItem}&symbol=${sym}${intervalParam}&apikey=${AppConfig.API_KEY}`);
  const jsonRes = await res.json();
  const jsonKey = config.jsonKey;

  dispatch(stockDataLoaded(jsonRes[jsonKey as keyof any]));
}

export const selectStocksDataLoading = (state: RootState) => state.stocks.loading;
export const selectStocksData = (state: RootState) => state.stocks.data;
export const selectTimeSeriesOpt = (state: RootState) => state.stocks.timeSeriesOpt;
export const selectPriceOptions = (state: RootState) => state.stocks.priceOptions;
export const selectShowAverage = (state: RootState) => state.stocks.showAverage;
export const selectStartDate = (state: RootState) => state.stocks.startDate;
export const selectEndDate = (state: RootState) => state.stocks.endDate;

export default stocksSlice.reducer;
