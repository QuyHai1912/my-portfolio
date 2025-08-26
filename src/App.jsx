import './App.css'
import './style/grid.css'
import Header from './component/Header.jsx'
import BackgroundHome from './section/Home/home.jsx'
import Skill from './section/Skill/skill.jsx'
import Project from './section/Project/project.jsx'
import Contact from './section/contact/contact.jsx'

function App() {

  return (
    <main style={{width: '100%'}}>
      <Header />
      <BackgroundHome />
      <Skill />
      <Project />
      <Contact />
    </main>
  )
}

export default App
