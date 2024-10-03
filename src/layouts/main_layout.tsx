import Header from "../components/Header";
import Footer from "../components/Footer";

interface Props {
    children: React.ReactNode;
}

const MainLayout = ({ children }: Props) => {
    return (<>
        <Header></Header>
        <span>{children}</span>
        <Footer></Footer>
    </>

    )
}


export default MainLayout;