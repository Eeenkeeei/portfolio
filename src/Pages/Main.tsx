import React from 'react'
import {TextComponent} from "../Components/Text";
import {Grid, Icon} from "@material-ui/core";
import {Divider} from "../Components/Divider";

export const Main = () => {

    return (
        <div className="animated fadeIn">
            <Grid container className="container">
                <Grid item xs={12} style={{display: 'flex', alignItems: "center", justifyContent: "center"}}>
                    <TextComponent className="main-header-text">
                        Основные навыки
                    </TextComponent>
                </Grid>
                <Grid container spacing={8} className="main-skills-container disable-padding-margin">
                    <Grid item xs={12} sm={4} className="main-skills">
                        <Grid container>
                            <Grid item xs={3} className="main-skills-icon-container">
                                <Icon className="main-skills-icon">done</Icon>
                            </Grid>
                            <Grid item xs={9} className="main-skills-text-container">
                                <TextComponent className="main-skills-text-header">
                                    TypeScript
                                </TextComponent>
                                <TextComponent className="main-skills-text-body">
                                    Опыт разработки - 8 месяцев
                                </TextComponent>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={4} className="main-skills">
                        <Grid container>
                            <Grid item xs={3} className="main-skills-icon-container">
                                <Icon className="main-skills-icon">done</Icon>
                            </Grid>
                            <Grid item xs={9} className="main-skills-text-container">
                                <TextComponent className="main-skills-text-header">
                                    JavaScript (ES8)
                                </TextComponent>
                                <TextComponent className="main-skills-text-body">
                                    Опыт разработки - более года
                                </TextComponent>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={4} className="main-skills">
                        <Grid container>
                            <Grid item xs={3} className="main-skills-icon-container">
                                <Icon className="main-skills-icon">done</Icon>
                            </Grid>
                            <Grid item xs={9} className="main-skills-text-container">
                                <TextComponent className="main-skills-text-header">
                                    ReactJS
                                </TextComponent>
                                <TextComponent className="main-skills-text-body">
                                    Опыт разработки - 8 месяцев
                                </TextComponent>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider/>
            <Grid container>
                <Grid item xs={12} style={{display: 'flex', alignItems: "center", justifyContent: "center"}}>
                    <TextComponent className="main-portfolio-text">
                        Портфолио
                    </TextComponent>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item xs={12} style={{display: 'flex', alignItems: "center", justifyContent: "center"}}>
                    <TextComponent className="main-portfolio-comment">
                        Проекты, написанные за последние полгода
                    </TextComponent>
                </Grid>
            </Grid>
            <Grid container className="main-projects-container">
                <Grid item xs={12} sm={6}>
                    <Grid item xs className="main-skills-text-header">
                        Blesk-nails
                    </Grid>
                    <Grid item xs className="main-skills-text-body">
                        Frontend: Typescript + ReactJS + Material-UI <a className="github-href" href={"https://github.com/Eeenkeeei/blesk-nails"}>(GitHub)</a>
                    </Grid>
                    <Grid item xs className="main-skills-text-body">
                        Backend: Node.js + Restify + MongoDB <a className="github-href" href={"https://github.com/Eeenkeeei/blesk-nails-backend"}>(GitHub)</a>
                    </Grid>
                    <Grid item xs>
                        <img className="main-projects-image" src={require("../Images/blesk-nails-screen.png")}
                             alt="Timetable for students"/>

                    </Grid>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Grid item xs>
                        <a className="main-skills-text-header" href={"https://eeenkeeei.github.io/timetable"}>Timetable
                            for students</a>
                    </Grid>
                    <Grid item xs className="main-skills-text-body">
                        Frontend: Typescript + ReactJS + Material-UI <a className="github-href" href={"https://github.com/Eeenkeeei/timetable"}>(GitHub)</a>
                    </Grid>
                    <Grid item xs className="main-skills-text-body">
                        Backend: Node.js + Restify + MongoDB + JWT Auth <a className="github-href" href={"https://github.com/Eeenkeeei/timetable-server"}>(GitHub)</a>
                    </Grid>
                    <Grid item xs>
                        <img className="main-projects-image" src={require("../Images/timetable-screen.png")}
                             alt="Timetable for students"/>
                    </Grid>
                </Grid>
            </Grid>
            <Divider/>
        </div>
    )
};
