import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
//import axios from "../../utils/http";
import rutaNode from "../../utils/rutaNode";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "./Panel.css";
import BoletinAlumno from "../Informes/BoletinAlumno";
import PanelOptions from "./PanelOptions";

//pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Panel extends Component {
  state = {
    pageNumber: 1,
    numPages: null,
    ruta: rutaNode.ruta + "/documentos/documento 19-10-2020 21-09-25.pdf",
    radioValue: 1,
    grupos: [],
    years: [],
    year_id: 1,
    periodo_id: 1,
    grupo_id: 1
  };

  constructor(props) {
    super(props);
    
    this.onDocumentLoadSuccess = this.onDocumentLoadSuccess.bind(this);
    this.loadPdf = this.loadPdf.bind(this);
    this.onSelectYear = this.onSelectYear.bind(this);
    this.onSelectPeriodo = this.onSelectPeriodo.bind(this);
    this.onSelectGrupo = this.onSelectGrupo.bind(this);
    this.clickVerBoletin = this.clickVerBoletin.bind(this);
  }

  componentDidMount(){
    this.setState({ grupos: this.props.location.state.grupos });
    this.setState({ years: this.props.location.state.years });
    
  }

  loadPdf() {
    this.setState({ grupos: this.props.location.state.grupos });

    console.log(this.props);
    console.log(this.state.grupos);
    //this.setState({ruta: rutaNode.ruta + "/documentos/documento.pdf"})
    /*
    axios
      .post("reports/boletin", { tipo_boletin: this.state.radioValue })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
      */
  }

  onDocumentLoadSuccess({ numPages }) {
    this.setState({ NumPages: numPages });
  }

  onSelectYear(e){
    console.log(e)
    this.setState({year_id: e.id})
  }
  onSelectPeriodo(e){
    console.log(e)
    this.setState({periodo_id: e.id})
  }
  onSelectGrupo(e){
    this.setState({grupo_id: e.id})
    console.log(e)

  }

  clickVerBoletin() {
    console.log(this.state)
    let datos = {
      year_id: this.state.year_id,
      periodo_id: this.state.periodo_id,
      grupo_id: this.state.grupo_id
    }
    this.props.history.push({pathname: '/panel/boletin', state: datos});
  }


  render() {
    return (
      <Container>
        <Button onClick={this.loadPdf}>Probando</Button>

        <PanelOptions
          grupos={this.state.grupos}
          years={this.state.years}
          onSelectYear={this.onSelectYear}
          onSelectPeriodo={this.onSelectPeriodo}
          onSelectGrupo={this.onSelectGrupo}
          clickVerBoletin={this.clickVerBoletin}
        ></PanelOptions>

        <Switch>
          <Route exact path="/panel/boletin" render={()=><BoletinAlumno/>}></Route>
          <Route
            path="/panel/pdf"
            render={() => (
              <div>
                <Document
                  onLoadError={() => {
                    console.log(this.state.ruta);
                  }}
                  className="pdfViewer"
                  file={this.state.ruta}
                  onLoadSuccess={this.onDocumentLoadSuccess}
                >
                  <Page pageNumber={this.state.pageNumber} />
                </Document>
              </div>
            )}
          ></Route>
        </Switch>
      </Container>
    );
  }
}

export default Panel;
