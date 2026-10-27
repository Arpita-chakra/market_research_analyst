
import { useState } from 'react'
import './App.css'
import ResearchForm from './ResearchForm'
import Sidebar from './Sidebar'
import Header from './Header'

function App() {
  const [topic, setTopic] = useState('')
  const [submittedTopic, setSubmittedTopic] = useState('')
  const [industry, setIndustry] = useState('')
  const [geography, setGeography] = useState('India') //defailt india is selected
  const [competitorCount, setCompetitorCount] = useState('5') // default number of competitors set as 5
  const [activePage, setActivePage] = useState('Research Overview')
  
function handleSubmit() {
  if (!topic.trim()) {
    alert('Please enter a research topic first.')
    return
  }

  if (!industry.trim()) {
    alert('Please enter an industry.')
    return
  }

  const researchRequest = {
    topic: topic.trim(),
    industry: industry.trim(),
    geography: geography,
    competitor_count: Number(competitorCount),
  }

  console.log('Research request:', researchRequest)

  setSubmittedTopic(researchRequest.topic)
}


  return (
    <div className="app">
      <Sidebar
  activePage={activePage}
  onNavigate={setActivePage}
/>

      
<main className="main-content">
  <Header />

  {activePage === 'Research Overview' && (
    <>
      <section className="welcome">
        <h2>Discover your next market opportunity.</h2>
        <p>
          Research markets, analyze competitors, and uncover
          actionable business insights with AI.
        </p>
      </section>

      <ResearchForm
        topic={topic}
        setTopic={setTopic}
        industry={industry}
        setIndustry={setIndustry}
        geography={geography}
        setGeography={setGeography}
        competitorCount={competitorCount}
        setCompetitorCount={setCompetitorCount}
        onSubmit={handleSubmit}
      />

      {submittedTopic && (
        <section className="research-card">
          <h3>Research Request Summary</h3>
          <p>Topic: {submittedTopic}</p>
          <p>Industry: {industry}</p>
          <p>Geography: {geography}</p>
          <p>Competitors: {competitorCount}</p>
        </section>
      )}
    </>
  )}

  {activePage === 'Competitor Analysis' && (
    <section className="research-card">
      <h2>Competitor Analysis</h2>
      <p>Compare companies, pricing, and market strategies.</p>
    </section>
  )}

  {activePage === 'Research History' && (
    <section className="research-card">
      <h2>Research History</h2>
      <p>Your previous research reports will appear here.</p>
      <p>No saved research reports yet.</p>
    </section>
  )}
</main>

    </div>
  )
}

export default App
