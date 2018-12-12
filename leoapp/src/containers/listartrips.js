import React from 'react';
import {PantallaCargando,TituloBienvenida} from '../components/controlesautos';
import {ListadorDeTrips} from '../components/tripcomponents';


class ListaViajesDelUsuario extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            cargado : true,                                   
            autosPorModeloyAnno : {},
            error : ""
        };

      
      }

   
      componentWillUnmount(){       
        console.log("componentWillUnmount ListaMarcasDeAutos");
      }
    
      componentWillUpdate(){
        console.log("componentDidUpdate ListaMarcasDeAutos");
      }

      componentDidUpdate(){
        console.log("componentWillUpdate ListaMarcasDeAutos");       
      }


    componentDidMount() {
        fetch("https://tripsapi20181211043716.azurewebsites.net/api/trips", {mode: 'cors'})
          .then(res => res.json())
          .then(              
            (result) => {       
           
               this.setState({  
                  cargado : true,
                  autosPorModeloyAnno :result
              });
            }
            
          )  .catch(error => this.setState({ error, cargado: false }));
      
      } 
    render(){

        const {error,autosPorModeloyAnno,cargado} = this.state;
     
        if(error){     
            return <div>Error : {error.message}</div>;
        }else if(!cargado){
            return <div>Cargando....</div>;
        }else {      
            
                    return( 
                        <div>
                        <TituloBienvenida  label="Sus viajes por el mundo" ></TituloBienvenida> 
                    
                        {autosPorModeloyAnno.length > 0 ? <ListadorDeTrips autos = {autosPorModeloyAnno} /> :<PantallaCargando /> }  
                        </div>
                    );
                }
                
     }
    
   
     
}


export {ListaViajesDelUsuario};