import {
  Card,
  Row,
  Col,
  Button,
  ButtonGroup,
  ToggleButton,
} from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Select from "react-select";

export default function PanelOptions(props) {
  const [TipoBoletin, setTipoBoletin] = useState(1);
  const [grupos, setGrupos] = useState([]);
  const [years, setYears] = useState([])
  const [year, setYear] = useState({})

  useEffect(() => {
    console.log(props.years);
    setGrupos(props.grupos);
    setYears(props.years);
  }, [props.grupos, props.years])

  const radios = [
    { name: "Tipo 1", value: "1", disabled: "" },
    { name: "Tipo 2", value: "2", disabled: "" },
    { name: "Tipo 3", value: "3", disabled: "disabled" },
    { name: "Tipo 4", value: "4", disabled: "disabled" },
  ];


  function onSelectYear(year) {
    setYear(year);
    props.onSelectYear(year);
  }
  function onSelectPeriodo(per) {
    console.log(per);
    props.onSelectPeriodo(per);
  }
  function onSelectGrupo(grupo) {
    console.log(grupo);
    props.onSelectGrupo(grupo);
  }

  function clickVerBoletin() {
    console.log(grupos);
    props.clickVerBoletin();
  }


  return (
    <Card className="m-2 p-2">
      <Row>
        <Col sm={4}>Tipo de boletín:</Col>
        <Col>
          <ButtonGroup toggle>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                type="radio"
                variant="primary"
                name="radio"
                value={radio.value}
                checked={setTipoBoletin === radio.value}
                onChange={(e) => {
                  setTipoBoletin(e.currentTarget.value);
                  console.log(TipoBoletin);
                }}
                disabled={radio.disabled}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>Elija Año:</Col>
        <Col>
          <Select
            onChange={onSelectYear}
            getOptionLabel={(option) => option.year}
            getOptionValue={(option) => option.id}
            options={years}
          ></Select>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>Elija Periodo:</Col>
        <Col>
          <Select
            onChange={onSelectPeriodo}
            getOptionLabel={(option) => option.numero}
            getOptionValue={(option) => option.id}
            options={year.periodos}
          ></Select>
        </Col>
      </Row>
      <Row>
        <Col sm={4}>Elija grupo:</Col>
        <Col>
          <Select
          onChange={onSelectGrupo}
            getOptionLabel={(option) => option.nombre}
            getOptionValue={(option) => option.id}
            options={grupos}
          ></Select>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button onClick={clickVerBoletin}>Ver boletines</Button>
        </Col>
      </Row>
    </Card>
  );
}
