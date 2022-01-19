const db = require("../db");

class PostController {

    async createPost(req, res) {

        const { title, content, userId } = req.body;

        const newPost = await db.query(
            "INSERT INTO posts (title, content, person_Id) VALUES ($1, $2, $3) RETURNING *",
            [title, content, userId]
        );

        res.json(newPost.rows?.at(0));
    }

    async getPostsByUser(req, res) {

        const { userId } = req.query;

        const posts = await db.query(
            "SELECT * FROM posts WHERE person_id = $1",
            [userId]
        );

        res.json(posts.rows);

    }

}

module.exports = new PostController();