import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';
import {TouchableOpacity} from 'react-native';

const ActionButton = props => {
  let {text, textRightMargin, textLeftMargin, iconNameLeft, onPress} = props;

  return (
    <ButtonView activeOpacity={0.8} as={TouchableOpacity} onPress={onPress}>
      <IconLeftView name={iconNameLeft} size={24} />

      <Title textLeftMargin={textLeftMargin} textRightMargin={textRightMargin}>
        {text}
      </Title>
    </ButtonView>
  );
};

export default ActionButton;

ActionButton.propTypes = {
  text: PropTypes.string,
  textRightMargin: PropTypes.string,
  textLeftMargin: PropTypes.string,
  iconNameLeft: PropTypes.string,
  onPress: PropTypes.func,
};

ActionButton.defaultProps = {
  text: null,
  textRightMargin: '0px',
  textLeftMargin: '40px',
  iconNameLeft: null,
};

const ButtonView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 5px;
  background-color: transparent;
`;
const IconLeftView = styled(Icon)``;

const Title = styled.Text`
  font-size: 16px;
  margin-left: ${props => props.textLeftMargin};
  margin-right: ${props => props.textRightMargin};
  font-weight: bold;
`;
