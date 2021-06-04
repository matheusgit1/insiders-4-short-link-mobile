import React, {useState} from 'react';
import { View, Text , TouchableWithoutFeedback, Keyboard,ActivityIndicator, KeyboardAvoidingView, Platform, Modal} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import StatusBarPage from '../../Components/StatusBarPage';
import Menu from '../../Components/Menu';
import {ContainerLogo, Logo, ContainerContent,
Title, SubTitle, ContainerInput ,BoxIcon,
 Input, ButtonLink, ButtonLinkText} from './styles';
import {Feather} from '@expo/vector-icons'
import ModalLink from '../../Components/ModalLink';
import Api from '../../Services/Api/Api'
import {saveLink} from '../../Utils/StoreLink'


export default function Home(){
    const [loading, setLoading] = useState(false);
    const [url, setUrl] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [data,setdata] = useState({});
    async function handleShortUrl(){
       
        setLoading(true);
        try{
            const response = await Api.post('/shorten',{
                long_url: url,
            })
            setdata(response.data);
            Keyboard.dismiss();
            setLoading(false);
            saveLink('links',response.data);
            setUrl('');
            setModalVisible(true);
        }
        catch(e){
            alert('ops.. algo deu errado')
            Keyboard.dismiss();
            setLoading(false);
            setUrl('');
        }
    }


    return(
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
        <LinearGradient colors={['#1ddbb9','#132742']}
        style={{flex:1, justifyContent: 'center'}}
        >
            <Menu/>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios'? 'padding' : 'position'} enabled>
                <StatusBarPage backgroundColor="#1ddbb9" barStyle="light-content"/>
                <ContainerLogo>
                    <Logo source={require('../../assets/Logo.png')}/>
                </ContainerLogo>
                <ContainerContent>
                    <Title>Short Link</Title>
                    <SubTitle>Cole seu link para encurtar</SubTitle>
                    <ContainerInput>
                        <BoxIcon>
                            <Feather name="link" size={20} color="#fff"/>
                        </BoxIcon>
                        <Input placeholder="cole seu link aqui"
                        placeholderTextColor="white"
                        autoCapitalize='none'
                        autoCorrect={false}
                        keyboardType="url"
                        value={url}
                        onChangeText={(text)=>setUrl(text)}
                        />
                    </ContainerInput>
                    <ButtonLink onPress={()=>handleShortUrl()}>
                        {
                            loading ? (
                                <ActivityIndicator color="#121212" size={25}/>
                            ) : (
                                <ButtonLinkText>Encurtar link</ButtonLinkText>
                            )
                        }         
                    </ButtonLink>
                </ContainerContent>
            </KeyboardAvoidingView>
            <Modal visible={modalVisible} transparent animationType="slide">
                <ModalLink data={data} onClose={()=>setModalVisible(false)}/>
            </Modal>
        </LinearGradient> 
        </TouchableWithoutFeedback>
    );
}