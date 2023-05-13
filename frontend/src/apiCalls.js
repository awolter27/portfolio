const URL = process.env.REACT_APP_NODE_ENV === "production" ? "https://portfolio-p5fn.onrender.com" : "http://localhost:4000";

export const aboutLoader = async () => {
    const response = await fetch(`${URL}/about`);
    const about = await response.json();
    return (
        about
    );
}

export const projectsLoader = async () => {
    const response = await fetch(`${URL}/projects`);
    const projects = await response.json();
    return (
        projects
    );
}

export const contactLoader = async () => {
    const response = await fetch(`${URL}/contact`);
    const contact = await response.json();
    return (
        contact
    );
}