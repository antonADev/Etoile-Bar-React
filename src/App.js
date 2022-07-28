import './App.css';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import logo from './assets/LogoMakr-99xgf9.png';
import Navigation from './routes/navigation/navigation.component';
import Loading from './components/loading/loading.component';

const Home = lazy(() => import('./routes/home/home.component'));
const Menu = lazy(() => import('./routes/menu/menu.component'));
// import Home from './routes/home/home.component';
// import Menu from './routes/menu/menu.component';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route
          index
          element={
            <Suspense fallback={<Loading logo={logo} />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path='menu'
          element={
            <Suspense fallback={<Loading logo={logo} />}>
              <Menu />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
