import React, { useState } from 'react';
import {Container, Typography, Button, Grid} from '@material-ui/core'
import CartItem from './CartItem/CartItem'
import { Link } from'react-router-dom'

import useStyles from './styles'

const Cart = ({ cart, onAlterarQtyProduto, onRemoverCarrinho, onEsvaziarCarrinho }) => {
    
    const vazio = !cart.length
    const classes = useStyles()
    const [subTotal, setSubTotal] = useState("")

    const CarrinhoVazio = () => {
        return(
        <Typography variant="subtitle1">Você não tem itens no seu carrinho
            <Link to="/" className={classes.link}> comece a adicionar alguns produtos</Link>
        </Typography>
        )
    }
    
    function calculaSubTotal (carrinho) {
        var valor = 0
        carrinho.map((item) => {
            valor += item.precoNumero*item.qty
        })
        var valorString = valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
        setSubTotal(valorString)
        return subTotal
    }

    const Carrinho = () => {
        return(
            <>
        <Grid container spacing={3}>
            {cart.map((item) => (
                <Grid item xs={12} sm={4} key={item.id}>
                    <CartItem cart={cart} calculaSubTotal={calculaSubTotal}  item={item} onAlterarQtyProduto={onAlterarQtyProduto} handleRemoverCarrinho={onRemoverCarrinho}/>
                </Grid>
            ))}
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant="h4">Subtotal: {calculaSubTotal(cart)}</Typography>
            <div>
                <Button className={classes.emptyButton} onClick={onEsvaziarCarrinho} size="large" type="button" variant="contained" color="secondary">
                    Esvaziar carrinho
                </Button>
                <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">
                    Finalizar compra
                </Button>
            </div>
        </div>
        </>
        )
        
    }

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Seu carrinho</Typography>
            { vazio ? <CarrinhoVazio/> : <Carrinho />}
        </Container>
    )
}

export default Cart