
function ResearchForm({
  topic,
  setTopic,
  industry,
  setIndustry,
  geography,
  setGeography,
  competitorCount,
  setCompetitorCount,
  onSubmit,
}) {
  return (
    <section className="research-card">
      <h3>Start a new research project</h3>

      <p className="card-description">
        Describe the market or industry you want to investigate.
      </p>

      <div className="form-field">
        <label htmlFor="industry">Industry</label>
        <input
          id="industry"
          value={industry}
          onChange={(event) => setIndustry(event.target.value)}
          placeholder="e.g. Electric vehicles"
        />
      </div>

      <div className="form-field">
        <label htmlFor="geography">Geography</label>
        <select
          id="geography"
          value={geography}
          onChange={(event) => setGeography(event.target.value)}
        >
          <option value="India">India</option>
          <option value="United States">United States</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Global">Global</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="competitorCount">
          Number of competitors
        </label>
        <select
          id="competitorCount"
          value={competitorCount}
          onChange={(event) =>
            setCompetitorCount(event.target.value)
          }
        >
          <option value="3">3 competitors</option>
          <option value="5">5 competitors</option>
          <option value="10">10 competitors</option>
        </select>
      </div>

      <textarea
        className="research-input"
        value={topic}
        onChange={(event) => setTopic(event.target.value)}
        placeholder="Example: Analyze the Indian electric vehicle market..."
      />

      <button className="primary-button" onClick={onSubmit}>
        Generate Research Report →
      </button>
    </section>
  )
}

export default ResearchForm
