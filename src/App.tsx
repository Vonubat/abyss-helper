import { Route, Routes } from 'react-router-dom';

import { Layout } from './components';
import { Path } from './constants';
import { MainPage, PageNotFound } from './pages';

const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path={Path.mainPage} element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path={Path.any} element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
