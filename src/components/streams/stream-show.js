import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions';
import history from '../../history';

class StreamShow extends React.Component {
    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }
    renderBack = () => {
        history.goBack();
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.dispatch(fetchStream(id));
        this.buildPlayer();
    }

    componentDidUpdate() {
        this.buildPlayer();
    }

    componentWillUnmount() {
        this.player.destroy();
    }

    buildPlayer() {
        const { id } = this.props.match.params;
        if(this.player || !this.props.stream) {
            return;
        }
        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/${id}.flv`
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    render() {
        if(!this.props.stream) {
            return <div>Loading...</div>
        }
        const { title, description } = this.props.stream;
        return (
            <div>
                <video ref={this.videoRef} style={{ width: '100%', height: '500px' }} controls />
                <h1>{title}</h1>
                <h5>{description}</h5>
                <button onClick={this.renderBack} className="ui primary button">Back</button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    stream: state.streams[ownProps.match.params.id]
});

export default connect(mapStateToProps)(StreamShow);