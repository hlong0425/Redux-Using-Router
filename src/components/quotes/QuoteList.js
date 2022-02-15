import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';


let TYPESORT = 'asc';

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();

  let quotes = props.quotes;

  const queryParams = new URLSearchParams(location.search);
  console.log(queryParams.get('sort'));

  const changleSortingHandler = () => {
    // asc: Tăng dần; 
    // desc: Giảm dần; 
    TYPESORT = TYPESORT === 'asc' ? 'desc' : 'asc';

    quotes = quotes.sort((quoteA, quoteB) => {
      if (TYPESORT === 'asc') {
        return quoteA < quoteB ? 1 : -1;
      }

      if (TYPESORT === 'desc') {
        return quoteA > quoteB ? 1 : -1;
      }

      return 0;
    });

    history.push(`/quotes?sort=${TYPESORT}`);

  }

  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changleSortingHandler}>{TYPESORT === 'asc' ? 'descending' : 'ascending'}</button>
      </div>
      <ul className={classes.list}>
        {quotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
