import HomeIcon from '@mui/icons-material/Home';

export interface PropsInterface {

}

interface IItemMenu {
    title: string;
    icon:  string;
}

export const itemMenu: IItemMenu[] = [
    {title: "Home", icon: "home"},
    {title: "Collections", icon: "folder"},
    {title: "Stats", icon: "trending_up"},
    {title: "Exercises", icon: "book"},
];
