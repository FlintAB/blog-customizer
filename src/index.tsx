import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import {
	defaultArticleState,
	ArticleStateType,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [currentState, setCurrentState] =
		useState<ArticleStateType>(defaultArticleState);

	const handleChangeApply = (newState: ArticleStateType) => {
		setCurrentState(newState);
	};

	const handleChangeReset = () => {
		setCurrentState(defaultArticleState);
	};

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': currentState.fontFamilyOption.value,
					'--font-size': currentState.fontSizeOption.value,
					'--font-color': currentState.fontColor.value,
					'--container-width': currentState.contentWidth.value,
					'--bg-color': currentState.backgroundColor.value,
				} as CSSProperties
			}>
			<Article
				currentState={currentState}
				onApply={handleChangeApply}
				onReset={handleChangeReset}
			/>
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
