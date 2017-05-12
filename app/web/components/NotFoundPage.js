import React, { Component } from 'react';
import Icon from 'react-icons/lib/md/block';
// import Arrow from 'react-icons/lib/md/keyboard-backspace';
import Arrow from 'react-icons/lib/md/arrow-back';
import Heading from '../components/Heading';
import PageWrapper from '../common/PageWrapper';
import Button from '../common/Button';

export default class extends Component {
	render() {
		return (
			<PageWrapper>
				<Heading label="Страница не найдена" icon={<Icon />} />
				<div className="content center">
					<p className="small muted">Возможно, что страница была удалена или перемещена.
					Если вы уверены, что страница должна быть,
						<nobr> напишите нам <a href="mailto:pavepy@gmail.com">на почту</a> или&nbsp;
							<a href="tg://msg?text=NotFound">в телеграм</a>
						</nobr>
					</p>
				</div>
				<div className="content center">
					<Button
						bordered
						label="Вернуться назад"
						icon={<Arrow />}
						handleClick={() => history.back()}
					/>
				</div>
			</PageWrapper>
		);
	}
}
