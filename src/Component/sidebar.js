import React from 'react'

export default function Sidebar(props) {
  return (
    <>
        <nav
      className="collapse d-lg-block sidebar collapse bg-white float-left" style={{width:"80%"}}
    >
      <div className="position-sticky">
        <div className="list-group list-group-flush mx-3 mt-4">
          <h6>Select Category</h6>
          <ul
            id="collapseExample1"
            className="collapse show list-group list-group-flush"
          >
            <li className="list-group-item py-1">
              <a href="#" className="text-reset" onClick={()=>{props.filters("all")}}>
                All
              </a>
            </li>
            <li className="list-group-item py-1">
              <a href="#" className="text-reset" onClick={()=>{props.filters("cat1")}}>
                Category 1
              </a>
            </li>
            <li className="list-group-item py-1">
              <a href="#" className="text-reset" onClick={()=>{props.filters("cat2")}}>
                Category 2
              </a>
            </li>
            <li className="list-group-item py-1">
              <a href="#" className="text-reset" onClick={()=>{props.filters("cat3")}}>
                Category 3
              </a>
            </li>
            <li className="list-group-item py-1">
              <a href="#" className="text-reset" onClick={()=>{props.filters("cat4")}}>
                Category 4
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </>
  )
}
