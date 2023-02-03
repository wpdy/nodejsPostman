const express = require('express')
const app = express()

app.use(express.json())

const books = [
    {id: 1, title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops", description: 'AAAAA' },
    {id: 2, title: "Mens Casual Slim Fit", description: 'BBBBB' },
    {id: 3, title: "Solid Gold Petite Micropave", description: 'CCCCC' }
]



//Get all Books
app.get('/api/books', (req, res) => {
    res.send(books)
})


// Get Book by ID
app.get('/api/books/:id', (req, res) => {
    const my_book = books.find(book => book.id === parseInt(req.params.id))
    if(!my_book) res.status(404).send('Not Found!!!')
    res.send(my_book)
})


//Enter new Book
app.post('/api/books', (req, res) => {
    const book = {
        id: books.length +1,
        title: req.body.title,
        description: req.body.description
    }

    books.push(book)
    res.send(books)
})



//Change book title and description
app.put('/api/books/:id', (req, res) => {
    const my_book = books.find(book => book.id === parseInt(req.params.id))
    if(!my_book) res.status(404).send('Not Found!!!')

    my_book.title = req.body.title
    my_book.description = req.body.description
    res.send(my_book)
})



//Delete book by ID
app.delete('/api/books/:id', (req, res) => {
    const my_book = books.find(book => book.id === parseInt(req.params.id))
    if(!my_book) res.status(404).send('Not Found!!!')

    const book_index = books.indexOf(my_book)
    books.splice(book_index, 1)
    
    res.send(my_book)
})





// const products = [
//     {id: 1, title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops" },
//     {id: 2, title: "Mens Casual Slim Fit" },
//     {id: 3, title: "Solid Gold Petite Micropave" }
// ]

// app.get('/api/products', (req, res) => {
//     res.send(products)
// })


// app.get('/api/products/:id', (req, res) => {
//     const my_product = products.find(product => product.id === parseInt(req.params.id))
//     if(!my_product) res.status(404).send('Not Found!!!')
//     res.send(my_product)
// })


// app.post('/api/products', (req, res) => {
//     const product = {
//         id: products.length +1,
//         title: req.body.title
//     }

//     products.push(product)
//     res.send(products)
// })


// app.put('/api/products/:id', (req, res) => {
//     const my_product = products.find(product => product.id === parseInt(req.params.id))
//     if(!my_product) res.status(404).send('Not Found!!!')

//     my_product.title = req.body.title
//     res.send(my_product)
// })


// app.delete('/api/products/:id', (req, res) => {
//     const my_product = products.find(product => product.id === parseInt(req.params.id))
//     if(!my_product) res.status(404).send('Not Found!!!')

//     const product_index = products.indexOf(my_product)
//     products.splice(product_index, 1)
    
//     res.send(my_product)
// })




const PORT = 5001


app.listen(PORT, ()=> {
    console.log(`Server is running on ${PORT}`)
})