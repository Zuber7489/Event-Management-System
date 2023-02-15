import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [

    { path: 'profile', title: 'Profile', icon: 'bx bx-user', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: 'event-available', title: 'Event List', icon: 'bx bx-home-circle', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

    { path: 'staff/add-staff', title: 'Event Book', icon: 'bx bx-file', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: 'plan', title: 'Plan Prices', icon: 'bx bx-message-square-edit', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },           

];


export const AdminRoutes: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard', icon: 'bx bx-home-circle', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: 'user-management', title: 'All Users', icon: 'bx bxs-group', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },
    { path: 'staff', title: 'All Bookings', icon: 'bx bx-message-square-edit', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: [] },

];