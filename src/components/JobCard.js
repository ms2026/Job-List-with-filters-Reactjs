import React, { useState } from "react";
import "./Card.css";

function JobCard({ job }) {
    const [fade, setFade] = useState(false);
    return ( <
        div className = "card" >
        <
        div className = "cardHeader" >
        <
        img src = { job.logoUrl }
        width = "50px"
        height = "50px" / >
        <
        div className = "jobInfo" >
        <
        p className = "company" > { job.companyName } < /p>{" "} <
        p className = "role" > { job.jobRole } < /p>{" "} <
        p className = "location" > { job.location } < /p>{" "} <
        /div>{" "} <
        /div>{" "} <
        p className = "salary" > { " " }
        Estimated Salary: & #8377;{job.minJdSalary} {job.minJdSalary && `-`}{" "}

        {job.maxJdSalary} LPA

      </p>

      <div style= {
            { float: "left" } } >
        <
        h2 > About Company: < /h2>{" "} <
        h3 style = {
            { float: "left", marginTop: "-10px" } } > About us < /h3>{" "} <
        /div>{" "} <
        div style = {
            { float: "left", marginTop: "-20px" } } >
        <
        p className = { `fade-container ${fade ? "fade-out" : ""}` } > { " " } { job.jobDetailsFromCompany.slice(0, 350) } { " " } {
            job.jobDetailsFromCompany.length > 350 && ( <
                button className = "viewJob"
                onClick = {
                    () => {} } > View Job < /button>
            )
        } <
        /p> <
        /div>{" "} <
        div className = "exp" >
        <
        h4 className = "minExp" > Minimum Experience < /h4>{" "} <
        p style = {
            { marginTop: "-15px" } } > { " " } { job.minExp }
        years { " " } <
        /p>{" "} <
        /div>{" "} <
        button className = "applyBtn" > Easy Apply < /button> <
        br / >
        <
        button className = "refBtn" > Unlock referral asks < /button>{" "} <
        /div>
    );
}

export default JobCard;