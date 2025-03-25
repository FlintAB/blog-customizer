import { useState } from 'react';
import { Select } from 'src/ui/select';
import { OptionType, contentWidthArr } from 'src/constants/articleProps';

export const ContentWidthSelector = () => {
	const [selectedWidth, setSelectedWidth] = useState<OptionType>(
		contentWidthArr[0]
	);
	const handleWidthChange = (option: OptionType) => {
		setSelectedWidth(option);
	};

	return (
		<Select
			selected={selectedWidth}
			options={contentWidthArr}
			onChange={handleWidthChange}
			title='Ширина контента'
		/>
	);
};
