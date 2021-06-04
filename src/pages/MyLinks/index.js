import React, {useState, useEffect} from 'react';
import { Modal, ActivityIndicator } from 'react-native';
import {Container, Title, ListLink, ContainerEmpty, WarnigText} from './styles';
import Menu from '../../Components/Menu';
import ListItem from '../../Components/ListItem'
import {useIsFocused} from '@react-navigation/native';
import StatusBarPage from '../../Components/StatusBarPage';
import ModalLink from '../../Components/ModalLink';
import {getLinkSave, deleteLink} from '../../Utils/StoreLink';




export default function MyLinks(){
    const [links,setLinks] = useState([]);
    const [data, setData] = useState({});
    const [modalVisible, setModalVisible]= useState(false);
    const [loading,setLoading] = useState(true);
    const isFocused = useIsFocused();

    useEffect(()=>{
        async function getLinks(){
            const result = await getLinkSave('links');
            setLinks(result);
            setLoading(false);
        }
        getLinks();
    },[isFocused]);


    function handleItem(item){
        console.log(item);
        setData(item)
        setModalVisible(true)
    }

    async function handleDelete(id){
        const result = await deleteLink(links,id);
        setLinks(result);
    }

    return(
        <Container>
            <StatusBarPage barStyle="light-content"
            backgroundColor="#132742"/>
            <Menu/>
            <Title>Meus Links</Title>
            {
                loading && (
                    <ContainerEmpty>
                        <ActivityIndicator color="#fff" size={25}/>
                    </ContainerEmpty>
                )
            }
            {
                loading && links.length === 0 && (
                    <ContainerEmpty>
                        <WarnigText>Você ainda não possui nenhum link :(</WarnigText>
                    </ContainerEmpty>
                )
            }
            <ListLink data={links}
                keyExtractor={(item)=>String(item.id)}
                renderItem={({item})=><ListItem data={item} selectedItem={handleItem} deleteItem={handleDelete}/>}
                contentContainerStyle={{paddingBottom: 20}}
                showsVerticalScrollIndicator={false}
            />
            <Modal visible={modalVisible} transparent animationType="slide">
                <ModalLink data={data} onClose={()=>setModalVisible(false)}/>
            </Modal>
        </Container>
    );
}