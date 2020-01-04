import {Main} from "./Main";
import {Page1} from "./Page1";
import {Page2} from "./Page2";
import {Resume} from "./Resume";

export interface Link {
    path: string
    label: string
    component: () => JSX.Element
}

export const Links: Link[] = [
    {path: '/', label: 'Главная', component: Main},
    {path: '/resume', label: 'Резюме', component: Resume},
    {path: '/about', label: 'О себе', component: Page2},
    {path: '/contacts', label: 'Контакты', component: Page2},
    {path: '/news', label: 'Что нового?', component: Page2}
];

