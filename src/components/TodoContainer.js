import { Fragment } from 'react';
import SearchText from './SearchText';
import SearchStatus from './SearchStatus';
import PageLimit from './PageLimit';
import Sort from './Sort';

function TodoContainer() {
	return (
		<Fragment>
			<div className='my-2 d-flex gap-3'>
				<SearchText />
				<SearchStatus />
			</div>
			<div className='my-2 d-flex justify-content-between'>
				<PageLimit />
				<Sort />
			</div>
		</Fragment>
	);
}

export default TodoContainer;
