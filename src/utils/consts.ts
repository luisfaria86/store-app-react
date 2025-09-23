import { NavbarItem } from "../components/NavBar/types";
import { FilterOption } from "../components/Filters/types";

export const navBarItems: NavbarItem[] = [
    {
        id: "1",
        title: 'Home',
        href: '/'
    },
    {
        id: "2", 
        title: 'Fruits',
        href: '/fruits'
    },
    {
        id: "3", 
        title: 'Vegetables',
        href: '/vegetables'
    },
]

export const filterOptions: FilterOption[] = [
    { id: 'all', label: 'All' },
    { id: 'organic', label: 'Organic' },
    { id: 'portuguese', label: 'Portuguese product' },
];
