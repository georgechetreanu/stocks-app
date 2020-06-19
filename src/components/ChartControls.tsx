import DateFnsUtils from '@date-io/date-fns';
import {
  Button,
  Checkbox,
  createStyles,
  FormControl,
  FormControlLabel,
  Grid,
  Input,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
  Switch,
  TextField,
  Theme,
  Divider,
} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppConfig} from '../config/AppConfig';
import {
  getStocksData,
  selectEndDate,
  selectPriceOptions,
  selectShowAverage,
  selectStartDate,
  selectTimeSeriesOpt,
  setEndDate,
  setPriceOptions,
  setShowAverage,
  setStartDate,
  setTimeSeriesOpt,
} from '../store/stocksSlice';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 100,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

const stockTimeSeriesOptions = AppConfig.STOCKS_TIME_SERIES;
const stockTimeSeriesPricesOptions = AppConfig.STOCKS_TIME_SERIES_PRICES;

export default function StocksChartControls() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [stockSymbol, setStockSymbol] = useState('IBM');
  const timeSeriesOpt: string = useSelector(selectTimeSeriesOpt);
  const priceOptions: string[] = useSelector(selectPriceOptions);
  const showAverage: boolean = useSelector(selectShowAverage);
  const startDate: string = useSelector(selectStartDate);
  const endDate: string = useSelector(selectEndDate);

  const handleTimeSeriesChange = (event: any) =>
    dispatch(setTimeSeriesOpt(event.target.value));

  const handleStartDateChange = (date: any) =>
    dispatch(setStartDate(date.toISOString()));

  const handleEndDateChange = (date: any) =>
    dispatch(setEndDate(date.toISOString()));

  const handlePriceOptionChange = (event: any) =>
    dispatch(setPriceOptions(event.target.value));

  const handleAverageToggleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => dispatch(setShowAverage(event.target.checked));

  const getName = (id: string): string =>
    (stockTimeSeriesOptions.find((item) => item.id === id) || {name: ''}).name;

  const loadStockData = () => {
    stockSymbol.length > 0 && dispatch(getStocksData(stockSymbol));
  };

  useEffect(() => {
    loadStockData();
  }, []);

  return (
    <React.Fragment>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container direction="column">
          <Grid
            container
            item
            justify="space-around"
            alignItems="center"
            xs={6}
          >
            <Grid item xs={1}>
              <TextField
                required={true}
                id="standard-basic"
                label="Symbol"
                aria-label="Symbol"
                value={stockSymbol}
                onChange={(e) => setStockSymbol(e.target.value)}
              />
            </Grid>

            <Grid item xs={1}>
              <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">
                  Time Series
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={timeSeriesOpt}
                  onChange={handleTimeSeriesChange}
                >
                  {stockTimeSeriesOptions.map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {getName(item.id)}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={3}>
              <Button
                disabled={stockSymbol.length === 0}
                variant="contained"
                color="primary"
                onClick={loadStockData}
              >
                See stock info
              </Button>
            </Grid>
          </Grid>
          <Divider />
          <Grid container item justify="space-evenly" alignItems="center">
            <Grid item xs={2}>
              {' '}
              <h2>Change view</h2>
            </Grid>
            <Grid item xs={2}>
              <KeyboardDatePicker
                disabled={timeSeriesOpt === 'TIME_SERIES_INTRADAY'}
                margin="normal"
                id="date-picker-dialog-start"
                label="Start Date"
                format="MM/dd/yyyy"
                value={startDate}
                onChange={handleStartDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'Change Start date',
                }}
              />
            </Grid>

            <Grid item xs={2}>
              <KeyboardDatePicker
                disabled={timeSeriesOpt === 'TIME_SERIES_INTRADAY'}
                margin="normal"
                id="date-picker-dialog-end"
                label="End Date"
                format="MM/dd/yyyy"
                value={endDate}
                onChange={handleEndDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'Change end date',
                }}
              />
            </Grid>

            <Grid item xs={2}>
              <FormControl className={classes.formControl}>
                <InputLabel id="price-options-label">Prices</InputLabel>
                <Select
                  labelId="price-options-label"
                  id="price-options"
                  multiple
                  value={priceOptions}
                  onChange={handlePriceOptionChange}
                  input={<Input />}
                  renderValue={(selected) => (selected as string[]).join(', ')}
                >
                  {stockTimeSeriesPricesOptions.map((item) => (
                    <MenuItem key={item.name} value={item.name}>
                      <Checkbox
                        checked={priceOptions.indexOf(item.name) !== -1}
                      />
                      <ListItemText primary={item.name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={1}>
              <FormControlLabel
                control={
                  <Switch
                    checked={showAverage}
                    onChange={handleAverageToggleChange}
                    color="primary"
                    name="Average"
                    inputProps={{'aria-label': 'primary checkbox'}}
                  />
                }
                label="Average"
              />
            </Grid>
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
    </React.Fragment>
  );
}
