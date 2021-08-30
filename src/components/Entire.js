import React from 'react';
import { makeStyles, useTheme } from "@material-ui/core/styles";
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
import { MainListItems } from './listItems';
import { homeObj, loadObj, skillsObj, botObj } from './listItems'
import Home from './home/Home'
import LoadJobChange from './loadJobChange/LoadJobChange';
import Skills from './skills/Skills';
import Hidden from "@material-ui/core/Hidden";
import PropTypes from 'prop-types';


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
    toolbar: theme.mixins.toolbar,
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        width: drawerWidth
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
    },
    appBar: {
        [theme.breakpoints.up("sm")]: {
            width: `calc(100% - ${ drawerWidth }px)`,
            marginLeft: drawerWidth
        }
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    drawer: {
        [theme.breakpoints.up("sm")]: {
            width: drawerWidth,
            flexShrink: 0
        }
    },
}));

export default function Entire(props) {

    const { window } = props;
    const container =
        window !== undefined ? () => window().document.body : undefined;
    const theme = useTheme();
    const classes = useStyles();


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
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

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
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        {/* 画面が小さい時のみ表示される */}
                        <MenuIcon />
                    </IconButton>
                    {/* variantで文字サイズを定義 */}
                    <Typography component="h1" variant="h5" color="inherit" noWrap className={classes.title}>
                        <div>{appBarcontents(listItemState)}</div>
                    </Typography>
                </Toolbar>
            </AppBar>

            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === "rtl" ? "right" : "left"}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}
                    >
                        <div className={classes.toolbar} >
                            <List><MainListItems updateStateFunc={handleItemFunctions} /></List>
                        </div>
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper
                        }}
                        variant="permanent"
                        open
                    >
                        <div className={classes.toolbar} />
                        <Divider />
                        <List><MainListItems updateStateFunc={handleItemFunctions} /></List>
                    </Drawer>
                </Hidden>
            </nav>

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
Entire.propTypes = {
    window: PropTypes.func,
};
