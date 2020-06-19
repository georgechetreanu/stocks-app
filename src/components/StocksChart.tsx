import {
  Backdrop,
  CircularProgress,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core';
import {isWithinInterval} from 'date-fns';
import React, {useEffect, useState} from 'react';
import {Line} from 'react-chartjs-2';
import {useSelector} from 'react-redux';
import {AppConfig} from '../config/AppConfig';
import {
  selectEndDate,
  selectPriceOptions,
  selectShowAverage,
  selectStartDate,
  selectStocksData,
  selectStocksDataLoading,
  selectTimeSeriesOpt,
} from '../store/stocksSlice';
import styles from './StocksChart.module.css';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  })
);

const stockTimeSeriesPricesOptions = AppConfig.STOCKS_TIME_SERIES_PRICES;
const config = {fill: false, lineTension: 0, borderWidth: 1, order: 0};
const configColors = {
  '1. open': 'rgb(197, 216, 109)',
  '2. high': 'rgb(38, 28, 21)',
  '3. low': 'rgb(145, 151, 174)',
  '4. close': 'rgb(215, 214, 214)',
  average: 'rgb(240, 93, 35)',
};

const getKey = (name: string) =>
  (
    stockTimeSeriesPricesOptions.find((item) => item.name === name) || {
      jsonKey: '',
    }
  ).jsonKey;

function StocksChart() {
  const classes = useStyles();
  const [chartData, setChartData] = useState({});
  const stockDataLoading: any = useSelector(selectStocksDataLoading);
  const stockData: any = useSelector(selectStocksData);
  const timeSeriesOpt: string = useSelector(selectTimeSeriesOpt);
  const priceOptions: string[] = useSelector(selectPriceOptions);
  const showAverage: boolean = useSelector(selectShowAverage);
  const startDate: string = useSelector(selectStartDate);
  const endDate: string = useSelector(selectEndDate);

  useEffect(() => {
    if (!stockData) return;

    let dates = Object.keys(stockData);
    let dataPoints = Object.entries(stockData);

    dates.reverse();
    dataPoints.reverse();

    if (
      timeSeriesOpt !== 'TIME_SERIES_INTRADAY' &&
      startDate &&
      endDate &&
      startDate !== endDate
    ) {
      const interval = {
        start: new Date(startDate),
        end: new Date(endDate),
      };

      dates = dates.filter((currentDate, index) => {
        const keep = isWithinInterval(new Date(currentDate), interval);

        !keep && dataPoints.splice(index, 1);

        return keep;
      });
    }

    const datasets = priceOptions.map((priceOption, index) => {
      const jsonKey = getKey(priceOption);

      return {
        ...config,
        label: priceOption,
        borderColor: configColors[jsonKey as keyof Object],
        order: index,
        data: dataPoints.map((item: any[]) => item[1][jsonKey]),
      };
    });

    if (showAverage) {
      const averagePrices = dataPoints.map(
        (item: any[]) =>
          (parseFloat(item[1]['3. low']) + parseFloat(item[1]['2. high'])) / 2
      );
      datasets.push({
        ...config,
        label: 'Average',
        borderColor: configColors['average' as keyof Object],
        borderWidth: 3,
        order: 5,
        data: averagePrices,
      });
    }

    setChartData({
      labels: dates,
      datasets,
    });
  }, [stockData, startDate, endDate, timeSeriesOpt, priceOptions, showAverage]);
  return (
    <div className={styles.chart}>
      <Backdrop className={classes.backdrop} open={stockDataLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Line data={chartData} />
    </div>
  );
}

export default StocksChart;
