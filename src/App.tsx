import Navbar from './components/landing/Navbar'
import Hero from './components/landing/Hero'
import Problem from './components/landing/Problem'
import Solution from './components/landing/Solution'
import Features from './components/landing/Features'
import Benefits from './components/landing/Benefits'
import SocialProof from './components/landing/SocialProof'
import FinalCta from './components/landing/FinalCta'
import Footer from './components/landing/Footer'

function App() {
  return (
    <div className="bg-page-bg">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Benefits />
        <SocialProof />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}

export default App
