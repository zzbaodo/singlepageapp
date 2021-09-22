import React from "react"
import { Link } from "react-router-dom"
const Main = () => {
  return (
    <div>
      <div className="main ">
        <div className="">
          <div className="row costume-row">
            <div className="entry-banner text-center">
              <h1 id="hello">Hello, I'm</h1>
              <h1 id="name">XXXX</h1>
              <h1 id="person-description">
                UI Developer. UX Desinger. Problem Solver.
              </h1>
            </div>
          </div>

          <div className="btn__row-wrapper">
            <a className="btn btn-default btn-border costume-link" href="#about">
              Info
            </a>
            <Link className="btn btn-default btn-border costume-link" to="/portfolio">
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main
