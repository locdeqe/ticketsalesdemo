export default function fetchTickets (tic) {
    return {
        type: "FETCH_TICKETS",
        payload: tic
    }
}