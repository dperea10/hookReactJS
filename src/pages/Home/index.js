import React, { useState} from 'react';
import { Button, Card, Container, Grid, TextField, Typography } from '@material-ui/core';
import styles from './styles';
import { MovieIcon } from '../../icons';


export default () => {


    const [searchText, setSearchText] = useState('');
    const classes = styles();

    const handleSearchChange = event => {
        setSearchText(event.target.value)
    };

    const handleSearchTextClick  = event => {
        console.info(10)
    }
    const handleCleanText = event => {
        console.info(12)
    }


return(

    <Container className = {classes.container} > 
        <Card className = {classes.cardContainer}>
            <Grid className = {classes.titleGridContainer}>
                <Grid>
                    <Typography className = {classes.title}>Bienvenidos</Typography>
                </Grid>

                <Grid>
                    <MovieIcon className = {classes.movieIcon}></MovieIcon>
                </Grid>
                
            </Grid>

                <TextField

                    value = {searchText}
                    placeholder = "Buscar..."
                    className = {classes.textFieldSearch}
                    onChange={handleSearchChange}

                    />
                <Grid className = {classes.buttonsContainer}>
                    <Button variant = "contained" color = "primary" size= "large" onClick = {handleSearchTextClick}>Buscar</Button>
                    <Button variant = "contained" className = {classes.searchButton} onClick = {handleCleanText}> Limpiar</Button>
                </Grid>

        </Card>

    </Container>
    
    )
    
} 
