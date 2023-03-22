import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Home.css"

export function Home() {
    return (
        <div className="wrapper">
            <div className="nav">
                <h1>Home</h1>
                <ul>
                    <li><Link to="/1">Seção 1</Link></li>
                    <li><Link to="/2">Seção 2</Link></li>
                    <li><Link to="/3">Seção 3</Link></li>
                </ul>
            </div>
            <Outlet className="section"></Outlet>
        </div>
    );
}