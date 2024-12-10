import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NotFound from './components/notFound/NotFound';
import Home from './components/home/Home';
import State from './components/useState/useState';
import Effect from './components/useEffect/useEffect';
import Ref from './components/useRef/useRef';

function App() {
  return (
    // https://goddaehee.tistory.com/305
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/useState" element={<State />} />
        <Route path="/useEffect" element={<Effect />} />
        <Route path="/useRef" element={<Ref />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
