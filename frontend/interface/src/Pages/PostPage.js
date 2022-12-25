import React from "react";

class PostPage extends React.Component {
    state = {
        caption: '',
        image: '',
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const post = {
            caption: this.state.caption,
            image: this.state.image,
        };
        axios.post('/posts', post)
            .then(response => {
                this.setState({
                    posts: [...this.state.posts, post],
                });
            })
            .catch(error => {
            });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Type your caption here"
                    value={this.state.caption}
                    onChange={e => this.setState({ caption: e.target.value })}
                />
                <input
                    type="file"
                    onChange={e => this.setState({ image: e.target.files[0] })}
                />
                <button type="submit">Add Post</button>
            </form>
        );
    }
}

export default PostPage;