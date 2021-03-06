import React from 'react';
import 'antd/dist/antd.css';
import { List, Avatar,Spin } from 'antd';
import TextButtons from '../components/filtromenu';
import { Flexcontainer,Flexcolumn,TituloPrincipal } from '../components/estiloshtml';
import  PendingTimeLine  from '../components/timeline';
class LoadMoreList extends React.Component {
  constructor(props){
        super(props);
        this.state = { 
          initLoading: true,                                          
          data : [],
          error : ""
        };      
  }

  convertirFecha(fechatexto){
     if(typeof fechatexto == "string"){
      var dateobj= new Date(fechatexto);     
      var year = dateobj.getFullYear();  
      var  locale = "en-us";
      var month = dateobj.toLocaleString(locale, { month: "long" });
      return month.toString().concat(" ").concat(year.toString());
     }
    
    return fechatexto;
   }


   componentDidCatch(error, info) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    console.log("componentDidCatch");
    console.log(info.componentStack);
    console.log(error);
  }
      componentWillUnmount(){       
     
      }
    
      componentWillUpdate(){
      
      }

      componentDidUpdate(){
           
      }


    componentDidMount() {
        fetch("https://tripsapi20181211043716.azurewebsites.net/api/trips")          //https://tripsapi20181211043716.azurewebsites.net/api/trips
          .then(res => {      
             return res.json()
            }
          )
          .then(              
            (result) => {     
               this.setState({                
                  initLoading : false,
                  data :result
              });
            }            
          ).catch(error => this.setState({ error : error.message }));
      
      } 
    render(){

        const {initLoading,error,data} = this.state;
        
        if(error){     
            return <div>Lo sentimos algo salio mal:  {error.message}  </div>;
       
        }else {      
         
            return (
              <div>
                  <TextButtons></TextButtons>                  
                    <Flexcontainer>
                    <Flexcolumn>
                    <TituloPrincipal>Tus viajes registrados</TituloPrincipal>
                        <List
                          itemLayout="horizontal"
                          loading={initLoading}
                          dataSource={data}
                          renderItem={item => (
                            <List.Item>
                              <List.Item.Meta                    
                                avatar={<Avatar src={item.urlFlag} />}
                                title={<a href={"https://www.google.com/search?q=" + item.pais }   target="_blank" rel="noopener noreferrer">{item.pais}</a>}
                                description={"Tu viaje fue realizado en " +  
                                this.convertirFecha(item.annoDeLaVisita)                               
                              }                                
                              />
                            </List.Item>                            
                          )}
                        />                  
                  </Flexcolumn>
                  <Flexcolumn>
                  <TituloPrincipal>Histograma</TituloPrincipal>
                  <PendingTimeLine></PendingTimeLine>
                  </Flexcolumn>                    
                  </Flexcontainer>   
                 
              </div>
                );
                }
                
     }
    
   
     
}


export {LoadMoreList};