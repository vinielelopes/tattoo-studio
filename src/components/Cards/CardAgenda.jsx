import React from "react";
import "./CardAgenda.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Card(props) {
  const [hidden, setHidden] = useState(true);
  const [confirm, setConfirm] = useState(true);
  const [id, setId] = useState("");
  const [descricao, setDescricao] = useState("");
  const [date, setData] = useState("");
  const [horario, setHorario] = useState("");
  const [tatuador_id, setTatuador] = useState("");
  const [cliente_id, setCliente] = useState("");
  const [preco, setPreco] = useState("");

  let dataFormat = new Date(date);
  let data =
    dataFormat.getDate() +
    1 +
    "-" +
    (dataFormat.getMonth() + 1) +
    "-" +
    dataFormat.getFullYear();

  const updateData = (e) => {
    e.preventDefault();
    axios.put(
      `https://tattoo-api-squad7-resilia.herokuapp.com/agendamento/${id}`,
      {
        descricao,
        data,
        horario,
        tatuador_id,
        cliente_id,
        preco,
      }
    );
    alert("Atualização concluída! Atualize a página.");
  };

  const deleteData = (id) => {
    axios.delete(
      `https://tattoo-api-squad7-resilia.herokuapp.com/agendamento/${id}`
    );
  };

  console.log(hidden)

  return (
    <div className="agendamentos">
      <div className="agenda1">
        {!confirm ? <h2>✅ </h2> : null}
        <h6><strong>ID:</strong> {props.id}</h6>
        <h6><strong>Descrição:</strong> {props.descricao}</h6>
        <h6><strong>Data:</strong> {props.data}</h6>
        <h6><strong>Horário:</strong> {props.horario}</h6>
        <h6><strong>ID do Tatuador:</strong> {props.tatuador_id}</h6>
        <h6><strong>ID do cliente:</strong> {props.cliente_id}</h6>
        <h6><strong>Preço:</strong> {props.preco}</h6>
        <button onClick={() => deleteData(props.id)} className="x">
          X
        </button>
      </div>
      <div className="altConf">
        <button onClick={() => setConfirm((s) => !s)} className="conf">
          Confirmar{" "}
        </button>
        <button onClick={() => setHidden((s) => !s)} className="alt">
          {" "}
          Editar
        </button>
        {!hidden ? (
          <div className="alterar">
            <input
              placeholder="ID"
              onChange={(e) => setId(e.target.value)}
              type="text"
            ></input>
            <input
              placeholder="Descricao"
              onChange={(e) => setDescricao(e.target.value)}
              type="text"
            ></input>
            <input
              placeholder="Data"
              onChange={(e) => setData(e.target.value)}
              type="date"
            ></input>
            <input
              placeholder="Horario"
              onChange={(e) => setHorario(e.target.value)}
              type="time"
            ></input>
            <input
              placeholder="ID do Tatuador"
              onChange={(e) => setTatuador(e.target.value)}
              type="text"
            ></input>
            <input
              placeholder="ID do Cliente"
              onChange={(e) => setCliente(e.target.value)}
              type="text"
            ></input>
            <input
              placeholder="Preço"
              onChange={(e) => setPreco(e.target.value)}
              type="text"
            ></input>

            <button type="submit" onClick={updateData} className="botao">
              {" "}
              Salvar
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}