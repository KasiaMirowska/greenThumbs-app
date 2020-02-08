import React, { createContext } from 'react';
import STORE from './dummyData';

const GreenContext = React.createContext({
    list: [],
    users: [],
    folders: [],
    reviews: [],
    setList: () => { },
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
            users: STORE.users,
            folders: STORE.folders,
            reviews: STORE.reviews,
            sortReviews: [],
        }
    }

    setList = (data) => {
        this.setState({
            list: data,
        })
    }

    addFolder = (folder) => {
        this.setState({
            folders: [...STORE.folders, folder]
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
        let reviews = this.state.reviews.filter(rev => {
            console.log(rev.placeCity, city, rev)
            return rev.placeCity.toLowerCase() === city.toLowerCase()
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
            users: this.state.users,
            folders: this.state.folders,
            reviews: this.state.reviews,
            sortReviews: this.state.sortReviews,
            setList: this.setList,
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