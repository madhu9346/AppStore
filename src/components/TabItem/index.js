import './index.css'

const TabItem = props => {
  const {eachTabItem, updateTab, isActive} = props
  const {displayText, tabId} = eachTabItem

  const upTabItem = () => {
    updateTab(tabId)
  }
  const status = isActive ? 'btn1' : ''

  return (
    <li className="list-con">
      <button type="button" className={`btn ${status}`} onClick={upTabItem}>
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
