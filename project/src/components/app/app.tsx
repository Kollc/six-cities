import { Route, Routes } from 'react-router-dom';
import ErrorPage from '../pages/error-page/error-page';
import FavoritesPage from '../pages/favorites-page/favorites-page';
import MainPage from '../pages/main-page/main-page';
import RoomPage from '../pages/room-page/room-page';
import SignInPage from '../pages/sign-in-page/sing-in-page';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
  return (
    <Routes>
      <Route path="/" element={<MainPage/>}/>
      <Route path="/login" element={<SignInPage/>}/>
      <Route path="/favorites" element={<PrivateRoute><FavoritesPage/></PrivateRoute>}/>
      <Route path="/offer/:id" element={<RoomPage/>}/>
      <Route path="*" element={<ErrorPage/>}/>
    </Routes>
  );
}

export default App;
