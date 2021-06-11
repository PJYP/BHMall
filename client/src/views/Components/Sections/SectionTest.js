import classes from "*.module.css";
import React, {Component} from "react";

export default function SectionTest(){
    return(
        <div className={classes.section}>
            <div className={classes.container}></div>
        </div>
    );
}