import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';

export const Config = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: 'com.aora.aora_video',
    projectId: '66ad0c53000b1848465c',
    databaseId: '66ad0fda000d286215e2',
    userCollectionId: '66ad100b000f41ac4f11',
    videoCollectionId: '66ad102600092528cd84',
    storageId: '66ad1712000afe5973fa'
}

const client = new Client();
client
    .setEndpoint(Config.endpoint)
    .setProject(Config.projectId)
    .setPlatform(Config.platform)
    ;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client)

export const CreateUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        )

        if(!newAccount) throw Error
        const avatarUrl = avatars.getInitials(username);
        await SignIn(email, password)

        const newUser = await databases.createDocument(
            Config.databaseId,
            Config.userCollectionId,
            ID.unique(),
            {
                account_id: newAccount.$id,
                email,
                password,
                username,
                avatar: avatarUrl
            }
        )

        return newUser
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }

  
}

const SignIn = async (email, password) => {
    try {
        const sessions = await account.createEmailPasswordSession(email,password);
        return sessions;
    } catch (error) {
        console.log(error);
        throw new Error(error)
    }
}
