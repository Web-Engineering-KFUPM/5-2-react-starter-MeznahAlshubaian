import './App.css'
import StudentCard from './components/StudentCard'

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>
        <main className="dashboard-main">
        <div className="cards-container">
            <StudentCard name="Lujain Aljehani" id="2022491450" dept="Information and Computer Science" />
            <StudentCard name="Fajer Alyami" id="2022564820" dept="Electrical Engineering" />
        </div>
      </main>
    </div>
  )
}

export default App
