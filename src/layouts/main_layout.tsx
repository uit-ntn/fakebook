import Header from "../components/Header";
import Footer from "../components/Footer";


const MainLayout = ({ children }: any) => {
    return (<>
        <Header></Header>
        <span>{children}</span>
        <Footer></Footer>
    </>

    )
}


export default MainLayout;