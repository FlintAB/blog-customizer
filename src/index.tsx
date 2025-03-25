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

	const [pendingState, setPendingState] =
		useState<ArticleStateType>(defaultArticleState);

	const handleChangeApply = () => {
		setCurrentState(pendingState);
	};

	const handleChangeReset = () => {
		setPendingState(defaultArticleState);
		setCurrentState(defaultArticleState);
	};

	const handleFontChange = (
		fontFamilyOption: ArticleStateType['fontFamilyOption']
	) => {
		setPendingState((prev) => ({ ...prev, fontFamilyOption }));
	};

	const handleSizeChange = (
		fontSizeOption: ArticleStateType['fontSizeOption']
	) => {
		setPendingState((prev) => ({ ...prev, fontSizeOption }));
	};

	const handleColorChange = (fontColor: ArticleStateType['fontColor']) => {
		setPendingState((prev) => ({ ...prev, fontColor }));
	};

	const handleBackgroundColorChange = (
		backgroundColor: ArticleStateType['backgroundColor']
	) => {
		setPendingState((prev) => ({ ...prev, backgroundColor }));
	};

	const handleWidthChange = (
		contentWidth: ArticleStateType['contentWidth']
	) => {
		setPendingState((prev) => ({ ...prev, contentWidth }));
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
				pendingState={pendingState}
				onFontChange={handleFontChange}
				onSizeChange={handleSizeChange}
				onColorChange={handleColorChange}
				onBackgroundColorChange={handleBackgroundColorChange}
				onWidthChange={handleWidthChange}
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
