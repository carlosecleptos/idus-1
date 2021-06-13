import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

const data = [
    { id: 1, Categoria: "Credito",  },
    { id: 2, Categoria: "Compras",  },
    { id: 3, Categoria: "Servicio",  },
    { id: 4, Categoria: "Cobros", },
    { id: 5, Categoria: "Viaje", },
  ];
  
  class Categorias extends React.Component {
    state = {
      data: data,
      modalActualizar: false,
      modalInsertar: false,
      form: {
        id: "",
        Categoria: "",
        
      },
    };
    mostrarModalActualizar = (dato) => {
        this.setState({
          form: dato,
          modalActualizar: true,
        });
      };
    
      cerrarModalActualizar = () => {
        this.setState({ modalActualizar: false });
      };
    
      mostrarModalInsertar = () => {
        this.setState({
          modalInsertar: true,
        });
      };
    
      cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
      };
    
      editar = (dato) => {
        var contador = 0;
        var arreglo = this.state.data;
        arreglo.map((registro) => {
          if (dato.id == registro.id) {
            arreglo[contador].Categoria = dato.Categoria;
          }
          contador++;
        });
        this.setState({ data: arreglo, modalActualizar: false });
      };
    
      eliminar = (dato) => {
        var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
        if (opcion == true) {
          var contador = 0;
          var arreglo = this.state.data;
          arreglo.map((registro) => {
            if (dato.id == registro.id) {
              arreglo.splice(contador, 1);
            }
            contador++;
          });
          this.setState({ data: arreglo, modalActualizar: false });
        }
      };
    
      insertar= ()=>{
        var valorNuevo= {...this.state.form};
        valorNuevo.id=this.state.data.length+1;
        var lista= this.state.data;
        lista.push(valorNuevo);
        this.setState({ modalInsertar: false, data: lista });
      }
    
      handleChange = (e) => {
        this.setState({
          form: {
            ...this.state.form,
            [e.target.name]: e.target.value,
          },
        });
      };
    
      render() {
        
        return (
            <div>

          
              <Container>
      <Table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Categoria</th>
                    <th></th>
                    <th>Acción</th>
                  </tr>
                </thead>
    
                <tbody>
                  {this.state.data.map((dato) => (
                    <tr key={dato.id}>
                      <td>{dato.id}</td>
                      <td>{dato.Categoria}</td>
                      <td>{dato.anime}</td>
                      <td>
                        <Button
                          color="primary"
                          onClick={() => this.mostrarModalActualizar(dato)}
                        >
                          Editar
                        </Button>{" "}
                        <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Container>
    
            <Modal isOpen={this.state.modalActualizar}>
              <ModalHeader>
               <div><h3>Editar Registro</h3></div>
              </ModalHeader>
    
              <ModalBody>
                <FormGroup>
                  <label>
                   Id:
                  </label>
                
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    value={this.state.form.id}
                  />
                </FormGroup>
                
                <FormGroup>
                  <label>
                    Categoria: 
                  </label>
                  <input
                    className="form-control"
                    name="Categoria"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.form.Categoria}
                  />
                </FormGroup>
                
              </ModalBody>
    
              <ModalFooter>
                <Button
                  color="primary"
                  onClick={() => this.editar(this.state.form)}
                >
                  Editar
                </Button>
                <Button
                  color="danger"
                  onClick={() => this.cerrarModalActualizar()}
                >
                  Cancelar
                </Button>
              </ModalFooter>
            </Modal>
    
    
    
            <Modal isOpen={this.state.modalInsertar}>
              <ModalHeader>
               <div><h3>Insertar Categoria</h3></div>
              </ModalHeader>
    
              <ModalBody>
                <FormGroup>
                  <label>
                    Id: 
                  </label>
                  
                  <input
                    className="form-control"
                    readOnly
                    type="text"
                    value={this.state.data.length+1}
                  />
                </FormGroup>
                
                <FormGroup>
                  <label>
                    Categoria: 
                  </label>
                  <input
                    className="form-control"
                    name="Categoria"
                    type="text"
                    onChange={this.handleChange}
                  />
                </FormGroup>
                
              </ModalBody>
    
              <ModalFooter>
                <Button
                  color="primary"
                  onClick={() => this.insertar()}
                >
                  Insertar
                </Button>
                <Button
                  className="btn btn-danger"
                  onClick={() => this.cerrarModalInsertar()}
                >
                  Cancelar
                </Button>
              </ModalFooter>
    
            </Modal>
    
            <center >
    
            <br />
              <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
              <br />
              </center>
    
    
              </div>
        );
      }
    }
    
    
    const Home = () => (
      <div>
        <h2>Home</h2>
      </div>
    );
    
    const About = () => (
      <div>
        <h2>About</h2>
      </div>
    );
    
    const Contact = () => (
      <div>
        <h2>Contact</h2>
      </div>
    );
    
    

  
  
  
  export default Categorias;
  