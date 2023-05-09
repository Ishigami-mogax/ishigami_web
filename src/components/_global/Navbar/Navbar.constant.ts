import HomeIcon from '@mui/icons-material/Home';

export interface PropsInterface {

}

export interface IItemMenu {
    title: string;
    icon:  string;
    navigation: string;
}

export interface IIsActive {
    isActive: boolean
}

export const itemMenu: IItemMenu[] = [
    {title: "Home", icon: "home", navigation: "/"},
    {title: "Collections", icon: "folder", navigation: "/collections"},
    {title: "Stats", icon: "trending_up", navigation: "/stats"},
    {title: "Exercises", icon: "book", navigation: "/exercises"},
];

export const profileItem: IItemMenu = {
    title: "Profile",
    icon: "account_circle",
    navigation: "/profile"
}
