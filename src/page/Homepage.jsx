import Navigator from "../component/Navbar"
import Intro from "../component/Intro"
import Passion from "../component/passion"
import Portfolio from "../component/Portfolio"
import Contact from "../component/Contact"

function Homepage (){
    return (
        <div>
            <Navigator/>
            <Intro/>
            <Passion/>
            <Portfolio/>
            <Contact/>
        </div>
    )
}

export default Homepage