import React, {useState} from 'react';
import { View , Text, TouchableWithoutFeedback, Share, TouchableOpacity} from 'react-native';
import {ModalContainer, Container, Header, LinkArea, Title,
    LangUrl,ShortLinkArea ,ShortLinkUrl} from './styles';
import {Feather} from '@expo/vector-icons';
import clipboard from 'expo-clipboard';


export default function ModalLink({onClose, data}) {
    function copylink(){
        clipboard.setString(data.link);
    }

    async function handleShare(){
        try{
            const result = await Share.share({
                message: `link: ${data.link}`,
            });
            if(result.action === Share.sharedAction){
                if(result.activityType){
                    console.log('ActivityType');
                }else{
                    console.log('ActivityType');
                }
                
            }else if(result.action === Share.dismissedAction){
                console.log("compartilhado com sucesso");
            }
        }catch(error){
            console.log(error.message);
        }
    }

 return (
   <ModalContainer>
       <TouchableWithoutFeedback onPress={onClose}>
            <View style={{flex: 1}}>
                
            </View>
       </TouchableWithoutFeedback>
       <Container>
           <Header>
               <TouchableOpacity onPress={onClose}>
                    <Feather name="x" size={30} color="#211746"/>
               </TouchableOpacity>
               <TouchableOpacity onPress={handleShare}>
                    <Feather name="share" size={30} color="#211746"/>
               </TouchableOpacity>
           </Header>
           <LinkArea>
                <Title>Link encurtado</Title>
                <LangUrl numberOfLines={1}>{data.long_url}</LangUrl>
           </LinkArea>
           <ShortLinkArea activeOpacity={1} onPress={copylink}>
                <ShortLinkUrl numberOfLines={1}>{data.link}</ShortLinkUrl>
                <TouchableOpacity onPress={copylink}>
                    <Feather name="copy" size={30} color="#fff"/>
                </TouchableOpacity>
           </ShortLinkArea>
       </Container>
   </ModalContainer>
  );
}