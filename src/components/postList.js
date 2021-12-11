import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      errorMsg: "",
    };
  }

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);

        this.setState({ posts: response.data });
      })

      .catch((error) => {
        console.log(error);
        this.setState({ errorMsg: "error !!!!!" });
      });
  }

  render() {
    const { posts, errorMsg } = this.state;
    return (
      <div>
        List of posts in API
        {posts.length
          ? posts.map((item) => <div key={item.id}> {item.title} </div>)
          : null}
        {errorMsg ? <div> {errorMsg} </div> : null}
      </div>
    );
  }
}

export default PostList;
