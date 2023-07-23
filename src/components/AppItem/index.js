import './index.css'

const AppItem = props => {
  const {eachItem} = props
  const {imageUrl, appName, category} = eachItem

  return (
    <li className="list-container">
      <img src={imageUrl} className="app-image" alt={appName} />
      <p className="app-para">{appName}</p>
    </li>
  )
}
export default AppItem
