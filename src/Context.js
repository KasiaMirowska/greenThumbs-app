import React, { createContext } from 'react';

const GreenContext = React.createContext({
    list: [],
    setList: () => {},
})
export default GreenContext;

export class GreenContextProvider extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            list: [],
        }
    }
    
    setList = (data) => {
        console.log(data, 'CONTEXT')
        this.setState({
            list: data,
        })
    }
    
    render(){
        const contextValue = {
            list: this.state.list,
            setList: this.setList,
        }
        return (
            <GreenContext.Provider value={contextValue} >
                {this.props.children}
            </GreenContext.Provider >

        )
    }
}