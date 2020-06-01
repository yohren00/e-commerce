import React, { useState } from "react";
import DirectoryData from "./directory.data";
import MenuItem from "../menu-item/menu-item";
import "./directory.styles.scss";

export default function Directory() {
    const [data, setData] = useState(DirectoryData);
    console.log(DirectoryData);

    return <>
        <div className="directory-menu">
            {
                data.map(e => (
                    <MenuItem key={e.id} title={e.title} img={e.imageUrl} size={e.size} />
                ))
            }
        </div>
    </>
}