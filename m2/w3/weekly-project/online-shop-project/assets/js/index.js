const url       = "https://striveschool-api.herokuapp.com/api/product/";
const authKey   = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTRlMmI0MzMyNWM5NzAwMTg3ZmExODMiLCJpYXQiOjE2OTk3OTYzODEsImV4cCI6MTcwMTAwNTk4MX0.LesrujWtG58popo-p5-55UScJpjHYjtdgFtexcaWTcI";


async function fetchData() {
    const res = await fetch(url, {
        method: "GET",
        headers: {
            'Content-Type': "application/json",
            'Authorization': `Bearer ${authKey}`
        }
    });

    const data = await res.json();
    return data;
}