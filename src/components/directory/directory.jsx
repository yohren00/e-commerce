import React, { useState } from "react";
import DirectoryData from "./directory.data";
import MenuItem from "../menu-item/menu-item";
import "./directory.styles.scss";

export default function Directory() {
    const [data, setData] = useState(DirectoryData);

    return <>
        <div className="directory-menu">
            {
                data.map(({ id, ...sectionsProps }) => (
                    <MenuItem key={id} {...sectionsProps} />
                ))
            }
        </div>
    </>
}