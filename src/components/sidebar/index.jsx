import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { SettingsIcon, CalendarIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <List color="white" fontSize="1.2em" spacing={4}>
      <ListItem>
        <NavLink to="/">
          <ListIcon as={CalendarIcon} color="white" />
          List Gallery
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to="">
          <ListIcon as={SettingsIcon} color="white" />
          Setting
        </NavLink>
      </ListItem>
    </List>
  );
};

export default Sidebar;
