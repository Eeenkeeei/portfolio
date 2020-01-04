import {Switch, Route, NavLink, Redirect, BrowserRouter} from 'react-router-dom'
import React, {useState} from 'react'
import {Links} from "./Pages/PageList";
import {TextComponent} from "./Components/Text";
import {Divider} from "./Components/Divider";

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
                <main>
                    <Switch>
                        {Links.map(link => {
                            return (
                                <Route key={link.path} exact path={link.path} component={link.component}/>
                            )
                        })}
                        <Redirect to="/"/>
                    </Switch>
                </main>
                <Divider/>
                <footer>
                    {Links.map(link => {
                        return (
                            <div key={link.path}>
                                <NavLink to={link.path} className="footer-item">
                                    {link.label}
                                </NavLink>
                            </div>
                        )
                    })}
                </footer>
                <div className="footer-copyright">
                    <div className="little-divider"/>
                    <TextComponent className="footer-copyright-text">
                        © Роман Ильичев, Казань, 2020
                    </TextComponent>
                </div>
            </BrowserRouter>

        </div>
    )
};

