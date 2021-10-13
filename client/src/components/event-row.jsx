import React from "react";
import styles from "../styles/event-row.module.css";

const EventRow = ({ user }) => {
    const { firstName, lastName, email, date } = user;
    const dateFormatter = input => {
        const datePart = input.match(/\d+/g),
            year = datePart[0].substring(2),
            month = datePart[1],
            day = datePart[2];

        return day + "/" + month + "/" + year;
    };

    const formattedDate = dateFormatter(date);

    return (
        <div className={styles.rowContainer}>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{email}</p>
            <p>{formattedDate}</p>
        </div>
    );
};

export default EventRow;
