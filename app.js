const express = require('express')
const cors = require('cors')

const app = express()

const sequelize = require('./util/db')

const Date = require('./models/date')
const Student = require('./models/student')
const Record = require('./models/record')

const attendence = require('./routes/routes')


app.use(cors())
app.use(express.json())


Student.create({name : "first"}).then(s => console.log(s)).catch(e => console.log(e))
Student.create({name : "second"}).then(s => console.log(s)).catch(e => console.log(e))
Student.create({name : "third"}).then(s => console.log(s)).catch(e => console.log(e))
Student.create({name : "fourth"}).then(s => console.log(s)).catch(e => console.log(e))



Date.belongsToMany(Student ,{ through : Record})
Student.belongsToMany(Date ,{ through : Record})


app.use('/student' ,attendence )

sequelize
.sync()
// .sync({force : true})
.then(()=>{

    app.listen(4000)
}).catch(e => console.log(e))
