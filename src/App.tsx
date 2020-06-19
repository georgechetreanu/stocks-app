import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import StocksChartControls from './components/ChartControls';
import StocksChart from './components/StocksChart';
import ErrorBoundary from './utils/ErrorBoundary';

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Paper>
          <ErrorBoundary>
            <StocksChartControls />
          </ErrorBoundary>
        </Paper>
        <ErrorBoundary>
          <StocksChart />
        </ErrorBoundary>
      </Container>
    </div>
  );
}

export default App;
