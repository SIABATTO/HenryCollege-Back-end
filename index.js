const app = require("./src/app.js")
const { conn, Teachers, Students, Course } = require('./src/db.js');
const { getAllUsers } = require("./src/utils/auth0Utils.js");
const fs = require('fs');

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
    const populateDb = async () => {
        const users = await getAllUsers();
        const data = fs.readFileSync('src/controllers/forCourse/hardcode.json');
        const { courses } = JSON.parse(data);

        const usersPromises = users.map((user) => {
            const Model = user.user_metadata.userType === 'teacher' ? Teachers : Students;

            return Model.findOrCreate({
                where: {
                    email: user.email
                },
                defaults: {
                    firstName: user.user_metadata.firstName,
                    lastName: user.user_metadata.lastName,
                    phone: user.user_metadata.phone,
                    auth0Id: user.user_id.split('|')[1], // Remueve el 'auth0|' del id
                    emailVerified: user.email_verified,
                }
            })
        });

        await Promise.all(usersPromises);
        await Course.bulkCreate(courses);
    }

    populateDb()

    app.listen(3001, () => {
        console.log('%s listening at 3001'); // eslint-disable-line no-console
    });
});

