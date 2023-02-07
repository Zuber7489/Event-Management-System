import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

    { path: 'profile', title: 'Profile', icon: 'bx bx-user', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: 'dashboard', title: 'Event Availability', icon: 'bx bx-home-circle', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

    { path: 'staff', title: 'Event Status', icon: 'bx bx-message-square-edit', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: 'staff/add-staff', title: 'Event Book', icon: 'bx bx-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: 'plan', title: 'Plan Prices', icon: 'bx bx-message-square-edit', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },           

];

