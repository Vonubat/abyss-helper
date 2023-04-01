import { Navigate, Route, Routes } from 'react-router-dom';

import { Layout } from './components';
import { Path } from './constants';
import { MainPage } from './pages';

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path={Path.mainPage} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={Path.any} element={<Navigate to={Path.mainPage} />} />
      </Route>
    </Routes>
  );
};

export default App;
