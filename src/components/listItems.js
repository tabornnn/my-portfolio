import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';


const homeObj = {
  key: 'HOME',
  text: 'HOME'
};

const loadObj = {
  key: 'Load',
  text: '転職までの経緯'
};

const skillsObj = {
  key: 'SKILLS',
  text: 'スキルセット'
};

const botObj = {
  key: 'CHATBOT',
  text: 'チャットボット'
};

export { homeObj, loadObj, skillsObj, botObj };

export function MainListItems(props) {

  return (

    <div>
      <ListItem button onClick={props.updateStateFunc[0]}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary={homeObj.text} />
      </ListItem>
      <ListItem button onClick={props.updateStateFunc[1]}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary={loadObj.text} />
      </ListItem>
      <ListItem button onClick={props.updateStateFunc[2]}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary={skillsObj.text} />
      </ListItem>
      <ListItem button onClick={props.updateStateFunc[4]}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary={botObj.text} />
      </ListItem>
    </div>
  )
}

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
