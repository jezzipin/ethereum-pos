import React from 'react';
import { storiesOf, withInfo } from '../../stories';

import GravatarProfile from './GravatarProfile';

storiesOf('GravatarProfile')

	.addDecorator((story, context) => withInfo(GravatarProfile.description)(story)(context))

	.add('known user', () => (
		<GravatarProfile
			username='jezzipin'
		/>
	))

	.add('unknown user', () => (
		<GravatarProfile
			username='giohsdhsnasdada'
		/>
	))

	.add('empty user', () => (
		<GravatarProfile	/>
	));