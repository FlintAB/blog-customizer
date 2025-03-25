import { useState } from 'react';
import { RadioGroup } from 'src/ui/radio-group';
import { OptionType, fontSizeOptions } from 'src/constants/articleProps';

export const FontSizeRadioButton = () => {
	const [selectedSize, setSelectedSize] = useState<OptionType>(
		fontSizeOptions[0]
	);
	const handleSizeChange = (option: OptionType) => {
		setSelectedSize(option);
	};
	return (
		<RadioGroup
			options={fontSizeOptions}
			selected={selectedSize}
			onChange={handleSizeChange}
			name=''
			title='Размер шрифта'
		/>
	);
};
