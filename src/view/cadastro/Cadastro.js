
import React, { Component } from 'react'

import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { green } from '@material-ui/core/colors';
import { Divider } from '@material-ui/core';


/*
Informações de paciente:
• Nome - Texto (100);
• CPF – alfanumérico(11);
• E-mail – alfanumérico(100);
• Data_Nascimento – date;
• Gênero – Texto(15);
• Telefone – alfanumérico(15);
• Logradouro – alfanumérico(180);
• Número – alfanumérico (10);Mateus da Silva Gasparotto
• Complemento – alfanumérico(100);
• Bairro – alfanumérico(100);
• Cidade – alfanumérico(100);
*/


const ColorButton = withStyles(theme => ({
    root: {
        color: '#fff',
        backgroundColor: green[500],
        '&:hover': {
            backgroundColor: green[700]
        }
    }
}))(Button)

class Cadastro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cep:'',
            logradouro:'',
            numero:'',
            complemento:'',
            bairro:'',
            localidade:''
        };
    }

    findCep = (cep) =>{
        if(cep.length === 8){
            fetch('https://viacep.com.br/ws/'+cep+'/json')
            .then(response => response.json())
            .then(data => {
                Object.keys(data).map((key) => {
                    this.setState({[key]: data[key]});
                })
            })
            .catch(error =>{
                console.log(error);
            });
        }  
    }

    render () {
        const {logradouro,numero,complemento,bairro,localidade} = this.state;
        return (
            <Grid>
            <Container component="main" maxWidht="xs">
                <Grid className="mt-md-5">
                    <Typography className="mt-3 font-weight-normal" component="h1" variant="h6">Informações Basicas</Typography>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="name"
                            name="name"
                            label="Nome"
                            fullWidth
                            autoComplete="given-name"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="cpf"
                            name="cpf"
                            label="CPF"
                            fullWidth
                            autoComplete=""
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="email"
                            name="email"
                            label="E-mail"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="date"
                            name="date"
                            label="Data de nascimento"
                            fullWidth
                        />

                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            type="gener"
                            id="gener"
                            name="gener"
                            label="Gênero"
                            fullWidth
                            autoComplete=""
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            type="telephone"
                            id="telephone"
                            name="telephone"
                            label="Telefone"
                            fullWidth
                            autoComplete=""
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid className="mt-md-3">
                            <Typography className="mt-3 font-weight-normal" component="h1" variant="h6">Endereço Residencial</Typography>
                        </Grid>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="cep"
                                    name="cep"
                                    label="CEP"
                                    fullWidth
                                    autoComplete=""
                                    onChange={(e) => this.findCep(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    disabled="true"
                                    id="address1"
                                    name="address1"
                                    label="Endereço"
                                    fullWidth
                                    autoComplete=""
                                    value={logradouro}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    type=""
                                    id="number"
                                    name="number"
                                    label="Número"
                                    fullWidth
                                    autoComplete=""
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    type="complement"
                                    id="complement"
                                    name="complement"
                                    label="Complemento"
                                    fullWidth
                                    autoComplete=""
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    disabled="true"
                                    type=""
                                    id="bairro"
                                    name="bairro"
                                    label="Bairro"
                                    fullWidth
                                    autoComplete=""
                                    value={bairro}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    disabled="true"
                                    id="city"
                                    name="city"
                                    label="Cidade"
                                    fullWidth
                                    autoComplete=""
                                    value={localidade}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button
                                    type="button"
                                    variant="contained"
                                    fullWidht
                                    color="primary"
                                    size="large"
                                    className="mt-md-3"
                                >
                                    Salvar
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <ColorButton
                                    type="button"
                                    variant="contained"
                                    fullWidht
                                    color="primary"
                                    size="large"
                                    className="mt-md-3"
                                >
                                    Cancelar
                                </ColorButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Grid>

        )
    }

}

export default Cadastro;
