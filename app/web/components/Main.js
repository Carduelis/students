import React, { Component } from 'react';
import MdAllInclusive from 'react-icons/lib/md/all-inclusive';

import Heading from '../components/Heading';
import TopNavigation from '../containers/TopNavigation';

class Main extends Component {
  render() {
    const separator = (
      <div className="separator">
        <div className="separator-line">
          <MdAllInclusive />
        </div>
      </div>
    );

    return (
      <div>
				<TopNavigation />
				<Heading title="МИРЭА" />
        {separator}
        <Heading title="Лента новостей" />
        <div className="content">
					kek
        </div>
      </div>
    );
  }
}

export default Main;
