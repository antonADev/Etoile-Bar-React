import {
  MenuItemContainer,
  MenuUl,
  MenuItemName,
  MenuItemPrice,
} from './menu-item.styles';

const MenuItem = ({ menuItem }) => {
  const { name, price } = menuItem;

  return (
    <MenuItemContainer>
      <MenuUl>
        <MenuItemName>{name}</MenuItemName>
        <MenuItemPrice>{price}</MenuItemPrice>
      </MenuUl>
      {/* <MenuUl>
      </MenuUl> */}
    </MenuItemContainer>
  );
};

export default MenuItem;
