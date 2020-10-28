import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cep:'',
      logradouro:'',
      numero:'',
      complemento:'',
      bairro:'',
      localidade:'',
      uf:''
    };
 
  }

  componentDidMount() {

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



  handleSubmit = () => {
    console.log(this.state);
  }

  render() {
    const {logradouro,complemento,bairro,numero,localidade} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <form>
            <label>
              Cep:
              <input type="number" name="cep" onKeyUp={(e) => this.findCep(e.target.value)} />
            </label>
            <br />
            <label>
              Logradouro:
              <input type="text" name="logradouro" size="100" value={this.state.logradouro} onChange={(e) => this.handleChange(e)} />
            </label>
            <br />            
            <label>
              Número:
              <input type="text" name="numero" size="40" value={numero} onChange={(e) => this.handleChange(e)} />
            </label>
            <label>
              Complemento:
              <input type="text" name="complemento" size="40" value={complemento} onChange={(e) => this.handleChange(e)} />
            </label>
            <br />            
            <label>
              Bairro:
              <input type="text" name="bairro" size="30" value={bairro} onChange={(e) => this.handleChange(e)} />
            </label>
            <label>
              Municipio:
              <input type="text" name="localidade" size="60" value={localidade} onChange={(e) => this.handleChange(e)} />
            </label>
            <br />   
            <input type="button" value="Enviar" onClick={this.handleSubmit} />
          </form>
        </header>
      </div>
    );
  }

  handleChange = (event) => {
    const {name, value} = event.target; 
    this.setState({ name :value });
  }

}

export default App;