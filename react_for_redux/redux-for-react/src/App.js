import {useSelector} from 'react-redux'
import './App.css';
import Header from './component/Header';
import Profile from './component/Profile';
import Auth from './component/Auth';
import Counter from './component/Counter';



function App() {
  const isAuth = useSelector((state)=>state.auth.isAuthenticated )
  return (
    <div className="App">
      <Header />
      { !isAuth && <Auth /> }
      { isAuth && <Profile />}
     
      <Counter />

    </div>
  );
}

export default App;
