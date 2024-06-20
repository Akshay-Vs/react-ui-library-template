import { PropsWithChildren } from 'react';

export interface ButtonProps extends PropsWithChildren {}

export function Button({ children }: ButtonProps) {
	return (
		<button className='bg-slate-300 w-fit px-4 py-2 rounded-md hover:brightness-75'>
			{children}
		</button>
	);
}
