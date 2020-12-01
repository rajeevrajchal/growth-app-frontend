
export interface  sideMenuItemsInterface{
    path: string,
    label:string,
    icon: string
}

const sideMenuItems:sideMenuItemsInterface[] = [
    {
        path: "/admin",
        label:"dashboard",
        icon: 'dashboard'
    },
    {
        path: "/admin",
        label:"Settings",
        icon: 'settings'
    }
]

export default sideMenuItems
