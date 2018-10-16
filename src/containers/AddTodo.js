import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

class AddTodo extends React.Component {
    state = { value: '' }

    handleInput = (e) => {
        this.setState(({ value: e.target.value }));
    }

    render() {
        return (
            <div>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        console.log(this.state.value);
                        this.props.dispatch(addTodo(this.state.value));
                        this.setState({ value: '' });
                    }}
                >
                    <input value={this.state.value} onChange={this.handleInput} />
                    <button type="submit">
                        Add Todo
                </button>
                </form>
            </div>
        )
    }
}

export default connect()(AddTodo);