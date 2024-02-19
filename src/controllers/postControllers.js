import { getPosts, createPost } from "../model/postModel.js";

const getAllPosts = async (req, res) => {
    try {
        const posts = await getPosts();
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ error: "Error al procesar la solicitud, compruebe la ruta" });
        console.error("Error al procesar la solicitud:", error);
    }
};
const createPosts = async (req, res) => {
    try {
        const post = req.body;
        const newPost = await createPost(post);
        console.log(req.body);
        res.status(201).json({ post: newPost });
    } catch (error) {
        res.status(500).json({ error: "Error al enviar la solicitud, verifique que lo datos esten completos" });
        console.error("Error al procesar la solicitud:", error);
    }
};

export { getAllPosts, createPosts };
