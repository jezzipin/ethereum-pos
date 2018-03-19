import React from 'react';
import PropTypes from 'prop-types';
import './GravatarProfile.css';
import md5 from 'md5';

const GravatarProfile = ({ email }) => (
	<div className='GravatarProfile'>
		<img src={'https://www.gravatar.com/avatar/' + md5(email.trim()) + '?size=200'} alt='Gravatar profile image' />
	</div>
);

GravatarProfile.description = `
Used as a visualisation of a customers Gravatar profile picture.
`;

GravatarProfile.defaultProps = {
	email: '',
};

GravatarProfile.propTypes = {
	/** Email to show the profile of the customer */
	email: PropTypes.string.isRequired,

};

export default GravatarProfile;
