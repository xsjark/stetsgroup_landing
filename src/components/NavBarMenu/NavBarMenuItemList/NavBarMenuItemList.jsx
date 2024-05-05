import NavBarMenuItem from "../NavBarMenuItem/NavBarMenuItem";

const NavBarMenuItemList = ({ itemsJSON }) => (
    <>
        {Object.entries(itemsJSON).map(([title, items]) => (
            <NavBarMenuItem 
                key={title} 
                title={title} 
                items={items.items} 
                route={items.route && items.route}
            />
        ))}
    </>
);

export default NavBarMenuItemList;