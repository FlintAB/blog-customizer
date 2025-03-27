import { Select } from 'src/ui/select';
import { OptionType, backgroundColors } from 'src/constants/articleProps';

type TFontBackgroundColorProps = {
	selectedBackgroundColor: OptionType;
	onBackgroundColorChange: (option: OptionType) => void;
};

export const BackgroundColorSelector = ({
	selectedBackgroundColor,
	onBackgroundColorChange,
}: TFontBackgroundColorProps) => {
	return (
		<Select
			selected={selectedBackgroundColor}
			options={backgroundColors}
			onChange={onBackgroundColorChange}
			title='Цвет фона'
		/>
	);
};
