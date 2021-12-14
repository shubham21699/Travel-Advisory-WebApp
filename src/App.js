import logo from './logo.svg';
import './App.css';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <CssBaseline />
      <Grid container spacing={3} style={{ width: '100%' }} > 
          {/* This item xs={12} means it will take full width on mobile devices */}
          {/* and md={4} means it will take 4 spaces on medium or large devices */}
          <Grid item xs={12} md={4}> 
            <List />
          </Grid>
          {/* Map is larger so md={8} will take 8 spaces on medium or larger devices */}
          <Grid item xs={12} md={8} >
            <Map />
          </Grid>
       </Grid>
    </div>
  );
}

export default App;
