import {
  MenuContainer,
  CollapsibleMenu,
  CollapsibleTitle,
  CollapsibleMenuContainer,
  UpIcon,
  DownIcon,
} from './menu-collapsible.styles';
import MenuItem from '../menu-item/menu-item.component';

import MENU_DATA from '../../menu-data';

const MenuCollapsible = () => {
  return (
    <MenuContainer>
      {Object.keys(MENU_DATA).map((title) => {
        const menuItem = MENU_DATA[title];

        return (
          <CollapsibleMenu
            key={menuItem.title}
            trigger={
              <CollapsibleMenuContainer>
                <CollapsibleTitle>{menuItem.title}</CollapsibleTitle>
                <DownIcon />
              </CollapsibleMenuContainer>
            }
            triggerWhenOpen={
              <CollapsibleMenuContainer>
                <CollapsibleTitle>{menuItem.title}</CollapsibleTitle>
                <UpIcon />
              </CollapsibleMenuContainer>
            }
            triggerStyle={{}}>
            {menuItem.items.map((el) => (
              <MenuItem key={el.id} menuItem={el} />
            ))}
          </CollapsibleMenu>
        );
      })}
    </MenuContainer>
  );
};

export default MenuCollapsible;
