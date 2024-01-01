import React from "react";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export const SidebarData = [
    {
        title: "Dashboard",
        icon: <HomeOutlinedIcon />
    },
    {
        title: "My Course",
        icon: <PlayCircleFilledWhiteOutlinedIcon />
    },
    {
        title: "Calendar",
        icon: <CalendarTodayOutlinedIcon />
    },
    {
        title: "Resource",
        icon: <AutoStoriesOutlinedIcon />
    },
    {
        title: "Quiz",
        icon: <ExtensionOutlinedIcon />
    },
    {
        title: "Message",
        icon: <ChatBubbleOutlineOutlinedIcon />
    },
    {
        title: "My Status",
        icon: <TrendingUpOutlinedIcon />
    },
    {
        title: "Wallet",
        icon: <AccountBalanceWalletOutlinedIcon />
    },
    {
        title: "My Account",
        icon: <PersonOutlineOutlinedIcon />
    }
];
