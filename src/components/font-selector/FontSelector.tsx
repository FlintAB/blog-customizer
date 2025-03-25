import { Select } from 'src/ui/select';
import { fontFamilyOptions, OptionType } from 'src/constants/articleProps';

type TFontSelectedProps = {
	selectedFont: OptionType;
	onFontChange: (option: OptionType) => void;
};

export const FontSelector = ({
	selectedFont,
	onFontChange,
}: TFontSelectedProps) => {
	return (
		<Select
			selected={selectedFont}
			options={fontFamilyOptions}
			onChange={onFontChange}
			title='Шрифт'
		/>
	);
};
