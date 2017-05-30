import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from '../common/Sidebar';
import Main from '../components/Main';
import Test from '../components/Test';
import ProjectPage from '../containers/ProjectPage';
import AboutPage from '../components/AboutPage';
import NewsPage from '../components/NewsPage';
import NewsArticlePage from '../containers/NewsArticlePage';
import EventsPage from '../components/EventsPage';
import NotFoundPage from '../components/NotFoundPage';
import CampusPage from '../containers/CampusPage';
import TypographyPage from '../components/TypographyPage';
import SidebarNavigation from '../containers/SidebarNavigation';
import SidebarBottom from '../components/SidebarBottom';
import Contacts from '../components/Contacts';
import HeaderBarSubstrate from '../components/HeaderBarSubstrate';

import Header from '../containers/Header';
import Heading from '../components/Heading';
import UserData from '../containers/UserData';
import AuthModal from '../containers/AuthModal';
import Auth from '../containers/Auth';
import MainWrapper from '../containers/MainWrapper';
import ProjectsList from '../containers/ProjectsList';

import { getMenuList } from '../../actions/navigation';
import { toggleSidebar } from '../../actions/interface';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { sidebarOpen: false };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
	componentWillMount() {
		this.props.getMenuList();
	}
  onSetSidebarOpen() {
    // this.setState({ sidebarOpen: sidebarVisibility });
    this.props.toggleSidebar();
  }
  render() {
    // injected by connect call
    const { interfaceState, navigation } = this.props;
    const sidebar = (
      <div>
        <HeaderBarSubstrate />
				<UserData />
				<SidebarNavigation />
				<SidebarBottom />
      </div>
    );
    // <NavListContainer />
		const Center = () => (
			<div>
				<span className="title">{navigation.title}</span>
				{ navigation.subtitle &&
					<div className="small muted silent">
						{navigation.subtitle}
					</div>
				}
			</div>
		);
		const headerProps = {
			center: !navigation.title ? false : <Center />
		};
		return (
			<Router>
				<div className="react-native-web">
					<Header {...headerProps} />
					<Sidebar
						rootClassName="root"
						sidebarClassName="sidebar"
						overlayClassName="sidebar-backdrop"
						sidebar={sidebar}
						// open={this.state.sidebarOpen}
						open={interfaceState.sidebarVisibility}
						onSetOpen={this.onSetSidebarOpen}
					/>
					<MainWrapper>
						<Switch>
							<Route exact path='/' component={Main} />
							<Route path='/contacts' component={Contacts} />
							<Route path='/campuses/:id' component={CampusPage} />
							<Route path='/typo' component={TypographyPage} />
							<Route
								location={location}
								key={location.key}
								exact
								path='/news/page/:page'
								component={NewsPage}
							/>
							<Route
								location={location}
								key={location.key}
								exact
								path='/news'
								component={NewsPage}
							/>
							<Route
								location={location}
								key={location.key}
								path='/news/:id'
								component={NewsArticlePage}
							/>
							<Route path='/test' component={Test} />
							<Route path='/projects' component={ProjectsList} />
							<Route path='/about' component={AboutPage} />
							<Route path='/events' component={EventsPage} />
							<Route path='/contacts' component={Auth} />
							<Route path='/projects/:id' component={ProjectPage} />
							<Route component={NotFoundPage} />
						</Switch>
					</MainWrapper>
					<AuthModal />
				</div>
			</Router>
		);
  }
}

// {!window.__REDUX_DEVTOOLS_EXTENSION__ && <DevTools />}

// <Test />
//
// <Card title="Проект" description="Мой первый проект">
// <Auth />
// </Card>
// <ProjectsList />
// <HelloWorld
//   onClick={() => dispatch(toggleColor())}
//   color={color}
// />

App.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  // color: PropTypes.string.isRequired,
  // data: PropTypes.object.isRequired,
};

const select = state => state;

// Wrap the component to inject dispatch and state into it
export default connect(select, { toggleSidebar, getMenuList })(App);
// export default App;
