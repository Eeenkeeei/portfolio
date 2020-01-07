import React from 'react'
import {Grid} from "@material-ui/core";
import {TextComponent} from "../Components/Text";

export const Resume = () => {
    return (
        <div className="animated fadeIn page-container">
            <Grid container>
                <Grid item xs={12} sm={8} className="resume-header-container">
                    <TextComponent className="resume-header-text">
                        Frontend разработчик
                    </TextComponent>
                </Grid>
            </Grid>
            <Grid container className="resume-body-container">
                <Grid item xs={12} sm={8}>
                    <Grid item xs>
                        <TextComponent className="resume-header">ОПЫТ РАБОТЫ</TextComponent>
                    </Grid>
                    <Grid item xs>
                        <TextComponent className="resume-body-text">
                            Комплексные Информационные Решения, Казань - Frontend разработчик
                        </TextComponent>
                        <TextComponent className="resume-body-comment">
                            Май 2019 - настоящее время
                        </TextComponent>
                        <TextComponent className="resume-body-text">
                            Суммарный опыт JS разработки - более года
                        </TextComponent>
                    </Grid>

                    <Grid item xs>
                        <TextComponent className="resume-header">ОБРАЗОВАНИЕ</TextComponent>
                    </Grid>
                    <Grid item xs>
                        <TextComponent className="resume-body-text">
                            КНИТУ-КАИ, Казань - Информационные системы и технологии, 3 курс, очное отделение
                        </TextComponent>
                        <TextComponent className="resume-body-comment">
                            Сентябрь 2017 - настоящее время
                        </TextComponent>
                        <TextComponent className="resume-body-text">
                            Курс JS, IT-Park, Казань
                        </TextComponent>
                        <TextComponent className="resume-body-comment">
                            Октябрь 2018 - Апрель 2019
                        </TextComponent>
                    </Grid>

                    <Grid item xs>
                        <TextComponent className="resume-header">НАВЫКИ</TextComponent>
                    </Grid>
                    <Grid item xs>
                        <TextComponent className="resume-body-comment">
                            — Опыт коммерческой Frontend разработки на TypeScript + React + GraphQL
                        </TextComponent>
                        <TextComponent className="resume-body-comment">
                            — Опыт Backend разработки на NodeJS + MongoDB для Pet-проектов
                        </TextComponent>
                        <TextComponent className="resume-body-comment">
                            — Опыт использования и настройки Webpack
                        </TextComponent>
                        <TextComponent className="resume-body-comment">
                            — Навыки использования CI/CD (Travis)
                        </TextComponent>
                        <TextComponent className="resume-body-comment">
                            — Опыт тестирования (Jest)
                        </TextComponent>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Grid item xs>
                        <TextComponent className="resume-header">СТЕК ТЕХНОЛОГИЙ</TextComponent>
                    </Grid>
                    <Grid item xs>
                        <TextComponent className="resume-body-comment">
                            — React
                        </TextComponent>
                        <TextComponent className="resume-body-comment">
                            — Typescript
                        </TextComponent>
                        <TextComponent className="resume-body-comment">
                            — JS (ES8)
                        </TextComponent>
                        <TextComponent className="resume-body-comment">
                            — NodeJS (Restify)
                        </TextComponent>
                        <TextComponent className="resume-body-comment">
                            — Webpack
                        </TextComponent>
                        <TextComponent className="resume-body-comment">
                            — MongoDB
                        </TextComponent>
                        <TextComponent className="resume-body-comment">
                            — Apollo GraphQL
                        </TextComponent>
                        <TextComponent className="resume-body-comment">
                            — Material-UI
                        </TextComponent>
                        <TextComponent className="resume-body-comment">
                            — Git
                        </TextComponent>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
};
