const db = require("../db");

class UserController {

    async createUser(req, res) {

        const { name, surname } = req.body;

        const newPerson = await db.query(`INSERT INTO persons (name, surname) values($1, $2) RETURNING *`, [name, surname]);

        res.json(newPerson.rows?.at(0));

    }

    async getUsers(req, res) {
        
        const presons = await db.query("SELECT * FROM persons")

        res.json(presons.rows)

    }

    async getOneUser(req, res) {

        const userId = req.params.id

        const personInfo = await db.query("SELECT * FROM persons WHERE person_id = $1", [userId])

        res.json(personInfo.rows?.at(0))

    }

    async updateUser(req, res) {

        const { id, name, surname } = req.body;

        const updatedPerson = await db.query(
            "UPDATE persons SET name = $2, surname = $3 WHERE person_id = $1 RETURNING *",
            [id, name, surname]
        );

        res.json(updatedPerson.rows?.at(0));
    }

    async deleteUser(req, res) {

        const { id } = req.params;

        const deletedPerson = await db.query(
            "DELETE FROM persons WHERE person_id = $1",
            [id]
        );

        res.json("User has been deleted succesfully!")

    }

};

module.exports = new UserController();