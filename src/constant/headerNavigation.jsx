import { PiBookOpenTextLight, PiDotsNineBold, PiMountains, PiPersonArmsSpreadFill, PiPersonSimpleTaiChiBold } from 'react-icons/pi';
import { HiMiniUserGroup, HiOutlineBuildingLibrary } from 'react-icons/hi2';
import { MdOutlineDashboard, MdOutlineSpaceDashboard } from "react-icons/md";
import { CiMoneyBill } from "react-icons/ci";
import { BiSpreadsheet } from "react-icons/bi";
import { BsClock } from "react-icons/bs";
import { GrSchedulePlay } from "react-icons/gr";
import { FaRegLightbulb } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

export const headerNav = [
    {
        'icon': PiBookOpenTextLight,
        'label': 'Curriculum',
        'link': '/',
        'isActive': false
    },

    {
        'icon': HiMiniUserGroup,
        'label': 'Community',
        'link': '/',
        'isActive': false
    },

    {
        'icon': HiOutlineBuildingLibrary, 
        'label': 'Campus',
        'link': '/',
        'isActive': false
    },

    {
        'icon': PiMountains, 
        'label': 'v-Edge',
        'link': '/',
        'isActive': false
    },

    {
        'icon': PiDotsNineBold, 
        'label': 'v-Apps',
        'link': '/',
        'isActive': false
    },

]



export const sideBarNav = [
    {
        'icon': MdOutlineDashboard,
        'label': 'Dashboard',
        'link': '/',
        'isActive': false
    },

    {
        'icon': MdOutlineSpaceDashboard,
        'label': 'My Campus',
        'link': '/',
        'isActive': false
    },

    {
        'icon': CiMoneyBill, 
        'label': 'Fees',
        'link': '/',
        'isActive': false
    },

    {
        'icon': BiSpreadsheet, 
        'label': 'Admission',
        'link': '/',
        'isActive': false
    },

    {
        'icon': PiBookOpenTextLight, 
        'label': 'Curriculum',
        'link': '/',
        'isActive': false
    },
    {
        'icon': BsClock,
        'label': 'Attendence',
        'link': '/',
        'isActive': false
    },

    {
        'icon': PiPersonArmsSpreadFill,
        'label': 'Lesson Activity',
        'link': '/',
        'isActive': false
    },

    {
        'icon': GrSchedulePlay, 
        'label': 'Time Table',
        'link': '/',
        'isActive': false
    },

    {
        'icon': PiPersonSimpleTaiChiBold, 
        'label': 'Activities',
        'link': '/',
        'isActive': false
    },
    {
        'icon': FaRegLightbulb, 
        'label': 'Information',
        'link': '/',
        'isActive': false
    },

    {
        'icon': IoIosPeople, 
        'label': 'Team',
        'link': '/',
        'isActive': false
    },
]