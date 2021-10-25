import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import TimelineIcon from '@material-ui/icons/Timeline';
import StarRateIcon from '@material-ui/icons/StarRate';
import ChatIcon from '@material-ui/icons/Chat';

const homeObj = {
  key: 'HOME',
  text: "ホーム"
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
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary={homeObj.text} />
      </ListItem>
      <ListItem button onClick={props.updateStateFunc[1]}>
        <ListItemIcon>
          <TimelineIcon />
        </ListItemIcon>
        <ListItemText primary={loadObj.text} />
      </ListItem>
      <ListItem button onClick={props.updateStateFunc[2]}>
        <ListItemIcon>
          <StarRateIcon />
        </ListItemIcon>
        <ListItemText primary={skillsObj.text} />
      </ListItem>
      {/* <ListItem button onClick={props.updateStateFunc[3]}>
        <ListItemIcon>
          <ChatIcon />
        </ListItemIcon>
        <ListItemText primary={botObj.text} />
      </ListItem> */}
    </div>
  )
}
