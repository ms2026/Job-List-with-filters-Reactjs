import React, { useState } from "react";

const selectInputClasses =
    "border border-zinc-300 rounded-lg text-zinc-700 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500";

function Filters({ onCompanySearch }) {
    const [role, setRole] = useState("");
    const [numberOfEmployees, setNumberOfEmployees] = useState("");
    const [experience, setExperience] = useState("");
    const [remote, setRemote] = useState("");
    const [minimumBasePay, setMinimumBasePay] = useState("");

    const handleCompanySearch = (e) => {
        const { value } = e.target;
        onCompanySearch(value);
    };

    const handleRoleChange = (event) => {
        setRole(event.target.value);
    };

    const handleNumberOfEmployeesChange = (event) => {
        setNumberOfEmployees(event.target.value);
    };

    const handleExperienceChange = (event) => {
        setExperience(event.target.value);
    };

    const handleRemoteChange = (event) => {
        setRemote(event.target.value);
    };

    const handleMinimumBasePayChange = (event) => {
        setMinimumBasePay(event.target.value);
    };

    return ( <
        div className = "flex space-x-2 bg-white p-4 shadow-md" >
        <
        select className = { selectInputClasses }
        value = { role }
        onChange = { handleRoleChange } >
        <
        option value = "" > Roles < /option> <
        option value = "role1" > Role 1 < /option> <
        option value = "role2" > Role 2 < /option> { /* Add other options */ } <
        /select> <
        select className = { selectInputClasses }
        value = { numberOfEmployees }
        onChange = { handleNumberOfEmployeesChange } >
        <
        option value = "" > Number Of Employees < /option> <
        option value = "1-10" > 1 - 10 < /option> <
        option value = "11-50" > 11 - 50 < /option> { /* Add other options */ } <
        /select> <
        select className = { selectInputClasses }
        value = { experience }
        onChange = { handleExperienceChange } >
        <
        option value = "" > Experience < /option> <
        option value = "0-1" > 0 - 1 < /option> <
        option value = "1-3" > 1 - 3 < /option> { /* Add other options */ } <
        /select> <
        select className = { selectInputClasses }
        value = { remote }
        onChange = { handleRemoteChange } >
        <
        option value = "" > Remote < /option> <
        option value = "yes" > Yes < /option> <
        option value = "no" > No < /option> { /* Add other options */ } <
        /select> <
        select className = { selectInputClasses }
        value = { minimumBasePay }
        onChange = { handleMinimumBasePayChange } >
        <
        option value = "" > Minimum Base Pay Salary < /option> <
        option value = "10000" > 10, 000 < /option> <
        option value = "20000" > 20, 000 < /option> { /* Add other options */ } <
        /select> <
        div >
        <
        input placeholder = "Search by company name"
        onChange = { handleCompanySearch }
        /> <
        /div> <
        /div>
    );
}

export default Filters;