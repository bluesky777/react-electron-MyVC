import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Select from "react-select";
import axios from "axios";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";

class SelectColegio extends Component {
  state = {
    colegios: {},
    col_seleccionado: {},
    redirect: null,
  };

  constructor(props) {
    super(props);
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    const url = "https://micolevirtual.com/app/listado_colegios.php";
    axios.get(url).then((res) => {
      this.setState({ colegios: res.data });
    });
  }

  async onSelect(e) {
    const col = JSON.stringify(e);
    localStorage.setItem('colegio', col);
    const url = 'http://localhost:4566/reports/datos-informes';
    const {data} = await axios.get(url)
    console.log(data);
    // cambiar a login
    this.props.history.push({pathname: '/panel', state: data});
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    } else {
      return (
        <Container>
          <Row>
            <Col>Selecciona tu colegio</Col>
            <Col>
              <Select
                onChange={this.onSelect}
                getOptionLabel={(option) => option.nombre_colegio}
                getOptionValue={(option) => option.url_colegio}
                options={this.state.colegios}
              ></Select>
            </Col>
          </Row>
        </Container>
      );
    }
  }
}

export default withRouter(SelectColegio);