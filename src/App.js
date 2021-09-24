import logo from './logo.svg';
import './App.css';
import Adress from './Component/Profile/Adress';
import ProfilePhotos from './Component/Profile/ProfilePhotos';
import FullName from './Component/Profile/FullName';
function App() {
  return (
    <div className="container">
     <ProfilePhotos/>

     <div className="row">
     <FullName />
     </div>
<Adress/>
    </div>
  );
}

export default App;
