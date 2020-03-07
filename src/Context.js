import React, { createContext } from 'react';
//import STORE from './dummyData';

const GreenContext = React.createContext({
    list: [],
    greenPlaces: [],
    users: [],
    folders: [],
    reviews: [],
    setList: () => { },
    setGreenPlaces: () => { },
    addFolder: () => { },
    addPlaceToFolder: () => { },
    addReview: () => { },
    sortReviews: [],

})
export default GreenContext;

export class GreenContextProvider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            greenPlaces: [],
            users: [],
            folders: [],
            reviews: [],
            sortReviews: [],
        }
    }

    setList = (data) => {
        this.setState({
            list: data,
        })
    }
    setGreenPlaces = (data) => {
        this.setState({
            greenPlaces: data
        })
    }

    addFolder = (folder) => {
        this.setState({
            //folders: [...STORE.folders, folder]
        })
    }

    addPlaceToFolder = (id, folderName) => {
        console.log(this.state.folders, folderName, id)
        const pickedFolder = this.state.folders.find(folder => folder.title === folderName)
        console.log(pickedFolder, 'PICKED')
        pickedFolder.savedPlacesIds = [...pickedFolder.savedPlacesIds, id]
    }

    addReview = (review) => {
        console.log(review, 'REVIEW IN CONTEXT')
        this.setState({
            reviews: [...this.state.reviews, review]
        })
    }

    reviewCitySort = (city) => {
        let reviews = this.state.greenPlaces.filter(pl => {
            return pl.location_city.toLowerCase() === city.toLowerCase()
        })
        console.log(reviews)
        this.setState({
            sortReviews: reviews,
        })
    }
    render() {
        console.log(this.state)
        const contextValue = {
            list: this.state.list,
            greenPlaces: this.state.greenPlaces,
            users: this.state.users,
            folders: this.state.folders,
            reviews: this.state.reviews,
            sortReviews: this.state.sortReviews,
            setList: this.setList,
            setGreenPlaces: this.setGreenPlaces,
            addFolder: this.addFolder,
            addPlaceToFolder: this.addPlaceToFolder,
            addReview: this.addReview,
            reviewCitySort: this.reviewCitySort,
        }
        return (
            <GreenContext.Provider value={contextValue} >
                {this.props.children}
            </GreenContext.Provider >

        )
    }
}