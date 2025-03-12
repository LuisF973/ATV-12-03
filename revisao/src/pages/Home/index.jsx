import React from "react";
import Aside from "../../components/Aside";
import Main from "../../components/Main";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

function Home() {

    return (
        <div>
           
           <Header />
              <Main />
                <Aside />
              <Footer />

        </div>
    );
}

export default Home;