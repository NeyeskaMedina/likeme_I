export const validarPost = (req, res, next) => {
    const { data } = req.body;
    console.log(data);
    if (!posts.titulo || !posts.descripcion || !posts.url){
        res.status(400).json({error: 'Faltan datos en body para agregar el post.'})
    }
    next();
}