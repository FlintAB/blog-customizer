import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import clsx from 'clsx';

import styles from './ArticleParamsForm.module.scss';

import { useOutsideClickClose } from './hooks/useOutsideClickClose';
import React, { useRef } from 'react';

import { FontSelector } from '../font-selector/FontSelector';
import { FontSizeRadioButton } from '../font-size-radio-button/FontSizeRadioButton';
import { FontColorSelector } from '../font-color/FontColorSelector';
import { Separator } from 'src/ui/separator';
import { BackgroundColorSelector } from '../backgroundcolor-selector/BackgroundColorSelector';
import { ContentWidthSelector } from '../content-width-selector/ContentWidthSelector';
import { OptionType } from 'src/constants/articleProps';

export type TArticleParamsForm = {
	isOpen: boolean;
	onOpenChange: () => void;
	onApply: () => void;
	onReset: () => void;
	onFontChange: (option: OptionType) => void;
	onSizeChange: (option: OptionType) => void;
	onColorChange: (option: OptionType) => void;
	onBackgroundColorChange: (option: OptionType) => void;
	onWidthChange: (option: OptionType) => void;
	selectedFont: OptionType;
	selectedSize: OptionType;
	selectedColor: OptionType;
	selectedBackgroundColor: OptionType;
	selectedWidth: OptionType;
};

export const ArticleParamsForm = ({
	isOpen,
	onOpenChange,
	onApply,
	onReset,
	onFontChange,
	onSizeChange,
	onColorChange,
	onBackgroundColorChange,
	onWidthChange,
	selectedFont,
	selectedSize,
	selectedColor,
	selectedBackgroundColor,
	selectedWidth,
}: TArticleParamsForm) => {
	const formRef = useRef<HTMLElement>(null);

	useOutsideClickClose({ ref: formRef, isOpen: isOpen, onClose: onOpenChange });

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onApply();
	};
	const handleReset = (e: React.FormEvent) => {
		e.preventDefault();
		onReset();
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
							selectedFont={selectedFont}
							onFontChange={onFontChange}
						/>
					</div>
					<div className={styles.spacing_50}>
						<FontSizeRadioButton
							selectedSize={selectedSize}
							onSizeChange={onSizeChange}
						/>
					</div>
					<div className={styles.spacing_50}>
						<FontColorSelector
							selectedColor={selectedColor}
							onColorChange={onColorChange}
						/>
					</div>
					<div className={styles.spacing_50}>
						<Separator />
					</div>
					<div className={styles.spacing_50}>
						<BackgroundColorSelector
							selectedBackgroundColor={selectedBackgroundColor}
							onBackgroundColorChange={onBackgroundColorChange}
						/>
					</div>
					<div className={styles.spacing_50}>
						<ContentWidthSelector
							selectedWidth={selectedWidth}
							onWidthChange={onWidthChange}
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
