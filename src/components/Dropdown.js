import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class Dropdown extends Component {
    render() {
        return (
            <div>
                <div className="dropdown mx-2">
                    <Link className="btn btn-secondary dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        News Category
                    </Link>

                    <ul className="dropdown-menu ">
                        <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                        <li><Link className="dropdown-item" to="/science">Science</Link></li>
                        <li><Link className="dropdown-item" to="/health">Health</Link></li>
                        <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                        <li><Link className="dropdown-item" to="/business">Business</Link></li>
                        <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                    </ul>
                </div>
            </div>
        )
    }
}
