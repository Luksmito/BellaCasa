import React, { useState, useEffect } from 'react';
import { Grid, TextField } from '@material-ui/core';

import Produto from './Produto/Produto';
import useStyles from './styles';



const Produtos = ({ produtos, onAddCarrinho, setProdutos, fetchProdutos }) => {
    const classes = useStyles();
    
    const inputPesquisa = ({ target }) => {
        if (!target.value) {
            fetchProdutos()
            return
        }

        const filterProdutos = produtos.filter(({nome}) =>  nome.includes(target.value))
        setProdutos(filterProdutos)
    }

    return(
        <main className={classes.content}>
            <TextField type="text" className={classes.input} spacing={4} id="standard-basic" label="Pesquise por produtos" onChange={inputPesquisa}/>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
            {produtos.map((produto) => (
                <Grid item key={produto.id} xs={12} sm={6} md={4} lg={3}>
                    <Produto produto = {produto} onAddCarrinho={onAddCarrinho}/>
                </Grid>
            ))}
            </Grid>
        </main>
    )
    
}

export default Produtos;