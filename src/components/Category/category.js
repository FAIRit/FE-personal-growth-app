import React, { Component } from 'react';

class Category extends Component{

    constructor(props){
        super(props);
        this.category = props.categoryContent; 
        this.categoryId = props.categoryId; 
        this.handleRemoveCategory = this.handleRemoveCategory.bind(this);
    }

    handleRemoveCategory(id){
        this.props.removeCategory(id);
    }

    render(){
        return(
            <div className="category fade-in">
                <span className="closebtncategory" 
                      onClick={() => this.handleRemoveCategory(this.categoryId)}>
                      &times;
                </span>
                <p className="categoryContent">{ this.category }</p>
            </div>
        )
    }
}

export default Category;