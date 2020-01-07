import React, {useEffect, useState} from 'react';
import moment from 'moment'
import {TextComponent} from "../Components/Text";

interface RepositoryData {
    id: number;
    html_url: string;
    description: string;
    language: string;
    name: string;
    created_at: string;
    updated_at: string;
}

export const About = () => {
    const age = moment(new Date("1999-09-23T00:00:00.000Z")).fromNow().toString().split(' ')[0];
    const [repos, setRepos] = useState<RepositoryData[] | null>(null);
    const [error, setError] = useState<Error | null>(null);
    useEffect(() => {
        fetch('https://api.github.com/users/Eeenkeeei/repos?sort=updated', {
            method: 'GET'
        })
            .then(res => res.json())
            .then((response: RepositoryData[]) => {
                setRepos(response);
            })
            .catch((err: Error) => {
                setError(err)
            })
    }, []);

    return (
        <div className="page-container animated fadeIn">
            <div className="about-information">
                <TextComponent>
                    &nbsp;&nbsp;&nbsp;&nbsp; Привет! Я - Frontend-разработчик из Казани. Мне {age} и я студент
                    КНИТУ-КАИ, на специальности
                    информационные системы и технологии.
                </TextComponent>
                <TextComponent style={{marginTop: '1rem'}}>
                    &nbsp;&nbsp;&nbsp;&nbsp; Можешь взглянуть на последние репозитории на моем GitHub, я думаю это будет
                    полезнее, чем информация
                    о том, что я люблю на завтрак и какую предпочитаю музыку :З
                </TextComponent>
            </div>
            <div className="repository-body-container">
                {repos ? repos.map(repo =>
                    <RepositoryViewComponent
                        description={repo.description}
                        html_url={repo.html_url}
                        id={repo.id}
                        language={repo.language}
                        name={repo.name}
                        key={repo.id}
                        created_at={repo.created_at}
                        updated_at={repo.updated_at}
                    />
                ) : <LoadingComponent/>}
                {error ? errorComponent(error) : null}
            </div>
        </div>
    )
};

const LoadingComponent = () => (
    <TextComponent style={{marginTop: '1rem', marginBottom: '1rem'}}>
        Загрузкаааааааа................
    </TextComponent>
);

const RepositoryViewComponent = (props: RepositoryData) => (
    <div className="repository-component">
        <a href={props.html_url}>
            <TextComponent className="repository-header">
                {props.name} | <span className="repository-lang">{props.language}</span>
            </TextComponent>
            <TextComponent className="repository-text-body">
                {props.description}
            </TextComponent>
            <TextComponent className="repository-text-body">
                Дата создания: {moment(props.created_at).format('MM.DD.YYYY')}. Дата последнего
                обновления: {moment(props.updated_at).format('MM.DD.YYYY, HH:mm')}
            </TextComponent>
        </a>
    </div>
);


const errorComponent = (error: Error) => (
    <>
        <TextComponent>
            Ой! Произошла ошибка :(
        </TextComponent>
        <TextComponent>
            {error}
        </TextComponent>
    </>
);
