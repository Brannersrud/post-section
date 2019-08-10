import React, {Component} from 'react';
import Singlepost from './singlepost';


export default class Postview extends Component{
    constructor(props){
        super(props);
        this.state={
            posts:[]
        }
    }

    componentDidMount(){
       const {postarray, connectionUrl} = this.props;
       if(postarray.length !== 0){
           this.setState({posts:postarray})
       }else if(connectionUrl !== undefined){
           fetch(connectionUrl)
           .then((response) => response.json)
           .then((result) => this.setState({posts:result}))
           .catch((err) => console.log(err));
       }else{
           console.log("check array or connection string :)");
       }
    }

   
    render(){
        const {posts} = this.state;
        return(
            <section>
                {posts.map((item) => {
                    return(
                        <Singlepost
                        title={item.title}
                        imgsource={item.imgsrc}
                        content={item.content}
                        pressed={() => console.log(item.id)}
                        />
                    )
                })}      
            </section>
        )
    }
}