import React from 'react';
import cuid from 'cuid';
import GreeNContext from '../Context';

export default class Checkboxes extends React.Component {
    static contextType = GreeNContext;
    constructor() {
        super()
        this.state = {
            newFolder: false,
            newFolderName: '',
            pickedFolder: null,
            error: null
        }
    }
    

    handleFolderSelection = (e) => {
        if (e.target.value === 'new-folder') {
            this.setState({
                newFolder: true,
            })
        }
        this.setState({
            pickedFolder: e.target.value,
        })
    }

    handleInputField = (e) => {
        if (this.state.newFolder === true) {
            this.setState({
                newFolderName: e.target.value,
            })
        }
    }

    handleBookmarks = (e) => {
        e.preventDefault();
        const placeId = this.props.match.params.id;
        if (this.state.newFolder === true) {
            const createdFolder = {
                folderId: cuid(),
                title: this.state.newFolderName,
                savedPlacesIds: [placeId]
            }
            this.context.addFolder(createdFolder)
            this.setState({
                newFolder: false,
            })
            e.target.reset();
        } else {
            this.context.addPlaceToFolder(placeId, this.state.pickedFolder)
        }
    }

    render() {
        console.log(this.props, 'BOOKMARKS?????????????')
        return (
            <div>
                <form onSubmit={this.handleBookmarks}>
                    <p>Bookmark this place ?</p>
                    <select name='bookmarks' onChange={this.handleFolderSelection}>
                        <option value=''>Choose folder</option>
                        <option value='favorites'>Favorites</option>
                        <option value='new-folder'>Create new folder</option>
                    </select>

                    {this.state.newFolder === false ? <input disabled type='text' placeholder='new folder name' id='newFolder'
                    /> : <input type='text' placeholder='new folder name' id='newFolder' onChange={this.handleInputField} required />}

                    <button type='submit' >SAVE</button>
                </form>
            </div>
        )
    }
}