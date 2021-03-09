import React, {Component} from "react";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Posts extends Component {
    
    createPostItems() {
      return this.props.posts.map((post) => {
          return (
              <p key={post.id}>{post.author} {post.comments} {post.post}</p> 
          )
      })  
    }
    
    render() {
        return (
            <div>
                {this.createPostItems()} 
            </div>
        );    
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(Posts);