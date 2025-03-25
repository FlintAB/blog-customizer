import { Select } from 'src/ui/select';
import { OptionType, fontColors } from 'src/constants/articleProps';

type TFontColorProps = {
	selectedColor: OptionType;
	onColorChange: (option: OptionType) => void;
};

export const FontColorSelector = ({
	selectedColor,
	onColorChange,
}: TFontColorProps) => {
	return (
		<Select
			selected={selectedColor}
			options={fontColors}
			onChange={onColorChange}
			title='Цвет шрифта'
		/>
	);
};
