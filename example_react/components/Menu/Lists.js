import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from '@mui/material';
import CloudIcon from '@mui/icons-material/Cloud';
import DeckIcon from '@mui/icons-material/Deck';

const Lists = () => {
  return (
    <div>
      <List component="nav">
        <ListItem button>
          <ListItemIcon>
            <CloudIcon></CloudIcon>
          </ListItemIcon>
          <ListItemText primary="primer elemento" />
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            <DeckIcon />
          </ListItemIcon>
          <ListItemText primary="segundo elemento" />
        </ListItem>

        <Divider />
      </List>
    </div>
  );
};

export default Lists;
