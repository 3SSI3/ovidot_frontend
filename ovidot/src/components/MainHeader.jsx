import { Link } from "react-router-dom"
import Cycle from '../images/Women.jpeg'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h3>Ovidot</h3>
          <h1>Every flow has a story</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, numquam obcaecati, voluptatum dolorem commodi ipsam
             voluptatibus eaque accusamus qui modi magni unde ipsa? Omnis suscipit corrupti, quae eos deleniti optio.
          </p>

          <Link to="/calendar" className="btn lg"> Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
          <img src={Cycle} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader