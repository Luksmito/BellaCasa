import React, { useState, useEffect } from 'react'
import api from './services/api'
import { Produtos, Navbar, Cart, Checkout } from './components'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'




const App = () => {

    const [produtos, setProdutos] = useState([])
    const [cart, setCart] = useState([])
    const [tamcart, setTamcart] = useState(0)

    const updateCarrinhoLocalStorage = (carrinho) => {
        localStorage.setItem('carrinhoBellaCasa', JSON.stringify(carrinho))
    }

    const fetchProdutos = () => {
        api.get('lista-produtos').then(response => {
            const dados = response.data
            setProdutos(dados)
            console.log(dados)
        })
    }

    const fetchCarrinho = () => {
        const localStorageCart = JSON.parse(localStorage.getItem('carrinhoBellaCasa'))
        setCart(localStorage.getItem('carrinhoBellaCasa') !== null ? localStorageCart : [])
        setTamcart(cart.length)
    }

    const handleEsvaziarCarrinho = () => {
        setCart([])
        setTamcart(0)
        updateCarrinhoLocalStorage([])
    }

    const handleAddCarrinho = (item, qty) => {
        var lista = []
        var itemcarrinho = { id: item._id, nome: item.nome, preco: item.preco, qty: qty, imagem: item.imagem, precoNumero: item.precoNumero }
        lista = cart
        var i = 0
        for (var x = 0; x < tamcart; x++) {
            if (lista[x].id === item._id) {
                lista[x].qty++
                i = 1
                setCart(lista)
                updateCarrinhoLocalStorage(cart)
                break
            }
        }
        if (!i) {
            lista[tamcart] = itemcarrinho
            setTamcart(tamcart + 1)
            setCart(lista)
            console.log(cart)
            updateCarrinhoLocalStorage(cart)
        }
    }

    const handleRemoverCarrinho = (id) => {
        var lista = cart
        for (var x = 0; x < lista.length; x++) {
            if (lista[x].id === id) {
                lista.splice(x, 1)
                setTamcart(tamcart - 1)
                setCart(lista)
                updateCarrinhoLocalStorage(cart)
                console.log("Item removido")
                break
            }
        }
    }

    const handleAlterarQtyProduto = (id, qty) => {
        var lista = cart
        for (var x = 0; x < tamcart; x++) {
            if (qty === 0) {
                handleRemoverCarrinho(id)
                break
            }
            if (lista[x].id === id) {
                lista[x].qty = qty
                updateCarrinhoLocalStorage(lista)
                setCart(lista)
            }

        }
    }


    useEffect(() => {
        fetchProdutos()
        fetchCarrinho()
    }, [])



    return (

        <Router>
            <div>
                <Navbar totalItems={tamcart} />
                <Switch>
                    <Route exact path="/">
                        <Produtos fetchProdutos={fetchProdutos} setProdutos={setProdutos} produtos={produtos} onAddCarrinho={handleAddCarrinho} />
                    </Route>
                    <Route exact path="/carrinho">
                        <Cart onEsvaziarCarrinho={handleEsvaziarCarrinho} cart={cart} onAlterarQtyProduto={handleAlterarQtyProduto} onRemoverCarrinho={handleRemoverCarrinho} />
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout/>
                    </Route>

                </Switch>
            </div>
        </Router>


)
}

export default App;
