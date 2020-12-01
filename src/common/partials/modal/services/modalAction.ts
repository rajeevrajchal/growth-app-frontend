import * as actionType from './modalType'

export const openModal:any = (mode?:string) => {
    return {
        type: actionType.OPEN_MODAL,
        mode: mode
    }
}

export const closeModal:any = () => {
    return {
        type: actionType.CLOSE_MODAL
    }
}
