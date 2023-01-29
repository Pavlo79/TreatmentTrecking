import React from "react";
import axios from "axios";
import styled from "styled-components/native";
import { View } from 'react-native';

const PostImage = styled.Image`
  border-radius: 10px,
  marginLeft: 25%
  width: 50%;
  height: 200px;
`;
const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

export const FullPostScreen = ({ route}) => {
    const [items, setItems] = React.useState();
    const {title, imageUrl, sizes} = route.params;
    React.useEffect(() => {
        axios
        .get(imageUrl)
        .then(({ data }) => {
            setItems(data);
        })
        .catch(err => {
            console.log(err);
            alert('Error')
        })
    }, []);
    return (
        <View>
            <PostImage source={items}/>
            <PostTitle>{title}</PostTitle>
        </View>
    )
}