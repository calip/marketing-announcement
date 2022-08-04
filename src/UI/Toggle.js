const Toggle = () => {
  return(
    <div className="search-toggle">
      <label className="toggle">
        <span className="toggle-label">BM</span>
        <input className="toggle-checkbox" type="checkbox" checked />
        <div className="toggle-switch"></div>
        <span className="toggle-label">EN</span>
      </label>
    </div>
  ) 
}
  
export default Toggle