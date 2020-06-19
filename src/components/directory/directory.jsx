import React, { useState } from "react";
import { useSelector } from "react-redux";

import MenuItem from "../menu-item/menu-item";
import { selectDirectorySections } from "../../redux/directory/directory.selectors.js";

import "./directory.styles.scss";

export default function Directory() {
    // const [data, setData] = useState(DirectoryData);

    const directorySections = useSelector(state => selectDirectorySections(state));

    return <>
        <div className="directory-menu">
            {
                directorySections.map(({ id, ...sectionsProps }) => (
                    <MenuItem key={id} {...sectionsProps} />
                ))
            }
        </div>
    </>
}