import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../My stylesheet/Musicplayer.css'

export const Icon = ({icon, css}) => {
    return (
        <FontAwesomeIcon className={css} icon={icon}/>
    )
}