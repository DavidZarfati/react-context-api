import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function DefaultLayout() {
    return (
        <>
            <div className="d-flex">
                {/* <div className="navbar"> */}
                <Header />
                {/* </div> */}
                <div className="contenuto">
                    <main>
                        <Outlet />
                    </main>

                    <Footer />
                </div>
            </div>
        </>
    )
}