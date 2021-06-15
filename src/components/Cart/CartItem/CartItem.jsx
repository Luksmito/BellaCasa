import React, {useState} from 'react'
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core'

import useStyles from './styles.js'

const CartItem = ({ cart ,item, handleRemoverCarrinho, onAlterarQtyProduto, calculaSubTotal }) => {
    const classes = useStyles()
    const [qt, setQt] = useState(item.qty)

    const handleqt = (id, qty) => {
        onAlterarQtyProduto(id, qty)
        setQt(qty)
        calculaSubTotal(cart)
    }

    return (
        <Card>
            <CardMedia image={item.imagem} alt={item.nome} className={classes.media}/>
            <CardContent className={classes.cardContent}>
                <Typography variant="h4">{item.nome}</Typography>
                <Typography variant="h5">{item.preco}</Typography>
            </CardContent>  
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Button type="button" size="small" onClick={() => handleqt(item.id, item.qty - 1) }>-</Button>
                    <Typography>{qt}</Typography>
                    <Button type="button" size="small" onClick={() => handleqt(item.id, item.qty + 1)}>+</Button>
                </div>
                <Button onClick={() => handleRemoverCarrinho(item.id)} variant="contained" type="button" color="secondary">Remover</Button>
            </CardActions>  
        </Card>
    )
}

export default CartItem
