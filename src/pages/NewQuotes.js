
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from "../hook/useHttp";
import { addQuote } from "../lib/api";


const NewQuotes = function () {
    const { sendRequest, status } = useHttp(addQuote);
    const history = useHistory();
    console.log(status);

    useEffect(() => {
        if (status === 'completed') {
            history.push('/quotes');
        }
    }, [status, history]);

    const addQuoteHandler = function (newQuote) {
        sendRequest(newQuote);
    }

    return (
        <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
    )

}

export default NewQuotes; 