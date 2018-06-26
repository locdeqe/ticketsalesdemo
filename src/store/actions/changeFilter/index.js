export default function changeFilter (filt, isOnly = false) {
    return {
        type: "CHANGE_FILTER",
        payload: filt,
        isOnly: isOnly
    }
}