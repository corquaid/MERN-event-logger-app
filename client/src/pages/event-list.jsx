import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/button";
import EventRow from "../components/event-row";
import styles from "../styles/main.module.css";
import { getEvents } from "../api";

const EventList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await getEvents();
            setItems(data);
        };
        getData();
    }, []);

    return (
        <div className={styles.contentContainer}>
            <h1>List of Events</h1>
            <div className={styles.gridContainer}>
                <div className={styles.rowContainer}>
                    <h3>Name</h3>
                    <h3>Surname</h3>
                    <h3>Email</h3>
                    <h3>Date Created</h3>
                </div>
                {items.length > 0 ? (
                    items.map(item => {
                        return (
                            <div data-testid="resolved" key={item.id}>
                                <EventRow user={item} />
                            </div>
                        );
                    })
                ) : (
                    <span data-testid="loading">Loading events...</span>
                )}

                <Link to="/create" style={{ color: "inherit", textDecoration: "inherit", cursor: "pointer" }}>
                    <Button text="Create New Event" />
                </Link>
            </div>
        </div>
    );
};

export default EventList;
