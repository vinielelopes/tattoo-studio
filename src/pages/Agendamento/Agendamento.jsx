import React from 'react';
import "./Agendamento.css";
import axios from 'axios';
import { useState } from 'react'




function Agendamento() {
  const [name, setNome] = useState('');
  const [contact, setContato] = useState('');
  const [city, setCidade] = useState('');
  const [age, setIdade] = useState('');
  const [tatuador, setTatuador] = useState('');
  const [date, setData] = useState('');
  const [horario, setHorario] = useState('');
  const [descricao, setDescricao] = useState('');
  const tatuador_id = 4
  const cliente_id = 4
  let dataFormat = new Date (date);
  let data = ((dataFormat.getDate() + 1) + "-" + (dataFormat.getMonth() + 1) + "-" + dataFormat.getFullYear())

  const [preco, setValor] = useState('grande');
  const [id, setId] = useState(6);

  function onChangeValue(event) {
    setValor(event.target.value);
    console.log(event.target.value)
  }

  const postData = (e) => {
    setId(id + 1)
    console.log(id)
    e.preventDefault()
    axios.post(`https://tattoo-api-squad7-resilia.herokuapp.com/clients`, {
      id,
      name,
      contact,
      age,
      city

    } )
    axios.post (`https://tattoo-api-squad7-resilia.herokuapp.com/agendamento/tatuador/${tatuador}`, {
      descricao,
      data, 
      horario, 
      tatuador_id,
      cliente_id, 
      preco

    })
    
  }


    return (
      <div>
        <div className='form'>
        <form>
        <h1> Marque seu horário:</h1>

          <label>Nome:</label>
          <input placeholder='Nome' onChange={(e) => setNome(e.target.value)} type="text"></input>
          <label>Contato:</label>
          <input placeholder='Contato' onChange={(e) => setContato(e.target.value)} type="text"></input>
          <label>Idade:</label>
          <input placeholder='Idade' onChange={(e) => setIdade(e.target.value)} type="number"></input>
          <label>Cidade:</label>
          <input placeholder='Cidade' onChange={(e) => setCidade(e.target.value)} type="text"></input>
          <label>Data da tattoo:</label>
          <input placeholder='Data' onChange={(e) => setData(e.target.value)} type="date"></input>
          <label>Horário da tattoo:</label>
          <input placeholder='Horario' onChange={(e) => setHorario(e.target.value)} type="time"></input>
          <h4>Tatuadores:</h4>
          <div className='tatuadores'>
            <p>1- Felipe Moraes</p>
            <p>2- Lidia Souza</p>
            <p>3- Zoe Smith</p>

          </div>
          <br></br>
          <label>Digite o número do tatuador escolhido:</label>
          <input placeholder='Tatuador' onChange={(e) => setTatuador(e.target.value)} type="text"></input>
          <label>Descrição da Tatuagem:</label>
          <input placeholder='Descricao' onChange={(e) => setDescricao(e.target.value)} type="text"></input>
          
          <h4> Escolha o tamanho:</h4>

          <div onChange={onChangeValue} className='radio'>
          <label>Pequena (R$400)</label>
          <input type='radio' value='400' name='preco'checked={preco === '400'}/>
          <br></br>
          <label>Média (R$600)</label>
           <input type='radio' value='600' name='preco'checked={preco == '600'}/>
           <br></br>
          <label>Grande (R$800)</label>
          <input type='radio' value='800' name='preco'checked={preco === '800'}/>

          </div>
          
          <br></br>

          <button type='submit'  onClick={postData} className='botao'> Salvar</button>

        </form>

        </div>    
      </div>
      
    )
  }
  
  export default Agendamento;
  