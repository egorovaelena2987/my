import { useState } from "react";
import { data } from './data';
import Page from "./Page";
import Buttons from "./Buttons";

function Menu() {
        const [menu, setMenu] = useState(data);
        const chosenMenu = (searchTerm) => {
          const newMenu = data.filter(element => element.searchTerm === searchTerm);
          setMenu(newMenu)
        }
        return (<div>
          <div className="cont">
            <h2 className="back">Our menu</h2>
          </div>
            <Buttons filteredMenu={chosenMenu}/>
            <Page restaurant={menu}/>
          </div>
        );
}
export default Menu;