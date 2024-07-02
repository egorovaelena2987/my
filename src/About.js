import { useEffect, useState } from "react";
import LoaderPage from "./Loader/LoaderPage";

function About() {
    const [stateLoader, setStateLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setStateLoader(false), 2000);
    return () => clearTimeout(timer)
  }, [])
  
    return(<div className="about"> 
    <div>
        {stateLoader && <LoaderPage/>}
      </div>
        <div className="picture">
        <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2748&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width= "500px" alt="restaurant"/>
        </div>
        <div>
        <h1>About us</h1>
        <h2>Who We Are</h2>
        <p>Favorite Poke celebrates the global epicurean experience with its award-winning magazine, website, social platforms, newsletters, podcasts, premium events such as the Favorite Poke Classic in Aspen, and accolades like its annual Best New Chef awards.</p>
        <p>With rigorously tested recipes and the most trusted restaurant, drinks, culinary travel, and home coverage, the brand inspires and empowers people to discover, create, and devour the best in food and drink—every day and everywhere.</p>
        <h2>Our History</h2>
        <p>Favorite Poke got its start in 1998.</p>
        <p>After a seven-year search for investors, the original group of five founders Robert and Lindy Kenyon, Peter Jones, Ariane Batterberry, and her husband, Michael — convinced publisher Hugh Hefner to print the preview issue of The International Review of Favorite Poke as a special 18-page insert in the March 1998 issue of Playboy.</p>
        <p>Favorite Poke heralded a new era of dining in America.</p>
        </div>
        </div>
    )
}
export default About;