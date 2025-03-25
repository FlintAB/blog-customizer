import { useState } from 'react';
import { Select } from 'src/ui/select';
import { fontFamilyOptions, OptionType } from 'src/constants/articleProps';

export const FontSelector = () => {
	const [selectedFont, setSelectedFont] = useState<OptionType>(
		fontFamilyOptions[0]
	);
	const handleFontChange = (option: OptionType) => {
		setSelectedFont(option);
	};

	return (
		<Select
			selected={selectedFont}
			options={fontFamilyOptions}
			onChange={handleFontChange}
			title='Шрифт'
		/>
	);
};
