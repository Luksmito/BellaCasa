import React from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core'
import { useForm, FormProvider } from 'react-hook-form'
import FormInput from './CustomTextField'

const AddressForm = () => {
    const methods = useForm()
    return (
        <>
            <Typography gutterbottom variant="h6">
                Endereço de entrega    
            </Typography>  
            <FormProvider {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <FormInput required name='Nome' label='Nome'/>
                        <FormInput required name='Sobrenome' label='Sobrenome'/>
                        <FormInput required name='Endereço' label='Endereço'/>
                        <FormInput required name='Email' label='Email'/>
                        <FormInput required name='Cidade' label='Cidade'/>
                        <FormInput required name='CEP' label='CEP'/>
                        <Grid item xs={12} sm={6}>
                            
                        </Grid>
                    </Grid>    
                </form>    
            </FormProvider> 
        </>
    )
}

export default AddressForm
