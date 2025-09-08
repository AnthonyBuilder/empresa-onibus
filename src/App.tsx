
import './App.css'
import Layout from './components/layout/layout'
import { ThemeProvider } from "@/components/theme-provider"


function App() {
  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <Layout />
      </ThemeProvider>
    </>
  )
}

export default App

