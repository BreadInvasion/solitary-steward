import './App.css'
import { ThemeProvider } from '@/components/theme-provider'
import IntroCard from '@/components/intro/IntroCard'

import {Route} from 'wouter';
import { navigate } from 'wouter/use-browser-location';
import PlannerScreen from './components/planner/PlannerScreen';
import BlurFade from './components/magicui/blur-fade';
import { ModeToggle } from './components/mode-toggle';

function App() {

  const closeIntro = () => {
    navigate("/roster", { replace: true })
  }

  return (
    <>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <div className="max-w-full text-right"><ModeToggle/></div>
        <Route path="/">
          <BlurFade inView>
            <IntroCard begin={closeIntro}></IntroCard>
          </BlurFade>
        </Route>
        <Route path="/roster">
          <BlurFade inView>
            <PlannerScreen></PlannerScreen>
          </BlurFade>
        </Route>
      </ThemeProvider>
    </>
  )
}

export default App
