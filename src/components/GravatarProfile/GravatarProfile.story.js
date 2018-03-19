import React from 'react';
import { storiesOf, withInfo } from '../../stories';

import GravatarProfile from './GravatarProfile';

storiesOf('GravatarProfile')

	.addDecorator((story, context) => withInfo(GravatarProfile.description)(story)(context))

	.add('known user', () => (
		<GravatarProfile
			email='coinface1@mail.com'
		/>
	))

	.add('unknown user', () => (
		<GravatarProfile
			email='ag2:asd@test.com'
		/>
	))

	.add('empty user', () => (
		<GravatarProfile	/>
	));