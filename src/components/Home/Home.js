import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Ourportfolio from "./components/Ourportfolio";
import Ourteam from "./components/Ourteam";
import Responsive from "./components/Responsive";
import Services from "./components/Services";
import Subscribe from "./components/Subscribe";
import Testimonials from "./components/Testimonials";
import Thuonghieu from "./components/Thuonghieu";
import Wecreat from "./components/Wecreat";
import Wellcome from "./components/Wellcome";




export default function Home() {
    return (
       <div>
        <Menu />
        <Wellcome />
        <Responsive />
        <Services />
        <Wecreat />
        <Ourteam/>
        <Ourportfolio/>
        <Subscribe/>
        <Testimonials/>
        <Thuonghieu />
        <Contact/>
        <Footer />
       </div>
    )
}