import React, { Component } from 'react';
import Loading from './Loading';
import Item from './Item';
import { getVideos } from '../api/';

class List extends Component{
  constructor(props){
  super(props);
  
  this.state = {
  	isLoading: false,
  	videos: null,
    error: null
   };
}

async componentDidMount(){	
  this.setState({ isLoading: true });
  try{
    const videos = await getVideos();
    this.setState({videos, isLoading:false});
  }catch(error){
    this.setState({error, isLoading:false});
  }


}

render(){
	const {videos, isLoading} = this.state;
	if(isLoading){
	   return (<Loading message="Cargando ....."/>);
    }
    return (<React.Fragment>
              <div className="container">
               <div className="grid-container">
                 {
                 	videos && videos.map((video,i) =>{
                 		return (<Item key={i} data={video}/>)
                 	})

                 }
               </div>
              </div>
    	    </React.Fragment>);
}


}

export default List;