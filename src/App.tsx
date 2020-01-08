import {Switch, Route, NavLink, Redirect, BrowserRouter} from 'react-router-dom'
import React, {Suspense, lazy, useState} from 'react'
import {TextComponent} from "./Components/Text";
import {Divider} from "./Components/Divider";
import {LoadingComponent} from "./Pages/About";
export interface Link {
    path: string
    label: string
    component: any
}

const Main = lazy(() => import("./Pages/ComponentExports/MainExport"));
const Contacts = lazy(() => import("./Pages/ComponentExports/ContactsExport"));
const Resume = lazy(() => import("./Pages/ComponentExports/ResumeExport"));
const About = lazy(() => import("./Pages/ComponentExports/AboutExport"));

export const Links: Link[] = [
    {path: '/', label: 'Главная', component: Main},
    {path: '/contacts', label: 'Контакты', component: Contacts},
    {path: '/resume', label: 'Резюме', component: Resume},
    {path: '/about', label: 'О себе', component: About},
];


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
                    <Suspense fallback={<LoadingComponent/>}>
                        <Switch>
                            {Links.map(link => {
                                return (
                                    <Route key={link.path} exact path={link.path} component={link.component}/>
                                )
                            })}
                            <Redirect to="/"/>
                        </Switch>
                    </Suspense>
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

