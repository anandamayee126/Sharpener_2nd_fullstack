const express = require('express');
const app = express();
const cors= require('cors');
const sequelize= require('./database/db');
const router= require('./routes/routes');
const student_db= require('./models/student_db');
const presence= require('./models/presence_db');

presence.hasMany(student_db);
student_db.belongsTo(presence);

app.use(cors());
app.use(express.json());
app.use('/student',router);

sequelize.sync().then(() => {
    app.listen(3000);
}).catch(err => {
    console.log(err);
})
