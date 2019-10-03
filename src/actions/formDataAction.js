// 1. Actions will dispatch 2 things: type and payload
// 2. You don't have to return payload, if there is no need
export function getFormData() {
    console.log("action fired!")
    //API calls to get data from database

    // but for now send back fake data

    function createData(id, title, state, url, created, updated) {
        return { id, title, state, url, created, updated };
    }
    const rows = 
        [
                createData('123450943', 'docs: edit copy and docregions', 'open', 'https://api.github.com/repos/ang', '2019-09-23', '2019-09-23'),
                createData('497284810', 'CanActivate Issue?', 'open', 'https://api.github.com/repos/ang', '2019-09-23', '2019-09-23'),
                createData('497257718', 'fix(ivy): process nested animation metadata', 'open', 'https://api.github.com/repos/angular', '2019-09-23', '2019-09-23'),
                createData('497192578', 'docs: clarify http response type', 'open', 'https://api.github.com/repos/ang', '2019-09-23', '2019-09-23'),
                createData('497127777', 'HttpClient is not injected in nested service', 'open', 'https://api.github.com/repos/ang', '2019-09-23', '2019-09-23'),
                createData('496998241', 'build: update rxjs to 6.5.3', 'open', 'https://api.github.com/repos/ang', '2019-09-23', '2019-09-23'),
            ]
        

    return function (dispatch) {
        dispatch({
            type: 'GET_FORM_DATA',
            payload: rows
        })
    }
}

// payload => data to send to reducer
export function addFormData(payload) {
    return function (dispatch) {
        dispatch({
            type: 'ADD_FORM_DATA',
            payload: payload
        })
    }
}

export function deleteFormData(payload) {
    return function (dispatch) {
        dispatch({
            type: 'DELETE_FORM_DATA', 
            payload: payload
        })
    }
}

export function editFormData(payload) {
    return function (dispatch) {
        dispatch({
            type: 'EDIT_FORM_DATA', 
            payload: payload
        })
    }
}