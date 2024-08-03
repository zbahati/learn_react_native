import { getCurrentUser } from "../lib/appwrite";

const { createContext, useContext, useEffect, useState } = require("react");

const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext)

const GlobalProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        getCurrentUser()
            .then((res) => {
                if (res) {
                    setIsLoggedIn(true)
                    setUser(res)
                } else {
                    setIsLoggedIn(false)
                }
            })
            .catch((err) => {
                console.log(err)
            }).finally(() => {
                setIsLoading(false)
            })
    }, [])
    return (
        <GlobalContext.Provider
            value={{
                isLoading,
                user,
                setUser,
                isLoggedIn,
                setIsLoggedIn
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider