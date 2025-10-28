export interface NavBarProps {
    title?: string;
    isDarkMode?: boolean;
    onThemeChange?: (isDark: boolean) => void;
}

export interface NavbarItem {
    id: string;
    title: string;
    href: string;
}