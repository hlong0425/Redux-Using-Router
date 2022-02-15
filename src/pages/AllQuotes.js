import QuoteList from "../components/quotes/QuoteList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import { getAllQuotes } from "../lib/api";
import useHttp from "../hook/useHttp";
import { useEffect } from "react";
import NoQuotesFound from '../components/quotes/NoQuotesFound';

const AllQuotes = () => {
    const { sendRequest, data: loadedQuotes, error, status } = useHttp(getAllQuotes, true);
    const isEmptyQuotes = !loadedQuotes || loadedQuotes.length === 0;
    console.log(loadedQuotes);

    useEffect(() => {
        sendRequest();
    }, [sendRequest]);

    if (status === 'pending') {
        return <div className="centered"><LoadingSpinner /></div>
    }

    if (status === 'error') {
        return <div className="centered">{error}</div>
    }

    if (status === 'completed' && isEmptyQuotes) {
        console.log('asda')
        return <NoQuotesFound />
    }

    return (
        <QuoteList quotes={loadedQuotes} />
    )
}

export default AllQuotes; 
