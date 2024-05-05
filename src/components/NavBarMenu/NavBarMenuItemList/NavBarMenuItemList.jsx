import NavBarMenuItem from "../NavBarMenuItem/NavBarMenuItem";

const NavBarMenuItemList = ({ itemsJSON }) => (
    <>
        {Object.entries(itemsJSON).map(([title, items]) => (
            <NavBarMenuItem key={title} title={title} items={items.items} />
        ))}
    </>
);

export default NavBarMenuItemList;