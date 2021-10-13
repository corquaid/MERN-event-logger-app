import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
import { postEvent } from "../api";
import styles from "../styles/main.module.css";

const CreateEvent = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setFocus,
    } = useForm();

    const history = useHistory();

    const onSubmit = async data => {
        await postEvent(data);
        history.push("/");
        setFocus("firstName");
    };

    const errorsArray = Object.entries(errors);

    return (
        <div className={styles.contentContainer}>
            <h1>Add an Event</h1>
            {errorsArray.map(error => {
                const name = error[0];
                return (
                    <ErrorMessage
                        errors={errors}
                        name={name}
                        render={({ message }) => <p className={styles.errorMessage}>{message}</p>}
                    />
                );
            })}
            <form className={styles.formContainer} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="email">
                        First Name
                    </label>
                    <input
                        className={styles.input}
                        type="text"
                        autoFocus
                        {...register("firstName", {
                            required: "First name is required",
                        })}
                    />
                    <label className={styles.label} htmlFor="email">
                        Last Name
                    </label>
                    <input
                        className={styles.input}
                        type="text"
                        {...register("lastName", {
                            required: "Last name is required",
                        })}
                    />
                    <label className={styles.label} htmlFor="email">
                        Email
                    </label>
                    <input
                        className={styles.input}
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Invalid email address",
                            },
                        })}
                    />
                    <label className={styles.label} htmlFor="password">
                        Event Date
                    </label>
                    <input
                        className={styles.input}
                        type="date"
                        {...register("date", {
                            required: "Date is required",
                        })}
                    />
                    <input className={styles.button} type="submit" />
                </div>
                <div className={styles.linkContainer}>
                    <Link to="/">Back to Event List</Link>
                </div>
            </form>
        </div>
    );
};

export default CreateEvent;
