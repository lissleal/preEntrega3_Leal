const express = require ("express")
const app = express()

app.use(express.urlencoded({ extended:true}))

const PORT = 8080

const productos = [
    {id: "1", nombre: "Arroz", precio: "1000", stock:"30"},
    {id: "2", nombre: "Pasta", precio: "900", stock:"45"},
    {id: "3", nombre: "Atun", precio: "1200", stock:"35"},
    {id: "4", nombre: "Chocolate", precio: "1300", stock:"28"},
    {id: "5", nombre: "Mayonesa", precio: "2500", stock:"35"},
    {id: "6", nombre: "Cereal", precio: "3300", stock:"34"},
    {id: "7", nombre: "Carne", precio: "4000", stock:"67"},
    {id: "8", nombre: "Yogurt", precio: "250", stock:"45"},
    {id: "9", nombre: "Helado", precio: "2000", stock:"56"},
    {id: "10", nombre: "Aceitunas", precio: "1300", stock:"13"}
]

app.get("/products", (req,res)=>{

    let limit = parseInt(req.query.limit)
    if (!limit){
        res.send(productos)
    }
    let productosFiltrados = productos.filter((producto) => producto.id <= limit)
    if(productosFiltrados.length === 0) return res.send({error: "Error no se encontraron productos que cumplan con el criterio"})
    res.send(productosFiltrados)
})
app.get("/products/:pId", (req,res)=>{
    let idProducto = req.params.pId
    let producto = productos.find((u) => u.id === idProducto)
    if(!producto) return res.send({error: "Error no se ubica el producto"})
    res.send(producto)
})


app.listen(PORT, ()=>{
    console.log(`Server escuchando en ${PORT}`)
})