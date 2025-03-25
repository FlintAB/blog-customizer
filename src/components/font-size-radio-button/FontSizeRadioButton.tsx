import { RadioGroup } from 'src/ui/radio-group';
import { OptionType, fontSizeOptions } from 'src/constants/articleProps';

type TFontSizeRadioProps = {
	selectedSize: OptionType;
	onSizeChange: (option: OptionType) => void;
};

export const FontSizeRadioButton = ({
	selectedSize,
	onSizeChange,
}: TFontSizeRadioProps) => {
	return (
		<RadioGroup
			options={fontSizeOptions}
			selected={selectedSize}
			onChange={onSizeChange}
			name='fontSize'
			title='Размер шрифта'
		/>
	);
};
