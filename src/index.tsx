import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import type { ViewStyle, TextStyle } from 'react-native';

interface IosButtonProps {
  title: string;
  onPress?: () => void;
  bgColor: string;
  type?: 'plain' | 'outline' | 'filled';
  textColor: string;
  textWeight?: 'normal' | 'semibold' | 'bold';
  size?: 'sm' | 'md' | 'lg';
}

export default function IosButton({
  title,
  onPress,
  bgColor = '#007AFF',
  type = 'filled',
  textColor = '#FFFFFF',
  textWeight = 'normal',
  size = 'md',
}: IosButtonProps) {
  const buttonStyle: ViewStyle = { ...styles.button };
  const textStyle: TextStyle = { ...styles.text, color: textColor };

  switch (type) {
    case 'plain':
      buttonStyle.backgroundColor = 'transparent';
      textStyle.color = textColor;
      break;
    case 'outline':
      buttonStyle.backgroundColor = 'transparent';
      buttonStyle.borderColor = bgColor;
      buttonStyle.borderWidth = 1.5;
      textStyle.color = textColor;
      break;
    case 'filled':
      buttonStyle.backgroundColor = bgColor;
      textStyle.color = textColor;
      break;
    default:
      buttonStyle.backgroundColor = bgColor;
      textStyle.color = textColor;
      break;
  }

  if (textWeight === 'bold') {
    textStyle.fontWeight = 'bold';
  } else if (textWeight === 'semibold') {
    textStyle.fontWeight = '600';
  }

  if (size === 'sm') {
    buttonStyle.paddingVertical = 5;
    buttonStyle.paddingHorizontal = 10;
    textStyle.fontSize = 10;
  } else if (size === 'md') {
    buttonStyle.paddingVertical = 10;
    buttonStyle.paddingHorizontal = 20;
    textStyle.fontSize = 16;
  } else if (size === 'lg') {
    buttonStyle.paddingVertical = 14;
    buttonStyle.paddingHorizontal = 28;
    textStyle.fontSize = 20;
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text: {
    lineHeight: 21,
    letterSpacing: 0.25,
  },
});
