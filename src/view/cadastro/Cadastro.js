
import React, { Component } from 'react'
import Container from '@material-ui/core/container';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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



class Cadastro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bairro: '',
            cidade: '',
            complemento: '',
            cpf: '',
            dataNascimento: '',
            email: '',
            genero: '',
            id: '',
            cep:'',
            logradouro: '',
            nome: '',
            numero: '',
            telefone: ''
        };
    }

    findCep = (cep) =>{
        if(cep.length === 8){
            fetch('https://viacep.com.br/ws/'+cep+'/json')
            .then(response => response.json())
            .then(data => {
                Object.keys(data).map((key) => {
                    if (key==="localidade"){
                        this.setState({"cidade": data[key]});
                    }else{
                    this.setState({[key]: data[key]});
                }
                })
            })
            .catch(error =>{
                console.log(error);
            });
        }  
    }

    render () {

        const handleChange = (e) =>{
            const {name, value} = e.target;
            this.setState({[name]:value});
        }

        const { bairro, cidade, complemento, cpf, dataNascimento, email, genero, id, cep, logradouro, nome, numero, telefone } = this.state;

          const save = () =>{
            /** adiciona os campos a serem salvos em uma unica variavel. 
                Note que os campos do servico e do formulario sao os mesmos entao nao é necessario repetir no formato "chave": "valor" */
            const Params = {
                bairro,
                cidade,
                complemento,
                cpf,
                dataNascimento,
                email,
                genero,
                id,
                logradouro,
                nome,
                numero,
                telefone
            };    
        
            /** adiciona o metodo e o corpo da requisicao*/
            
            const options = {
                method:'POST',
                headers: {
                    'Accept': 'application/json, text/plain',
                    'Content-Type': 'application/json; charset=utf-8',
                },
                mode: 'no-cors',
                body: JSON.stringify(Params),
            };
        
            /** realiza a requisicao */
            fetch("https://controle-pacientes-api.herokuapp.com/pacientes", options)
             //   .then(response => {console.log(response.json())})
              //  .catch(error => { console.log(error) });      
        }

        return (
            <Container component="main" maxWidht="xs">
                <Grid className="mt-md-5">
                    <Typography className="mt-3 font-weight-normal" component="h1" variant="h6">Informações Basicas</Typography>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="nome"
                            value={nome}
                            name="nome"
                            label="Nome"
                            fullWidth
                            autoComplete="given-name"
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="cpf"
                            value={cpf}
                            name="cpf"
                            label="CPF"
                            onChange={handleChange}
                            fullWidth
                            autoComplete=""
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            type="e-mail"
                            id="email"
                            value={email}
                            name="email"
                            label="E-mail"
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="dataNascimento"
                            value={dataNascimento}
                            name="dataNascimento"
                            label="Data de nascimento"
                            onChange={handleChange}
                            fullWidth
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                              }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            type="gener"
                            id="genero"
                            value={genero}
                            name="genero"
                            label="Gênero"
                            onChange={handleChange}
                            fullWidth
                            autoComplete=""
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            type="telephone"
                            id="telefone"
                            value={telefone}
                            name="telefone"
                            label="Telefone"
                            onChange={handleChange}
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
                                    value={cep}
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
                                    id="logradouro"
                                    name="logradouro"
                                    label="Endereço"
                                    onChange={handleChange}
                                    fullWidth
                                    autoComplete=""
                                    value={logradouro}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    type=""
                                    id="numero"
                                    value={numero}
                                    name="numero"
                                    onChange={handleChange}
                                    label="Número"
                                    fullWidth
                                    autoComplete=""
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    type="complement"
                                    id="complemento"
                                    value={complemento}
                                    name="complemento"
                                    label="Complemento"
                                    onChange={handleChange}
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
                                    onChange={handleChange}
                                    fullWidth
                                    autoComplete=""
                                    value={bairro}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    disabled="true"
                                    id="cidade"
                                    name="cidade"
                                    label="Cidade"
                                    onChange={handleChange}
                                    fullWidth
                                    autoComplete=""
                                    value={cidade}
                                />
                            </Grid>
                            <Grid style={{textAlign:"right"}} item xs={12}>
                                <Button style={{marginLeft: "10px", width: "123px"}}
                                    type="button"
                                    variant="contained"
                                    fullWidht
                                    color="secundary"
                                    size="large"
                                    className="mt-md-3"
                                >
                                    Cancelar
                                </Button>
                             
                                <Button style={{marginLeft: "10px", width: "123px"}}
                                    type="button"
                                    variant="contained"
                                    fullWidht
                                    color="primary"
                                    size="large"
                                    className="mt-md-3"
                                    onClick={save}
                                >
                                    Salvar
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

export default Cadastro;
