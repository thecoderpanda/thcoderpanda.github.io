import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Shantanu Vishwanadha's personal website. Blockchain Evangelist, Cloud Engineer and Developer Community Manager, "
      + 'co-founded 3 Startups.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome!</Link></h2>
        </div>
      </header>
      <p> Welcome to my Website. Please feel free to read more <Link to="/about">about me</Link>,
        or you can check out my {' '}
        <Link to="/resume">resume</Link> You can {' '}
        <Link to="/contact">contact</Link> me.
        or read my articles on <a href="https://medium/thecoderpanda"> Medium</a>
      </p>
    </article>
  </Main>
);

export default Index;
