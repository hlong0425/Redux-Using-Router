import { Route, useParams } from "react-router-dom";
import { Fragment } from "react/cjs/react.production.min";
import Comments from '../components/comments/Comments'
import HightLightedQuote from '../components/quotes/HighlightedQuote';
import { Link } from "react-router-dom";
import { useRouteMatch } from "react-router-dom/cjs/react-router-dom.min";
import useHttp from "../hook/useHttp";
import { getSingleQuote } from "../lib/api";
import { useEffect } from "react";
import LoadingSpinner from '../components/UI/LoadingSpinner'



const QuotesDetail = (props) => {
    const params = useParams();
    const { data: quote, error, status, sendRequest } = useHttp(getSingleQuote, true)
    const routeMatch = useRouteMatch();

    useEffect(() => {
        sendRequest(params.id);
    }, [sendRequest, params.id])

    if (status === 'pending') {
        return <div className="centered"><LoadingSpinner /></div>
    }


    if (status === 'completed' && error) {
        return <div>{error}</div>
    }

    if (status === 'completed' && !quote) {
        return <div>
            Id invalid
        </div>
    }




    return (
        <Fragment>
            <HightLightedQuote text={quote.text} author={quote.author} />
            <Route exact path={routeMatch.path}>
                <div className='centered'>
                    <Link className="btn--flat" to={`${routeMatch.url}/comments`}>Load Comments</Link>
                </div>
            </Route>
            <Route path={`/quotes/:id/comments`}>
                <Comments />
            </Route>
        </Fragment>
    )
}

export default QuotesDetail; 