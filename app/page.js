import './globals.css';

import WelcomePage from './components/WelcomePage/WelcomePage';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import Events from './components/Videos/Videos';
import Photos from './components/Photos/Photos';
import Programs from './components/Programs/Programs';
import Header from './components/Header/Header';
import FullPageScroll from './components/FullPageScroll/FullPageScroll';
import Partners from './components/Partners/Partners';
import Reviews from './components/Reviews/Reviews';

export default function Page() {
  return (
    <div>
      <div className="curtain curtainLeft" aria-hidden />
      <div className="curtain curtainRight" aria-hidden />

      <Header/>
      <main id="snap">
        <WelcomePage/>
        <About/>
        {/* <Partners/> */}
        <Events/>
        <Photos/>
        <Reviews/>
        <Programs/>
        <Contacts/>
      </main>
      <FullPageScroll/>
    </div>
  );
}
