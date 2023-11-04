import {  
    UilEstate,
    UilConstructor,
    UilUsersAlt,
    UilBookMedical ,
    UilPizzaSlice,
    UilChart,
    UilSignOutAlt,
    UilFire,
    UilAnalytics,
} from "@iconscout/react-unicons";

export const SideBarData = [

    {
        icon : UilEstate,
        headding : "Dashboard",
    },
    {
        icon : UilConstructor,
        headding : "Employees",
    },
    {
        icon : UilUsersAlt,
        headding : "Customers    ",
    },
    {
        icon : UilAnalytics,
        headding : "Accounts    ",
    },
    {
        icon : UilChart,
        headding : "Inventory",
    },
    {
        icon : UilFire,
        headding : "Events & Fu",
    },
    {
        icon : UilBookMedical,
        headding : "Bookings ",
    },
    {
        icon : UilPizzaSlice,
        headding : "Foods & Be",
    },
    

];

/* for card data */
export const CardData = [
    {
        title:'Sales',
        color : {
            background : "linear-gradient(to top, #c471f5 0%, #fa71cd 100%)",
            boxShadow : "0px 10px 20px 0px #e0c6f5",
        },
        barValue : 50,
        value : "25,700",
        png : UilAnalytics,
        series : [{
            name : "Sales",
            data : [31,40,28,51,42,100,108],
        },],
    },

    {
        title:'Revenue',
        color : {
            background : "linear-gradient(180deg,#FF919D 0% , #FC929D 100%)",
            boxShadow : "0px 10px 20px 0px #FDC0C7",
        },
        barValue : 70,
        value : "15,700",
        png : UilAnalytics,
        series : [{
            name : "Sales",
            data : [50,70,18,51,42,100,108],
        },],
    },

    {
        title:'Expences',
        color : {
            background : "radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%)",
            boxShadow : "0px 10px 20px 0px #FDC0C7",
        },
        barValue : 30,
        value : "12,700",
        png : UilAnalytics,
        series : [{
            name : "Sales",
            data : [50,70,18,51,42,100,108],
        },],
    },
]