import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import clsx from 'clsx';

import styles from './ArticleParamsForm.module.scss';

import { useOutsideClickClose } from './hooks/useOutsideClickClose';
import { useRef } from 'react';

import { FontSelector } from '../font-selector/FontSelector';
import { FontSizeRadioButton } from '../font-size-radio-button/FontSizeRadioButton';
import { FontColorSelector } from '../font-color/FontColorSelector';
import { Separator } from 'src/ui/separator';
import { BackgroundColorSelector } from '../backgroundcolor-selector/BackgroundColorSelector';
import { ContentWidthSelector } from '../content-width-selector/ContentWidthSelector';

export type TArticleParamsForm = {
	isOpen: boolean;
	onOpenChange: () => void;
};

export const ArticleParamsForm = ({
	isOpen,
	onOpenChange,
}: TArticleParamsForm) => {
	const formRef = useRef<HTMLElement>(null);

	useOutsideClickClose({ ref: formRef, isOpen: isOpen, onClose: onOpenChange });

	return (
		<>
			<ArrowButton isOpen={isOpen} onClick={onOpenChange} />
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}
				ref={formRef}>
				<form className={styles.form}>
					<div className={styles.spacing_50}>
						<FontSelector />
					</div>
					<div className={styles.spacing_50}>
						<FontSizeRadioButton />
					</div>
					<div className={styles.spacing_50}>
						<FontColorSelector />
					</div>
					<div className={styles.spacing_50}>
						<Separator />
					</div>
					<div className={styles.spacing_50}>
						<BackgroundColorSelector />
					</div>
					<div className={styles.spacing_50}>
						<ContentWidthSelector />
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
