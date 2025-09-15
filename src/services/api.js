export async function getUsers() {
    const res = await fetch("http://localhost:8080/api/users");
    return res.json();
}