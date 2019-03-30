import React from 'react';
import PropTypes from 'prop-types';
import bricklinkLogo from '../../../../../assets/images/logo/bricklink.png';
import bricksetLogo from '../../../../../assets/images/logo/brickset.png';
import { IconButton } from '@material-ui/core';
import styles from './LogoLink.module.css'

export const logoLink = (props) => {
  const { reference, type } = props;
	const link = type === 'bricklink' ?
		`https://www.bricklink.com/v2/catalog/catalogitem.page?M=${reference}`
		: `https://brickset.com/minifigs/${reference}`;
	const image = type === 'bricklink' ? bricklinkLogo : bricksetLogo;
	return (
		<IconButton
			className={styles.icon}	
			href={link}
			target="_blank">
				<img alt={`${type}-logo`} src={image} />
		</IconButton>
	);
}

logoLink.propTypes = {
	reference: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired
}

export default logoLink;
