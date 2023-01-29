import styled from 'styled-components/native';

const PostView = styled.View`
  flex-direction: row;
  padding: 15px;
  border-bottom-width: 1px;
  border-bottom-color: rgba(0, 0, 0, 0.1);
  border-bottom-style: solid;
`;
 
const PostImage = styled.Image`
  width: 100px;
  height: 100px;
`;
const PostDetails = styled.View`
  padding: 15px;
`;
const PostTitle = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;

const PostPrice = styled.Text`
  font-size: 17px;
  font-weight: 700;
`;
export const Post = ({title, price, imageUrl}) => {
    return (
        <PostView>
            <PostImage source = {{ uri: imageUrl}} />
                <PostDetails>
                    <PostTitle>{title}</PostTitle>  
                    <PostPrice>{price}</PostPrice>
                </PostDetails>
        </PostView>
    );
}