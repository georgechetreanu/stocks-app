export interface StocksTimeSeries {
  id: string;
  interval?: string;
  jsonKey: string;
  name: string;
}

export interface StocksPrices {
  jsonKey: string;
  name: string;
}

export class AppConfig {
  public static API_KEY: string = 'F3G7JLZV90IVE8Z5';
  public static API_ENDPOINT: string = 'https://www.alphavantage.co/query';
  public static STOCKS_TIME_SERIES: StocksTimeSeries[] = [
    { id: 'TIME_SERIES_INTRADAY', interval: '15min', jsonKey: 'Time Series (15min)', name: 'Intraday' },
    { id: 'TIME_SERIES_DAILY', jsonKey: 'Time Series (Daily)', name: 'Daily' },
    { id: 'TIME_SERIES_WEEKLY', jsonKey: 'Weekly Time Series', name: 'Weekly' },
    { id: 'TIME_SERIES_MONTHLY', jsonKey: 'Monthly Time Series', name: 'Monthly' },
  ];
  public static STOCKS_TIME_SERIES_PRICES: StocksPrices[] = [
    { jsonKey: '1. open', name: 'Open' },
    { jsonKey: '2. high', name: 'High' },
    { jsonKey: '3. low', name: 'Low' },
    { jsonKey: '4. close', name: 'Close' },
  ];
}
