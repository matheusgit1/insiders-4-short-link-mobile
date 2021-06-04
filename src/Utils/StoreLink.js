import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getLinkSave(key){
    const MyLinks = await AsyncStorage.getItem(key);
    let linkSaves = JSON.parse(MyLinks) || [];
    return linkSaves;
}


export async function saveLink(key, newLink){
    let linksStored = await getLinkSave(key);
    //se encontrar link com mesmo id ou duplicado->ignorar
    const hasLink = linksStored.some(link => link.id === newLink.id);
    if(hasLink){
        console.log("link ja existe");
        return;
    }
    
    linksStored.push(newLink);
    await AsyncStorage.setItem(key,JSON.stringify(linksStored));
}

export async function deleteLink(link, id){
    let MyLinks = link.filter( (item)=>{
        return(item.id !== id) 
    });

    await AsyncStorage.setItem('links',JSON.stringify(MyLinks));
}