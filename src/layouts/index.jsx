import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import Header from './../components/Header/Header';

import 'semantic-ui-css/semantic.min.css';
import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Gatsby Mini Starter"
      meta={[
        { name: 'description', content: 'Gatsby minimal starter kit' },
        { name: 'keywords', content: 'simple, minimal' },
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
