import {authLoginAddress} from "../services/api";

export const genRequest = async (req) => {
    try {
        const response = await fetch(req);

        return checkResponse(response);
    } catch (error) {
        console.error(error)
    }

    return undefined;
};

const checkResponse = (response) => {
    if (!response.ok) {
        console.debug(response);

        throw new Error("network response was not ok");
    }
    return response.json();
};

