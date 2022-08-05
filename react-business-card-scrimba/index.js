import React from "react"
import ReactDOM from "react-dom"
import About from "./components/about"
import Info from "./components/info"
import Interest from "./components/interest"
import Footer from "./components/footer"


function Page() {
    return (
        <div>
            <Info />
            <About />
            <Interest />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))