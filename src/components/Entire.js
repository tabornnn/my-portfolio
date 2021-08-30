import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { MainListItems, secondaryListItems } from './listItems';
import { homeObj, loadObj, skillsObj, botObj } from './listItems'
import Home from './home/Home'
import LoadJobChange from './loadJobChange/LoadJobChange';
import Skills from './skills/Skills';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth = 240;

// スタイルのカスタマイズ。Hook式
const useStyles = makeStyles((theme) => ({
    // flexボックスを利用
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${ drawerWidth }px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    }
}));

export default function Entire() {
    const classes = useStyles();
    // メニューを隠す状態にするかを判定するstate
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    // メニューのどのアイテムを押下している状態を判定するstate
    const [listItemState, setListItemState] = React.useState(homeObj.key);
    const handleHomeItem = () => {
        setListItemState(homeObj.key);
    };
    const handleProfileItem = () => {
        setListItemState(loadObj.key);
    };
    const handleCareerItem = () => {
        setListItemState(skillsObj.key);
    };
    const handleChatbotItem = () => {
        setListItemState(botObj.key);
    };
    //更新関数の集約
    const handleItemFunctions = [handleHomeItem, handleProfileItem, handleCareerItem, handleChatbotItem];

    // itemListStateとコンテンツを紐付け
    const contents = (itemListState) => {
        switch (itemListState) {
            case homeObj.key:
                return (
                    <Home />
                )
            case loadObj.key:
                return (
                    <LoadJobChange />
                )
            case skillsObj.key:
                return (
                    <div>
                        <Skills />
                    </div>
                )
            default:
                console.log("default");
        }
    }

    // itemListStateとコンテンツを紐付け
    const appBarcontents = (itemListState) => {
        switch (itemListState) {
            case homeObj.key:
                return (
                    homeObj.text
                )
            case loadObj.key:
                return (
                    loadObj.text
                )
            case skillsObj.key:
                return (
                    skillsObj.text
                )
            default:
                console.log("default");
        }
    }

    return (
        <div className={classes.root}>
            {/* CssBaselineは各ブラウザの差異を平均化させる役割 */}
            <CssBaseline />
            {/* clsxはclassNameを動的に示す際に利用する */}
            {/* <TestCompornent className={clsx(classes.before, boolean && classes.after )}  /> */}
            {/* openがTrueの時にclasses.appBarShiftになる。 */}
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        // aria-labelの意味はまだわからず。。
                        aria-label="open drawer"

                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        {/* 隠しメニューの時のみ表示される */}
                        <MenuIcon />
                    </IconButton>
                    {/* variantで文字サイズを定義 */}
                    <Typography component="h1" variant="h5" color="inherit" noWrap className={classes.title}>
                        <div>{appBarcontents(listItemState)}</div>
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                classes={{
                    paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List><MainListItems updateStateFunc={handleItemFunctions} /></List>
                <Divider />
                <List>{secondaryListItems}</List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />

                <Container maxWidth="lg" className={classes.container}>
                    {/* litemListStateごとのコンテンツを表示させる */}
                    {contents(listItemState)}
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    );
}
