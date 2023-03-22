const app = require("./src/app.js")
const { conn, Teachers, Course } = require('./src/db.js');
const fs = require('fs');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
    const populateDb = async () => {
        const data = fs.readFileSync('src/controllers/forCourse/hardcode.json');
        const { courses, teachers } = JSON.parse(data);

        await Teachers.bulkCreate(teachers)
        await Course.bulkCreate(courses)
    }

    populateDb()

    app.listen(3001, () => {
        console.log('%s listening at 3001'); // eslint-disable-line no-console
    });
});

