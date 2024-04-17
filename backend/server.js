import app from "./app.js";
const port = 5000;
app.listen(process.env.PORT, () => {
    console.log(`server running On port ${process.env.PORT}`);
})