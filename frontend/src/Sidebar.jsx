
function Sidebar({ activePage, onNavigate }) {
  const pages = [
    'Research Overview',
    'Competitor Analysis',
    'Research History',
  ]

  return (
    <aside className="sidebar">
      <div className="logo">MarketMind AI</div>

      <p className="nav-label">Workspace</p>

      {pages.map((page) => (
        <div
          key={page}
          className={`nav-item ${
            activePage === page ? 'active' : ''
          }`}
          onClick={() => onNavigate(page)}
        >
          {page}
        </div>
      ))}
    </aside>
  )
}

export default Sidebar
