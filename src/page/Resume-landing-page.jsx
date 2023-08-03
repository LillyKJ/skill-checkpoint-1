import Navigator from "../component/Navbar"
import Passion from "../component/passion"
import Portfolio from "../component/Portfolio"
import Contact from "../component/Contact"
import About from "../component/About"
import Footer from "../component/Footer"

function Homepage (){
    return (
        <div>
            <Navigator/>
            <About/>
            <Passion/>
            <Portfolio/>
            <Contact/>
            <Footer/>
        </div>
    )
}

export default Homepage