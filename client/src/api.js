import axios from "axios";

export const getEvents = async () => {
    try {
        const result = await axios.get("http://localhost:5000/users/");
        return result.data;
    } catch (error) {
        console.log(error);
        alert("Oops! We couldn't fetch the events for you.");
    }
};

export const postEvent = async data => {
    try {
        const { firstName, lastName, email, date } = data;
        const newEvent = {
            firstName,
            lastName,
            email,
            date,
        };
        await axios.post("http://localhost:5000/users/add/", newEvent);
        alert("New event added!");
    } catch (error) {
        alert("Oops! Something went wrong. Please try again.");
    }
};
