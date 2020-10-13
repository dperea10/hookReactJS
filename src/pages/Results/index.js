import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import queryString from 'query-string';

import { searchMovie } from '../../redux/action/search';

export default ({ location }) => {

    useEffect(() => {
      const { movieName } = queryString.parse(location.search);
     console.log(movieName);
    });

    return(
        <Container>
            Results
        </Container>
    )
}

