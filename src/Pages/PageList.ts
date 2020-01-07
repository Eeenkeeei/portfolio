import {Main} from "./Main";
import {Contacts} from "./Contacts";
import {Resume} from "./Resume";
import {About} from "./About";

export interface Link {
    path: string
    label: string
    component: () => JSX.Element
}

export const Links: Link[] = [
    {path: '/', label: 'Главная', component: Main},
    {path: '/contacts', label: 'Контакты', component: Contacts},
    {path: '/resume', label: 'Резюме', component: Resume},
    {path: '/about', label: 'О себе', component: About},
    // {path: '/news', label: 'Что нового?', component: Contacts}
];

