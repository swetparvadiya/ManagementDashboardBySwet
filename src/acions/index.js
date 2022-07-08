export const add = (id,title,body,date) => {
    return {
        type: "ADD",
        payload: {
            id:id,
            title: title,
            date: date
        }
    }
}

export const remove = (id) => {
    return {
        type: "REMOVE",
        payload: {
            id: id
        }
    }
}



export const titleChange = (string) => {
    return {
        type: "CHANGE-TITLE",
        payload: {
            string: string
        }
    }
}
