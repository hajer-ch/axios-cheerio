const port =3000;
const app = require('./backend/app');
app.listen(port, ()=>{console.log(`App listening on PORT ${port}`)});
