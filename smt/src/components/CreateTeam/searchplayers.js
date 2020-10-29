import { withStyles } from 'react-jss';

import React from 'react';

import Player from './player';

const styles = {
    inputLabel: {
        display: "inline-block",
        color: "#444444",
        fontWeight: "bold",
        marginTop: "25px",
        marginRight: "25px"
    },
    inputText: {
        width: "100%",
        border: "1px solid #d6d8da",
        borderRadius: "5px",
        padding: "5px 15px",
    },
    loading: {
        width: "100px",
        margin: "15px auto"
    },
    results: {
        marginTop: "16px",
        overflow: "auto",
        maxHeight: "516px"
    }
};

withStyles(styles);

class SearchPlayer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            playersResult: [],
            loading: false
        };
    }
    
    searchByName = (event) => {
        if(event.key === 'Enter'){
            event.preventDefault();
            let name = event.target.value.trim();

            if (name.length > 3) {
                this.setState({playersResult: [], loading: true});

                fetch("https://api-football-v1.p.rapidapi.com/v2/players/search/" + name, {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                        "x-rapidapi-key": "fd6a529bf3mshf17662df6502036p1955edjsnea18542c0874"
                    }
                })
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    let players = data.api.players;
                    this.setState({ playersResult: players });
                })
                .catch(err => {
                    console.log(err);
                }).finally(() => {
                    this.setState({loading: false});
                });
            }
        }
    }

    render(){
        const { classes } = this.props;

        return (
            <>
                <div>
                    <label className={classes.inputLabel}>Search Players</label>
                    <input className={classes.inputText} placeholder="Type ENTER to search" type="text" onKeyPress={this.searchByName} />
                </div>

                {this.state.loading ?
                <div className={classes.loading}>
                    <img className={classes.loading} src='/assets/loading.gif' alt="loading..." />
                </div>
                : ''}
                <div className={classes.results}>
                {
                this.state.playersResult.map((item,i) => <Player key={i} {...item} />)
                }
                </div>
                <hr/>
            </>
        );
    }
    
}

export default withStyles(styles)(SearchPlayer);