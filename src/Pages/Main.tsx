import React from 'react'
import {TextComponent} from "../Components/Text";
import {Grid, Icon} from "@material-ui/core";


export const Main = () => {

    return (
        <div>
            <Grid container>
                <Grid item xs={12} style={{display: 'flex', alignItems: "center", justifyContent: "center"}}>
                    <TextComponent font="helvetica" className="main-header-text">
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

        </div>
    )
};
