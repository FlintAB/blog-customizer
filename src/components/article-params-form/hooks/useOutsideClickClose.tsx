import { useEffect } from 'react';

type TUseOutsideClickCloseProps = {
	ref: React.RefObject<HTMLElement>;
	isOpen: boolean;
	onClose: () => void;
};

export const useOutsideClickClose = ({
	ref,
	isOpen,
	onClose,
}: TUseOutsideClickCloseProps) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				onClose();
			}
		};

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref, isOpen, onClose]);
};
