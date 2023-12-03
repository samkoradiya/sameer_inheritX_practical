import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/style/font/font.css'
import '../src/style/style.css'
import '../src/style/responsive.css'
import Header from './component/Header';
import Banner from './component/Home/Banner';
import MatchSearch from './component/Home/MatchDetails/MatchSearch';
import About from './component/Home/About';
import OurTeam from './component/Home/OurTeam';
import Subscribe from './component/Home/Subscribe';
import Footer from './component/Footer';
import TopPlayer from './component/Home/TopPlayer';

function App() {
  return (
    <>
        <Header/>
        <Banner/>
        <MatchSearch />
        <About />
        <TopPlayer />
        <OurTeam />
        <Subscribe />
        <Footer />
    </>
  )
}

export default App;
