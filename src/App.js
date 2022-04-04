import { Route, Routes } from 'react-router-dom';
import { RecoPage, StockResult } from './page';

const App = () => {
  return(
  <Routes>
    <Route exact path="/" element={<RecoPage />} />
    <Route exact path="/result" element={<StockResult />} />
  </Routes>
  )
};

export default App;
