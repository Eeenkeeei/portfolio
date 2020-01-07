import React from 'react';
import {TextComponent} from "../Components/Text";
import GitHubIcon from '@material-ui/icons/GitHub';
import TelegramIcon from '@material-ui/icons/Telegram';
import FindInPageIcon from '@material-ui/icons/FindInPage';

export const Contacts = () => {

    return (
        <div className="page-container animated fadeIn">
            <TextComponent className="contacts-header">
                Если хочешь связаться:
            </TextComponent>
            <div className="contacts-container">
                <div>
                    <TelegramIcon/><a className="contacts-container-text" href={"https://t.me/eeenkeeei"}>Telegram</a>
                </div>
                <div>
                    <GitHubIcon/> <a className="contacts-container-text" href={"https://github.com/Eeenkeeei"}>GitHub</a>
                </div>
                <div>
                    <FindInPageIcon/> <a className="contacts-container-text" download href={require("../../src/Files/Резюме.pdf")}>Скачать резюме (PDF)</a>
                </div>
            </div>
        </div>
    )
};
