import {Switch, Route, NavLink, Redirect, BrowserRouter} from 'react-router-dom'
import React, {useState} from 'react'
import {Links} from "./Pages/PageList";

export const App = () => {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <div>
            <BrowserRouter>
                <header className="header">
                    <nav>
                        <input onChange={()=>{}} checked={openMenu} type="checkbox" id="checkbox-menu"/>
                        <label>
                            <ul className="menu touch">
                                <li>
                                    <NavLink className="logo" key='/' to='/'>
                                        РОМАН ИЛЬИЧЕВ
                                    </NavLink>
                                </li>
                                {Links.map(link => {
                                    return (
                                        <li key={link.label}>
                                            <NavLink  to={link.path}>
                                                {link.label}
                                            </NavLink>
                                        </li>
                                    )
                                })}
                            </ul>
                            <span onClick={()=>setOpenMenu(!openMenu)} className="toggle">☰</span>
                        </label>
                    </nav>
                </header>
                {/* ТЕЛО ВСЕЙ СТРАНИЦЫ */}
                <main className="container">
                    <Switch>
                        {Links.map(link => {
                            return (
                                <Route key={link.path} exact path={link.path} component={link.component}/>
                            )
                        })}
                        <Redirect to="/"/>
                    </Switch>
                </main>
            </BrowserRouter>
        </div>
    )
};

