const STORE = {
  
    users: [
        {
            id: 1,
            reviewsIds: [1, 3],
        }
    ],

    folders: [
        {
            folderId: 1,
            author: 1,
            title: 'favorites',
            savedPlacesIds: []
        }
    ],


    reviews: [
        {
            id: 1,
            author: 1,
            placeId: 'ck6cpc6a100003h5qu7jor4kf',
            placeName: "Honeycomb",
            placeCity: 'Beverly',
            attributes: ["no-plastic", "hemp", "paperless", "donation"],
            addtionalComments: 'Great atmosphere!',
        },
        {
            id: 2,
            author: 1,
            placeId: 'ck6cpc6a100003h5qu7jor4kf',
            placeName: "Honeycomb",
            placeCity: 'Salem',
            attributes: ["no-plastic", "paperless", "donation"],
            addtionalComments: 'Great atmosphere!',
        }
    ]
}
export default STORE;