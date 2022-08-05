import React from "react"

export default function Info() {
    return (
        <div className="info--main">
        <img className="info--img" src="../img/ProfileImg.jpeg" alt="Image of Erin Richards"/>
            <h1 className="info--header">Erin Richards</h1>
            <h3 className="info--subheader">Frontend Developer</h3>
                <a className="info--email" href="https://www.erin-richards.dev" target="_blank">erin-richards.dev</a>
                    <a className="info--btn--email btn" href="mailto: erinmrichards@yahoo.com"><i className="fa-solid fa-envelope info-fa"></i>Email</a>
                    <a className="info--btn--linkedin btn" href="https://www.linkedin.com/in/erin-richards-3178a7240/" target="_blank"><i className="fa-brands fa-linkedin info-fa"></i>LinkedIn</a>
        </div>
    )
}