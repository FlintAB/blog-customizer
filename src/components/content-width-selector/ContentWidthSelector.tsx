import { Select } from 'src/ui/select';
import { OptionType, contentWidthArr } from 'src/constants/articleProps';

type TFontWidthProps = {
	selectedWidth: OptionType;
	onWidthChange: (option: OptionType) => void;
};

export const ContentWidthSelector = ({
	selectedWidth,
	onWidthChange,
}: TFontWidthProps) => {
	return (
		<Select
			selected={selectedWidth}
			options={contentWidthArr}
			onChange={onWidthChange}
			title='Ширина контента'
		/>
	);
};
