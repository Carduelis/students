import React, { Component } from 'react';
import MdMenu from 'react-icons/lib/md/menu';
import MdSearch from 'react-icons/lib/md/search';
import HeaderBar from '../common/HeaderBar';
import Button from '../common/Button';
import HeaderBarSubstrate from '../components/HeaderBarSubstrate';
import ButtonGroup from '../common/ButtonGroup';

export default class extends Component {
  render() {
		const DefaultCenter = (
			<span>
				<nobr>Московский технологический</nobr><span> университет </span>
				<nobr className="tiny silent muted">(МИРЭА, МГУПИ, МИТХТ)</nobr>
			</span>
		);
		const Center = this.props.center || DefaultCenter;
    const buttonProps = {
      size: 'sm',
      transparent: true,
			type: 'primary'
    };
    const buttonGroupProps = {
      defaultButtonStyle: {
        ...buttonProps,
        fill: false,
        bordered: true,
      },
      activeButtonStyle: {
        ...buttonProps,
        bordered: false,
        fill: true
      },
      labels: ['Новости', 'Мероприятия'],
      active: 0
    };
    //<ButtonGroup {...buttonGroupProps} />
    const { props } = this;

    props.left.icon = props.left.icon ? <props.left.icon size={32} /> : <MdMenu size={32} />;
    props.right.icon = props.right.icon ? <props.right.icon size={32} /> : <MdSearch size={32} />;
    const headerBarProps = {
      left: <Button {...buttonProps} {...props.left} />,
      center: Center,
      right: <Button {...buttonProps} {...props.right} />,
    };
		console.warn(headerBarProps);
    return (
      <HeaderBarSubstrate>
				<HeaderBar fixed {...headerBarProps} />
      </HeaderBarSubstrate>
    );
  }
}
