import React, { Component } from 'react';


class AddComments extends Component{
  
    componentDidUpdate(prevProps, prevState) {
        if(this.props.focused){
        this.comment.focus();
        }
    }
    postComment = (e) => {
        e.preventDefault();
        const comment = e.target.elements.comment.value.trim();
        e.target.elements.comment.value = "";
        this.props.postComment(comment);
    }
    render(){
        return(
            <div className="row mt-2">
                <div className="col">
                    <form className="input-group input-group-sm mb-3" onSubmit={this.postComment}>
                        <input type="text" id="comment" name="comment" 
                        ref={c => (this.comment = c)}
                        autoFocus={false} className="form-control" 
                        placeholder="Add a comment..." />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary">Post</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddComments;