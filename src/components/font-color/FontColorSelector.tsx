import { useState } from 'react';
import { Select } from 'src/ui/select';
import { OptionType, fontColors } from 'src/constants/articleProps';

export const FontColorSelector = () => {
	const [selectedFontColor, setSelectedFontColor] = useState<OptionType>(
		fontColors[0]
	);
	const handleFontColorChange = (option: OptionType) => {
		setSelectedFontColor(option);
	};

	return (
		<Select
			selected={selectedFontColor}
			options={fontColors}
			onChange={handleFontColorChange}
			title='Цвет шрифта'
		/>
	);
};
