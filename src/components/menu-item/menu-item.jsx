import React from "react";
import "./menu-item.styles.scss";
import { withRouter, Link } from "react-router-dom";


const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    return <>
        <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            {/* <Link className={`${size} menu-item`} to={linkUrl}> */}
            <div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
            {/* </Link> */}
        </div>
    </>
}

export default withRouter(MenuItem);