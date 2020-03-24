

const thumbObjects = {
    'No single use plastic': 1, 
     'Compostable take-out containers and cups': 2 ,
     'No plastic bottled drinks': 3 ,
     'Composting food scraps': 4,
     'Recycle and compost bins inside': 5 ,
     'Hemp based or fabric napkins and paper towels': 6 ,
     'Papperless, fully computer based billing and record keeping': 7 ,
     'Donating leftover food to local shelter or "free meal night"': 8 ,
     'Locally sourced produce': 9 ,
     'Organic produce': 10 ,
     'Resposible frying oil disposal': 11 ,
     'Saves energy by installing light timers and motion sensors': 12 ,
     'Saves water by installing low flow faucets': 13 ,
     'Saves energy and water by installing energy star equipmnet': 14 ,
}




const EditHelper = {
changeThumbIntoNUM: (thumbs) => {
        let finalThumbList = [];
        thumbs.forEach(thumb => {
            for(let [key,value] of Object.entries(thumbObjects)){
                if(key === thumb) {
                    finalThumbList.push(value)
                } 
            }
        })
        
        return finalThumbList;
    }
}

export default EditHelper;