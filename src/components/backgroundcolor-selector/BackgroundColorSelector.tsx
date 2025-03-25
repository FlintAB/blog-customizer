import { useState } from 'react';
import { Select } from 'src/ui/select';
import { OptionType, backgroundColors } from 'src/constants/articleProps';

export const BackgroundColorSelector = () => {
	const [selectedBackgroundColor, setSelectedBackgroundColor] =
		useState<OptionType>(backgroundColors[0]);
	const handleBackgroundColorChange = (option: OptionType) => {
		setSelectedBackgroundColor(option);
	};

	return (
		<Select
			selected={selectedBackgroundColor}
			options={backgroundColors}
			onChange={handleBackgroundColorChange}
			title='Цвет фона'
		/>
	);
};
