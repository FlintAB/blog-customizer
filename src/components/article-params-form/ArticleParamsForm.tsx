import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import clsx from 'clsx';

import styles from './ArticleParamsForm.module.scss';

import { useOutsideClickClose } from './hooks/useOutsideClickClose';
import React, { useRef, useState } from 'react';

import { FontSelector } from '../font-selector/FontSelector';
import { FontSizeRadioButton } from '../font-size-radio-button/FontSizeRadioButton';
import { FontColorSelector } from '../font-color/FontColorSelector';
import { Separator } from 'src/ui/separator';
import { BackgroundColorSelector } from '../backgroundcolor-selector/BackgroundColorSelector';
import { ContentWidthSelector } from '../content-width-selector/ContentWidthSelector';

import {
	ArticleStateType,
	defaultArticleState,
} from 'src/constants/articleProps';

export type TArticleParamsForm = {
	isOpen: boolean;
	onOpenChange: () => void;
	onApply: (newState: ArticleStateType) => void;
	onReset: () => void;
	currentState: ArticleStateType;
};

export const ArticleParamsForm = ({
	isOpen,
	onOpenChange,
	onApply,
	onReset,
	currentState,
}: TArticleParamsForm) => {
	const formRef = useRef<HTMLElement>(null);

	const [pendingState, setPendingState] =
		useState<ArticleStateType>(currentState);

	useOutsideClickClose({ ref: formRef, isOpen: isOpen, onClose: onOpenChange });

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onApply(pendingState);
	};
	const handleReset = (e: React.FormEvent) => {
		e.preventDefault();
		setPendingState(defaultArticleState);
		onReset();
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
		<>
			<ArrowButton isOpen={isOpen} onClick={onOpenChange} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}
				ref={formRef}>
				<form
					className={styles.form}
					onSubmit={handleSubmit}
					onReset={handleReset}>
					<div className={styles.spacing_50}>
						<FontSelector
							selectedFont={pendingState.fontFamilyOption}
							onFontChange={handleFontChange}
						/>
					</div>
					<div className={styles.spacing_50}>
						<FontSizeRadioButton
							selectedSize={pendingState.fontSizeOption}
							onSizeChange={handleSizeChange}
						/>
					</div>
					<div className={styles.spacing_50}>
						<FontColorSelector
							selectedColor={pendingState.fontColor}
							onColorChange={handleColorChange}
						/>
					</div>
					<div className={styles.spacing_50}>
						<Separator />
					</div>
					<div className={styles.spacing_50}>
						<BackgroundColorSelector
							selectedBackgroundColor={pendingState.backgroundColor}
							onBackgroundColorChange={handleBackgroundColorChange}
						/>
					</div>
					<div className={styles.spacing_50}>
						<ContentWidthSelector
							selectedWidth={pendingState.contentWidth}
							onWidthChange={handleWidthChange}
						/>
					</div>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
